import { NavLink } from "react-router-dom";
import { useTranslation } from "../translations/TranslationHook";
import LanguageSelection from "./LanguageSelection";
import Carousel from "./Carousel";
import carousel1 from "../assets/carousel1.jpg";
import carousel2 from "../assets/carousel2.jpg";
import carousel3 from "../assets/carousel3.jpg";
import carousel4 from "../assets/carousel4.jpg";
import carousel5 from "../assets/carousel5.jpg";
import carousel6 from "../assets/carousel6.jpg";

const Home = () => {
  const { t } = useTranslation();
  const images = [
    carousel1,
    carousel2,
    carousel3,
    carousel4,
    carousel5,
    carousel6,
  ];

  return (
    <div>
      <div className="banner-section">
        <h1 className="banner-heading">{t("banner")}</h1>
        <p className="banner-slogan">{t("slogan")}</p>
      </div>

      <LanguageSelection />
      <Carousel images={images} />

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
