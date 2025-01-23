import { NavLink } from "react-router-dom";
import { useTranslation } from "../translations/TranslationHook";
import LanguageSelection from "./LanguageSelection";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <LanguageSelection />

      <div className="job-options">
        <div className="find-a-job">
          <NavLink to="/Employee/find-jobs-by-category" className="nav__link">
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
  );
};

export default Home;
