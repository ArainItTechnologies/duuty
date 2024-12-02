import PropTypes from "prop-types";
import { Container } from "reactstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="duuty-app">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Container className="content" >{children}</Container>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
