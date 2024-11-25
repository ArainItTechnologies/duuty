import PropTypes from "prop-types"; // Import PropTypes
import { Container } from "reactstrap";
import NavMenu from "./NavMenu";

const Layout = ({ children }) => {
  return (
    <div>
      {/* Navbar */}
      <NavMenu />

      {/* Main Content */}
      <Container style={{ marginTop: "20px" }}>{children}</Container>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
