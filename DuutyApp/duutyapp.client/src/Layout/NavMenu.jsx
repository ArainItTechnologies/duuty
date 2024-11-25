import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
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

import { FaUser } from "react-icons/fa6";

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
            <UncontrolledDropdown nav inNavbar hidden={!isAuthenticated}>
              <DropdownToggle nav caret>
                <FaUser />
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavMenu;
