import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import logo from "../assets/logo.png";
import { userLogout } from "../api/auth";

import { FaRightFromBracket } from "react-icons/fa6";

const NavMenu = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("token") !== null;
  });

  const toggle = () => setIsOpen(!isOpen);

  const handleLogout = async () => {
    const token = localStorage.getItem("token");
    const result = await userLogout(token);

    if (result.success) {
      localStorage.removeItem("token");
      setIsAuthenticated(false);
      navigate("/login");
    } else {
      alert(`Logout failed: ${result.message}`);
    }
  };

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/" className="mr-auto">
          <img
            src={logo}
            alt="Logo"
            style={{ height: "40px", marginRight: "10px" }}
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className="mr-2" />
        <Collapse isOpen={isOpen} navbar>
          {/* Add ms-auto here to float the Nav items to the right */}
          <Nav className="ms-auto" navbar>
            <NavItem hidden={isAuthenticated}>
              <NavLink href="/login">Login</NavLink>
            </NavItem>
            <NavItem hidden={isAuthenticated}>
              <NavLink href="/register">Register</NavLink>
            </NavItem>
            <NavLink onClick={handleLogout} hidden={!isAuthenticated}>
                <FaRightFromBracket />
            </NavLink>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavMenu;
