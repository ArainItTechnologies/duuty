import { NavLink } from "react-router-dom";
import { useTranslation } from "../translations/TranslationHook";
import LanguageSelection from "./LanguageSelection";
import teaMasterImage from "../assets/tea-master.jpg";


const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="banner-section">
        <h1 className="banner-heading">{t("banner")}</h1>
        <p className="banner-slogan">{t("slogan")}</p>
      </div>

      <LanguageSelection />

      <div className="job-options-container">
        <div className="job-options">
          <div className="find-a-job">
            <NavLink
              to="/Candidate/find-jobs-by-category"
              className="nav__link"
            >
              {t("joboptions.findajob")}
            </NavLink>
          </div>
          <div className="hire-now">
            <NavLink to="/Employer/hire-now" className="nav__link">
              {t("joboptions.hirenow")}
            </NavLink>
          </div>
        </div>
      </div>
      <div className="image-container" style={{ backgroundImage: `url(${teaMasterImage})` }}></div>
    </div>
  );
};

export default Home;
