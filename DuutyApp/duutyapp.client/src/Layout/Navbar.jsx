import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp, ChevronRight } from "lucide-react";
import { useTranslation } from "../translations/TranslationHook";
import LanguageSelectionCard from "../Components/LanguageSelectionCard";
import { supportedLanguages } from "../translations/SupportedLanguages";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import Logo from "../assets/Logo-2.0.png";

const Navbar = () => {
  const {
    t,
    language,
    setLanguage,
    isLanguageSelected,
    setIsLanguageSelected,
  } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(!isLanguageSelected);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsLanguageSelected(true);
    setIsModalOpen(false);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navigation = {
    home: { label: "Home", path: "/" },
    aboutUs: { label: "About Us", path: "/about-us" },
    contactUs: { label: "Contact Us", path: "/contact" },
    employer: {
      label: "Employer",
      submenu: [
        { label: "Post a Job", path: "/employer/post-job" },
        { label: t("joboptions.hirenow"), path: "/employer/hire-now" },
      ],
    },
    employee: {
      label: "Employee",
      submenu: [
        { label: "Contact Us", path: "/employee/contact" },
        {
          label: t("joboptions.findjob"),
          path: "/Employee/find-jobs-by-category",
        },
        { label: "Apply Now", path: "/employee/apply-now" },
      ],
    },
  };

  const quickActions = [
    { label: t("joboptions.findjob"), path: "/Employee/find-jobs-by-category" },
    // { label: t("joboptions.hirenow"), path: "/employer/hire-now" },
  ];

  const toggleDropdown = (key) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="nav-header">
      {/* Modal for Language Selection */}
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Select Language</ModalHeader>
        <ModalBody>
          <LanguageSelectionCard
            languages={supportedLanguages}
            selectedLanguage={language}
            onLanguageChange={handleLanguageChange}
          />
        </ModalBody>
      </Modal>
      <nav>
        <div className="container">
          <div className="nav-content">
            {/* Logo */}
            <div className="logo">
              <img src={Logo} alt="Logo" className="logo-image" />
            </div>

            {/* Desktop Navigation */}
            <div className="desktop-nav">
              {Object.entries(navigation).map(([key, item]) => (
                <div key={key} className="nav-item">
                  {item.submenu ? (
                    <div className="submenu-container">
                      <div
                        onClick={() => toggleDropdown(key)}
                        className="submenu-toggle"
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            toggleDropdown(key);
                          }
                        }}
                      >
                        <span>{item.label}</span>
                        {activeDropdown === key ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronRight size={16} /> // Use ChevronRight for inline submenus
                        )}
                      </div>
                      {activeDropdown === key && (
                        <div className="submenu">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className="submenu-item"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="nav-link"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile/Tablet Quick Actions and Menu */}
            <div className="mobile-nav">
              {/* Quick Action Buttons */}
              {quickActions.map((action) => (
                <a
                  key={action.path}
                  href={action.path}
                  className="quick-action"
                >
                  {action.label}
                </a>
              ))}

              {/* Mobile Menu Button */}
              <div
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="menu-icon"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setIsMenuOpen(!isMenuOpen);
                  }
                }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="mobile-dropdown">
            <div className="mobile-dropdown-content">
              {Object.entries(navigation).map(([key, item]) => (
                <div key={key} className="mobile-nav-item">
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(key)}
                        className="mobile-dropdown-button"
                      >
                        <span>{item.label}</span>
                        {activeDropdown === key ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        )}
                      </button>
                      {activeDropdown === key && (
                        <div className="mobile-dropdown-menu">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              onClick={() => {
                                setIsMenuOpen(!isMenuOpen);
                                setActiveDropdown(null); // Close submenu
                              }}
                              className="mobile-dropdown-item"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => {
                        setIsMenuOpen(!isMenuOpen);
                        setActiveDropdown(null); // Close submenu
                      }}
                      className="mobile-nav-link"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
