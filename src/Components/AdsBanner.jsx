// Styles
import "../Styles/adsbanner.scss";

// Images
import adsBannerImg from "../Images/ads-banner.svg";

function AdsBanner() {
  return (
    <div>
      <div className="adsbanner">
        <img src={adsBannerImg} alt="ads banner" />
      </div>
    </div>
  );
}

export default AdsBanner;
