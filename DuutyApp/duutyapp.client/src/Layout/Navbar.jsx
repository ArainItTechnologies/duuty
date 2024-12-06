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
import ToggleSwitch from "../CustomElements/ToggleSwitch";
import { useTranslation } from "../translations/TranslationHook";
import { supportedLanguages } from "../translations/SupportedLanguages";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const { t, language, setLanguage } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isToggleChecked, setIsToggleChecked] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);
  const toggleSubMenu = () => setShowSubMenu(!showSubMenu);

  const closeMenuOnMobile = () => {
    setShowMenu(false);
  };

  const handleToggleChange = (checked) => {
    setIsToggleChecked(checked);
    if (checked) {
      setIsModalOpen(true);
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (isModalOpen) {
      setIsToggleChecked(false);
    }
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    toggleModal();
  };

  return (
    <header className="header">
      <nav className="nav__container">
        <NavLink to="/" className="nav__logo">
          <img
            src={Logo}
            alt="DUUTY"
            className="nav__logo-image"
          />
        </NavLink>

        <div
          className={`nav__menu ${showMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            {/* Add Toggle Switch as the first item */}
            <li className="nav__item nav__toggle-switch">
              <ToggleSwitch
                label={"Switch Language"}
                checked={isToggleChecked}
                onChange={handleToggleChange}
              />
            </li>
            <li className="nav__item dropdown">
              <div
                className="nav__link dropdown__toggle"
                onClick={toggleSubMenu}
              >
                {t("navbar.candidate")}
                <IoChevronDown
                  className={`dropdown__icon ${showSubMenu ? "rotate" : ""}`}
                />
              </div>
              <ul
                className={`nav__submenu ${showSubMenu ? "show-submenu" : ""}`}
              >
                <li className="nav__submenu-item">
                  <NavLink
                    to="/Candidate/find-jobs-by-category"
                    onClick={() => {
                      closeMenuOnMobile();
                      toggleSubMenu();
                    }}
                  >
                    <IoArrowForward /> Find jobs by Category
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav__item">
              <NavLink
                to="/employer"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Employer
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/company"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Company
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/find-a-job"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Find A Job
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/hire-now" className="nav__link nav__cta">
                Hire Now
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
