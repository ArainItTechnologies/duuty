import { useState } from "react";
import { useTranslation } from "../translations/TranslationHook";
import { Button,Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png"; // Adjust the path to your logo

const NavbarMenu = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div>
      <Navbar className="custom-navbar" dark expand="md">
        <NavbarBrand>
          <NavLink
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <img src={Logo} alt="DUUTY" className="nav__logo-image" />
          </NavLink>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/">
                {t("navbar.home")}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/about-us">
                {t("navbar.about")}
              </NavLink>
            </NavItem>
            <NavItem>
              <div className="nav-link" onClick={toggleModal} style={{ cursor: "pointer" }}>
                {t("navbar.employer.heading")}
              </div>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                {t("navbar.employer.heading")}
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>
                  <NavLink
                    className="nav-link"
                    style={{ color: "inherit" }}
                    to="/Employer/hire-now"
                  >
                    {t("navbar.employer.hirenow")}
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink
                    className="nav-link"
                    style={{ color: "inherit" }}
                    to="/Employer/pricing"
                  >
                    {t("navbar.employer.pricing")}
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
              {t("navbar.employee.heading")}
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>
                  <NavLink
                    className="nav-link"
                    style={{ color: "inherit" }}
                    to="/Employee/find-jobs-by-category"
                  >
                    {t("navbar.employee.findJob")}
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink to="/auth">
                <Button color="info">Login/SignUp</Button>
              </NavLink>
            </NavItem> 
          </Nav>
        </Collapse>
      </Navbar>
      {isModalOpen && (
        <div className="employer-modal" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <ul>
              <li><NavLink to="/employer/submenu1">{t("navbar.submenu1")}</NavLink></li>
              <li><NavLink to="/employer/submenu2">{t("navbar.submenu2")}</NavLink></li>
              <li><NavLink to="/employer/submenu3">{t("navbar.submenu3")}</NavLink></li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarMenu;
