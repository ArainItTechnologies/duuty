import { NavLink } from "react-router-dom";
import { useTranslation } from "../translations/TranslationHook";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>

      <div className="job-options">
        <div className="find-a-job">
          <NavLink to="/Employee/find-jobs-by-category" className="nav__link">
            {t("joboptions.findjob")}
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
