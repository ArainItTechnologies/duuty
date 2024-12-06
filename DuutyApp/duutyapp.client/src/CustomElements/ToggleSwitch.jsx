import PropTypes from "prop-types";
import "./ToggleSwitch.scss";

const ToggleSwitch = ({ label, checked, onChange }) => {
  return (
    <div className="toggle-switch-container">
      <label htmlFor="toggle" className="toggle-switch-label-text">
        {label}
      </label>
      <div className="toggle-switch">
        <input
          type="checkbox"
          id="toggle"
          className="toggle-switch-input"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <label htmlFor="toggle" className="toggle-switch-label">
          <span className="toggle-switch-inner"></span>
          <span className="toggle-switch-switch"></span>
        </label>
      </div>
    </div>
  );
};

ToggleSwitch.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default ToggleSwitch;
