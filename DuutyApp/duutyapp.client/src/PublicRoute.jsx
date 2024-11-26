import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ isAuthenticated, redirectTo = "/", children }) => {
    return isAuthenticated ? <Navigate to={redirectTo} /> : children;
};

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    redirectTo: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default PublicRoute;
