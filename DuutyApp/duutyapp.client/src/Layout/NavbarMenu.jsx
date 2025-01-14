import { useState, useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { FiLogOut } from 'react-icons/fi'; 
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
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggle = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const employerSubMenuItems = [
    {
      to: "/Employer/hire-now",
      title: "Hire Now",
      description: "Hire the best talent quickly.",
    },
    {
      to: "/Employer/pricing",
      title: "Pricing",
      description: "Check our pricing plans.",
    },
    {
      to: "/employer/refundpolicy",
      title: "Refund Policy",
      description: "Learn about our refund policy.",
    },
  ];

  const employeeSubMenuItems = [
    {
      to: "/employee/find-jobs",
      title: "Find Jobs",
      description: "Browse available jobs.",
    },
    {
      to: "/employee/apply-now",
      title: "Apply Now",
      description: "Submit your application.",
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
          <Nav className="ms-auto align-items-center" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/about-us">
                About Us
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Employer
              </DropdownToggle>
              <DropdownMenu dark end>
                {employerSubMenuItems.map((item, index) => (
                  <DropdownItem key={index}>
                    <NavLink className="nav-link" to={item.to}>
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
              <DropdownMenu dark end>
                {employeeSubMenuItems.map((item, index) => (
                  <DropdownItem key={index}>
                    <NavLink className="nav-link" to={item.to}>
                      {item.title}
                    </NavLink>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink className="nav-link" to="/pricing">
                Pricing
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </NavItem>
            <NavItem className="get-demo-btn pr-2">
              <Button color="primary">
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
                  onClick={() => navigate("/auth")}
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
