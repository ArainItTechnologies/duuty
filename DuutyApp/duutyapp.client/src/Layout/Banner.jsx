import { useState } from "react";
import { useTranslation } from "../translations/TranslationHook";
import { GoRocket } from "react-icons/go";
import { FaRegTimesCircle } from "react-icons/fa";

const Banner = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);

  const hideBanner = () => setIsVisible(false);

  return (
    isVisible && (
      <div className="banner-section">
        <h3 className="banner-heading">
          {t("banner")}
          <GoRocket size={30} style={{ paddingLeft: "5px", color: "yellow" }} />
          <FaRegTimesCircle
            size={15}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              cursor: "pointer",
              color: "white",
            }}
            onClick={hideBanner} // Hide the banner when clicked
          />
        </h3>
      </div>
    )
  );
};

export default Banner;
