import PropTypes from "prop-types";

const LanguageSelectionCard = ({ languages, onLanguageChange, selectedLanguage }) => {
  return (
    <div className="language-card">
      {languages.map((lang) => (
        <div key={lang.code} className="language-box">
          <div className="language-name">{lang.name}</div>
          <input
            type="radio"
            id={`radio-${lang.code}`}
            name="language"
            value={lang.code}
            checked={selectedLanguage === lang.code}
            onChange={(e) => onLanguageChange(e.target.value)}
          />
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
