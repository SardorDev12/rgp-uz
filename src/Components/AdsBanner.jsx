// Styles
import "../Styles/adsbanner.scss";

// Images
import adsBannerImg from "../Images/ads-banner.svg";

// Components
import Cta from "./Cta";
import { useTranslation } from "react-i18next";

function AdsBanner() {
  const { t } = useTranslation();
  return (
    <div className="ads-section">
      <div className="adsbanner">
        <img src={adsBannerImg} alt="ads banner" loading="lazy" />
        <div className="ads-card">
          <h1>{t("ads.adsTitle")}</h1>
          <p>{t("ads.adsTxt")}</p>
          <Cta txt={t("ads.adsCtaTxt")} />
        </div>
      </div>
    </div>
  );
}

export default AdsBanner;
