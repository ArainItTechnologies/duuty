import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";
import Logo from "../assets/logo.png";
import { useTranslation } from "../translations/TranslationHook";

const NavbarMenu = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
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
              <NavLink className="nav-link" to="/pricing">
                {t("navbar.pricing")}
              </NavLink>
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
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
              {t("navbar.candidate.heading")}
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>
                  <NavLink
                    className="nav-link"
                    style={{ color: "inherit" }}
                    to="/Candidate/find-jobs-by-category"
                  >
                    {t("navbar.candidate.findJob")}
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
    </div>
  );
};

export default NavbarMenu;
