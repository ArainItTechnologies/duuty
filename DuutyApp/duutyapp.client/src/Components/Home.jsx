import { NavLink } from "react-router-dom";
import { supportedLanguages } from "../translations/SupportedLanguages";
import { useTranslation } from "../translations/TranslationHook";
import { Button } from "reactstrap";

const Home = () => {
  const { language, setLanguage } = useTranslation();
  console.log(language);

  return (
    <div>
      <div className="languages-list">
        {supportedLanguages.map((lang) => (
        <Button
          key={lang.code}
          outline
          color={language === lang.code ? "primary" : "secondary"}
          onClick={() => setLanguage(lang.code)}
          active={language === lang.code} // This will mark the selected button as active
        >
          {lang.name}
        </Button>
      ))}
      </div>
      <div className="job-options">
        <div className="find-a-job">
          <NavLink to="/Candidate/find-jobs-by-category" className="nav__link">
            Find A job
          </NavLink>
        </div>
        <div className="hire-now">
          <NavLink to="/Employer/hire-now" className="nav__link">
            Hire Now
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
