import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { getRoleFromToken } from "./utils/jwtUtils";

const RoleProtectedRoute = ({ allowedRoles, children }) => {
  const token = localStorage.getItem("token");
  const role = token ? getRoleFromToken(token) : null;

  return allowedRoles.includes(role) ? children : <Navigate to="/unauthorized" />;
};

RoleProtectedRoute.propTypes = {
  allowedRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
};

export default RoleProtectedRoute;
