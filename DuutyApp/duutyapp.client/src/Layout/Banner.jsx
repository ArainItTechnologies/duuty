import { useState } from "react";
import { useTranslation } from "../translations/TranslationHook";
import { PiChefHatThin } from "react-icons/pi";
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
          <PiChefHatThin className="icon" size={25} style={{ paddingLeft: "5px", color: "white", transform: "rotate(45deg)" }} />
          <FaRegTimesCircle
            size={15}
            style={{
              position: "absolute",
              right: "10px",
              cursor: "pointer",
              color: "white",
            }}
            onClick={hideBanner}
          />
        </h3>
      </div>
    )
  );
};

export default Banner;
