import { supportedLanguages } from "../translations/SupportedLanguages";
import { useTranslation } from "../translations/TranslationHook";
import { Button } from "reactstrap";

const LanguageSelection = () => {
  const { language, setLanguage } = useTranslation();
  return (
    <div className="languages-list">
      {supportedLanguages.map((lang) => (
        <Button
          key={lang.code}
          outline
          color={language === lang.code ? "primary" : "secondary"}
          onClick={() => setLanguage(lang.code)}
          active={language === lang.code}
        >
          {lang.name}
        </Button>
      ))}
    </div>
  );
};

export default LanguageSelection;
