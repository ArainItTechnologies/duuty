import { useState, useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
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
import Logo from "../assets/logo.png";

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
      <Navbar className="custom-navbar fixed-top" dark expand="md">
        <NavbarBrand>
          <NavLink
            to="/"
            className="d-flex align-items-center"
            onClick={() => handleMenuClose("/")}
          >
            <img src={Logo} alt="DUUTY" className="nav__logo-image" />
          </NavLink>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} style={{ maxWidth: "fit-content" }} />
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
            <NavItem className="get-demo-btn pr-2">
              <Button
                color="primary"
                onClick={() => handleMenuClose("/get-demo")}
              >
                Get Demo
              </Button>
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
                  color="secondary"
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
