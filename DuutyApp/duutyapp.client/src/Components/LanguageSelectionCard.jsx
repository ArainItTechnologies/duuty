import PropTypes from "prop-types";

const LanguageSelectionCard = ({ languages, onLanguageChange, selectedLanguage }) => {
  return (
    <div className="language-card">
      {languages.map((lang) => (
        <div
          key={lang.code}
          className={`language-box ${selectedLanguage === lang.code ? "selected" : ""}`}
          onClick={() => onLanguageChange(lang.code)}
        >
          <div className="language-name">{lang.name}</div>
        </div>
      ))}
    </div>
  );
};

LanguageSelectionCard.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onLanguageChange: PropTypes.func.isRequired,
  selectedLanguage: PropTypes.string.isRequired,
};

export default LanguageSelectionCard;