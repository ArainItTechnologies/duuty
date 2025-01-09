import { useState } from "react";
import { useTranslation } from "../translations/TranslationHook";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import { FaCaretDown } from "react-icons/fa";
import SubMenuItem from "./Menu/SubMenuItem";

const NavbarMenu = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const employerSubMenuItems = [
    {
      to: "/Employer/hire-now",
      title: t("navbar.employer.hirenow"),
      description: t("navbar.employer.hirenownote"),
    },
    {
      to: "/Employer/pricing",
      title: t("navbar.employer.pricing"),
      description: t("navbar.employer.pricingnote"),
    },
    {
      to: "/employer/refundpolicy",
      title: t("navbar.employer.refundpolicy"),
      description: t("navbar.employer.refundpolicynote"),
    },
  ];

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
              <div
                className="nav-link"
                onClick={toggleModal}
                onMouseEnter={toggleModal}
                style={{ cursor: "pointer" }}
              >
                {t("navbar.employer.heading")}
                <FaCaretDown style={{ fontSize: "24px" }}></FaCaretDown>
              </div>
            </NavItem>
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
        <div className="menu-modal">
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{ display: "flex", flexWrap: "wrap", gap: "100px" }}
          >
            {employerSubMenuItems.map((item, index) => (
              <SubMenuItem
                key={index}
                to={item.to}
                onClick={toggleModal}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarMenu;
