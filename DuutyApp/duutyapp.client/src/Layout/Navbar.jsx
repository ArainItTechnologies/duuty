import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  IoClose,
  IoMenu,
  IoChevronDown,
  IoArrowForward,
} from "react-icons/io5";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import LanguageSelectionCard from "../Components/LanguageSelectionCard";
import { useTranslation } from "../translations/TranslationHook";
import { supportedLanguages } from "../translations/SupportedLanguages";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const { t, language, setLanguage } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);
  const [showCandidateSubMenu, setShowCandidateSubMenu] = useState(false);
  const [showEmployerSubMenu, setShowEmployerSubMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);
  const toggleCandidateSubMenu = () => {
    setShowCandidateSubMenu(!showCandidateSubMenu);
    setShowEmployerSubMenu(false);
  };
  const toggleEmployerSubMenu = () => {
    setShowCandidateSubMenu(false);
    setShowEmployerSubMenu(!showEmployerSubMenu);
  };

  const closeMenuOnMobile = () => {
    setShowCandidateSubMenu(false);
    setShowEmployerSubMenu(false);
    toggleMenu();
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <header className="header">
      <nav className="nav__container">
        <NavLink to="/" className="nav__logo">
          <img src={Logo} alt="DUUTY" className="nav__logo-image" />
        </NavLink>

        <div
          className={`nav__menu ${showMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>
                Home
              </NavLink>
            </li>
            <li className="nav__item dropdown">
              <div
                className="nav__link dropdown__toggle"
                onClick={toggleCandidateSubMenu}
              >
                {t("navbar.candidate")}
                <IoChevronDown
                  className={`dropdown__icon ${
                    showCandidateSubMenu ? "rotate" : ""
                  }`}
                />
              </div>
              <ul
                className={`nav__submenu ${
                  showCandidateSubMenu ? "show-submenu" : ""
                }`}
              >
                <li className="nav__submenu-item">
                  <NavLink
                    to="/Candidate/find-jobs-by-category"
                    onClick={() => {
                      closeMenuOnMobile();
                      toggleCandidateSubMenu();
                    }}
                  >
                    <IoArrowForward /> Find jobs by Category
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav__item dropdown">
              <div
                className="nav__link dropdown__toggle"
                onClick={toggleEmployerSubMenu}
              >
                {t("navbar.employer")}
                <IoChevronDown
                  className={`dropdown__icon ${
                    showEmployerSubMenu ? "rotate" : ""
                  }`}
                />
              </div>
              <ul
                className={`nav__submenu ${
                  showEmployerSubMenu ? "show-submenu" : ""
                }`}
              >
                <li className="nav__submenu-item">
                  <NavLink
                    to="/Employer/hire-now"
                    onClick={() => {
                      closeMenuOnMobile();
                      toggleEmployerSubMenu();
                    }}
                  >
                    <IoArrowForward /> Hire Now
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav__item">
              <NavLink
                to="/about-us"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/auth" className="nav__link nav__cta">
                Login/SignUp
              </NavLink>
            </li>
          </ul>
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <IoClose />
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <IoMenu />
        </div>
      </nav>

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
    </header>
  );
};

export default Navbar;
