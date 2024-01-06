// Styles
import "../Styles/adsbanner.scss";

// Images
import adsBannerImg from "../Images/ads-banner.svg";

// Components
import Cta from "./Cta";

function AdsBanner() {
  return (
    <div className="ads-section">
      <div className="adsbanner">
        <img src={adsBannerImg} alt="ads banner" />
        <div className="ads-card">
          <h1>Kuchli mutaxasis kerakmi?</h1>
          <p>
            Bizning uzoq yillik tajribaga ega mutaxassizlardan tarkib topgan
            jamoamiz sizning gaz plitangizga doir har qanday muammoga yechim
            berishga tayyor.
          </p>
          <Cta txt={"Qo'ng'iroq qilish"} />
        </div>
      </div>
    </div>
  );
}

export default AdsBanner;
