import PropTypes from "prop-types";
import { useLocation } from 'react-router-dom';
import { Container } from "reactstrap";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Footer from "./Footer";

const Layout = ({ children }) => {

  const location = useLocation();

  // Check if the current route is Home
  const isHomePage = location.pathname === '/';

  return (
    <div className="duuty-app">
    {/* Render the banner only on the HomeComponent */}
    {isHomePage && (
        <Banner/>
      )}
      {/* Navbar */}
      <Navbar />

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
