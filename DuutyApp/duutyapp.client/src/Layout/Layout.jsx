import PropTypes from "prop-types"; // Import PropTypes
import { Container } from "reactstrap";
import NavMenu from "./NavMenu";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="duuty-app">
      {/* Navbar */}
      <NavMenu />

      {/* Main Content */}
      <Container style={{ marginTop: "20px" }}>{children}</Container>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
