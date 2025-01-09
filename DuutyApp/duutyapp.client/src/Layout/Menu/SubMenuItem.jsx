import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const SubMenuItem = ({ onClick, title, description, to }) => {
  return (
    <NavLink
      className="sub-menu-item"
      onClick={onClick}
      style={{ cursor: "pointer" }}
      to={to}
    >
      <div className="sub-menu-content">
        <div
          style={{ width: "100%", display: "inline-flex", marginRight: "10px" }}
        >
          <h4>{title}</h4>
          <FaArrowRight
            className="icon"
            style={{ color: "yellow", marginLeft: "10px", marginTop: "7px" }}
          />
        </div>
        <p>{description}</p>
      </div>
    </NavLink>
  );
};

SubMenuItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SubMenuItem;
