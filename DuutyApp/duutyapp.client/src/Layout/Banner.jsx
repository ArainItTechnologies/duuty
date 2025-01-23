import { useTranslation } from "../translations/TranslationHook";
import { GoRocket } from "react-icons/go";

const Banner = () => {
  const { t } = useTranslation();
  return (
    <div className="banner-section">
      <h3 className="banner-heading">{t("banner")} <GoRocket size={30} style={{ paddingLeft:"5px", color: 'yellow'}}/></h3> 
      {/* <p className="banner-slogan">{t("slogan")}</p> */}
    </div>
  );
};

export default Banner;
