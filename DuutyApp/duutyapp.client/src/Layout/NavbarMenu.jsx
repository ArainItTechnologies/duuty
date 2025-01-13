import { useState, useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
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
import Logo from "../assets/logo.png"; // Adjust the path to your logo

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
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/about-us">
                About Us
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Employer
              </DropdownToggle>
              <DropdownMenu end>
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
              <DropdownMenu end>
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
              <Button color="primary" className="get-demo-btn">
                Get Demo
              </Button>
            </NavItem>
            {isLoggedIn ? (
              <NavItem>
                <Button color="danger" onClick={handleLogout}>
                  Logout
                </Button>
              </NavItem>
            ) : (
              <NavItem>
                <NavLink className="nav-link" to="/auth">
                  <Button color="info">Login/SignUp</Button>
                </NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarMenu;
