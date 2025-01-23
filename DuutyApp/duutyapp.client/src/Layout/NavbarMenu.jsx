import { useState, useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { LiaTimesSolid } from "react-icons/lia";
import { RxHamburgerMenu } from "react-icons/rx";

import {
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
  Button,
} from "reactstrap";
import { AuthContext } from "../contexts/AuthContext";
import Logo from "../assets/Logo-2.0.png";

const NavbarMenu = () => {
  const [isOpen, setIsOpen] = useState(false); // Main menu toggle
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggle = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    logout();
    handleMenuClose("/auth");
  };

  const handleMenuClose = (path) => {
    setIsOpen(false); // Close the menu
    navigate(path); // Navigate to the selected route
  };

  const employerSubMenuItems = [
    { to: "/Employer/hire-now", title: "Hire Now" },
    { to: "/Employer/pricing", title: "Pricing" },
    { to: "/employer/refundpolicy", title: "Refund Policy" },
  ];

  const employeeSubMenuItems = [
    { to: "/employee/find-jobs", title: "Find Jobs" },
    { to: "/employee/apply-now", title: "Apply Now" },
  ];

  return (
    <div>
      <Navbar className="custom-navbar fixed-top" expand="md">
        <NavbarBrand>
          <div
            to="/"
            className="d-flex align-items-center"
            onClick={() => handleMenuClose("/")}
          >
            <img src={Logo} alt="DUUTY" className="nav__logo-image" />
          </div>
        </NavbarBrand>
        <div
          className="d-flex align-items-center"
          style={{ marginTop: "-18px" }}
        >
          <Button
            color="primary"
            className="get-demo-button"
            onClick={() => handleMenuClose("/get-demo")}
          >
            Find Job
          </Button>
          <Button
            color="primary"
            className="get-demo-button"
            onClick={() => handleMenuClose("/get-demo")}
          >
            HireNow
          </Button>
          <NavbarToggler
            onClick={toggle}
            style={{ maxWidth: "fit-content", marginTop: "0px", background: "transparent" }}
          >
            {isOpen ? (
              <span className="navbar-toggler-close">
                <LiaTimesSolid size={30} color="#6002ea"/>
              </span>
            ) : (
              <span className="navbar-icon">
                <RxHamburgerMenu size={30} color="#6002ea" />
              </span> 
            )}
          </NavbarToggler>
        </div>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto align-items-center" navbar>
            <NavItem>
              <NavLink
                className="nav-link"
                to="/about-us"
                activeClassName="active"
                onClick={() => handleMenuClose("/about-us")}
              >
                About Us
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Employer
              </DropdownToggle>
              <DropdownMenu className="custom-dropdown" end>
                {employerSubMenuItems.map((item, index) => (
                  <DropdownItem key={index}>
                    <NavLink
                      className="nav-link"
                      to={item.to}
                      onClick={() => handleMenuClose(item.to)}
                    >
                      {item.title}
                    </NavLink>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Employee
              </DropdownToggle>
              <DropdownMenu className="custom-dropdown" end>
                {employeeSubMenuItems.map((item, index) => (
                  <DropdownItem key={index}>
                    <NavLink
                      className="nav-link"
                      to={item.to}
                      onClick={() => handleMenuClose(item.to)}
                    >
                      {item.title}
                    </NavLink>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink
                className="nav-link"
                to="/pricing"
                activeClassName="active"
                onClick={() => handleMenuClose("/pricing")}
              >
                Pricing
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link"
                to="/contact"
                activeClassName="active"
                onClick={() => handleMenuClose("/contact")}
              >
                Contact
              </NavLink>
            </NavItem>
            {isLoggedIn ? (
              <NavItem>
                <Button color="danger" onClick={handleLogout}>
                  <FiLogOut size={20} />
                </Button>
              </NavItem>
            ) : (
              <NavItem>
                <Button
                  className="auth-btn"
                  onClick={() => handleMenuClose("/auth")}
                >
                  Login
                </Button>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarMenu;
