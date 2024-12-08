import { NavLink } from "react-router-dom";
import { supportedLanguages } from "../translations/SupportedLanguages";
import { useTranslation } from "../translations/TranslationHook";

const Home = () => {
  const { setLanguage } = useTranslation();

  return (
    <div>
      <div className="languages-list">
        {supportedLanguages.map((lang) => (
          <div
            onClick={() => setLanguage(lang.code)}
            key={lang.code}
            className="language-box"
          >
            <div className="language-name">{lang.name}</div>
          </div>
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
