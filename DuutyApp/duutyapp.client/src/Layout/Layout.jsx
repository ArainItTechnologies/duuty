import PropTypes from "prop-types";
import { Container } from "reactstrap";
import NavbarMenu from "./NavbarMenu";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="duuty-app">
      {/* Navbar */}
      <NavbarMenu />

      {/* Main Content */}
      <Container className="content">{children}</Container>

      {/* Footer */}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
