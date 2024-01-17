import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/partners.scss";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import partner1 from "../Images/Partners/img1.svg";
import partner2 from "../Images/Partners/img2.svg";
import partner3 from "../Images/Partners/img3.svg";
import partner4 from "../Images/Partners/img4.svg";
import partner5 from "../Images/Partners/img5.svg";
import partner6 from "../Images/Partners/img6.svg";
import partner7 from "../Images/Partners/img7.svg";
import partner8 from "../Images/Partners/img8.svg";
import partner9 from "../Images/Partners/img9.svg";
import partner10 from "../Images/Partners/img10.svg";
import partner11 from "../Images/Partners/img11.svg";
import partner12 from "../Images/Partners/img12.svg";
import partner13 from "../Images/Partners/img13.svg";
import partner14 from "../Images/Partners/img14.svg";
import partner15 from "../Images/Partners/img15.svg";
import partner16 from "../Images/Partners/img16.svg";
import partner17 from "../Images/Partners/img17.svg";
import partner18 from "../Images/Partners/img18.svg";
import partner19 from "../Images/Partners/img19.svg";
import partner20 from "../Images/Partners/img20.svg";
import partner21 from "../Images/Partners/img21.svg";
import partner22 from "../Images/Partners/img22.svg";

// Images

function Partners() {
  const { t } = useTranslation();
  const settings = {
    arrows: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="partners-section">
      <div className="partners-title">{t("partnersTitle")}</div>
      <div className="partners">
        <Slider {...settings}>
          <div className="partner">
            <img src={partner1} alt="partner img" loading="lazy" />
          </div>
          <div className="partner">
            <img src={partner2} alt="partner img" loading="lazy" />
          </div>
          <div className="partner">
            <img src={partner3} alt="partner img" loading="lazy" />
          </div>
          <div className="partner">
            <img src={partner4} alt="partner img" loading="lazy" />
          </div>
          <div className="partner">
            <img src={partner5} alt="partner img" loading="lazy" />
          </div>
          <div className="partner">
            <img src={partner6} alt="partner img" loading="lazy" />
          </div>
          <div className="partner">
            <img src={partner7} alt="partner img" loading="lazy" />
          </div>
          <div className="partner">
            <img src={partner8} alt="partner img" loading="lazy" />
          </div>
          <div className="partner">
            <img src={partner9} alt="partner img" loading="lazy" />
          </div>
          <div className="partner">
            <img src={partner10} alt="partner img" loading="lazy" />
          </div>
          <div className="partner">
            <img src={partner11} alt="partner img" loading="lazy" />
          </div>
          <div className="partner">
            <img src={partner12} alt="partner img" loading="lazy" />
          </div>
          <div className="partner">
            <img src={partner13} alt="partner img" loading="lazy" />
          </div>
          <div className="partner">
            <img src={partner14} alt="partner img" loading="lazy" />
          </div>
          <div className="partner">
            <img src={partner15} alt="partner img" loading="lazy" />
          </div>
          <div className="partner">
            <img src={partner16} alt="partner img" loading="lazy" />
          </div>
          <div className="partner">
            <img src={partner17} alt="partner img" loading="lazy" />
          </div>
          <div className="partner">
            <img src={partner18} alt="partner img" loading="lazy" />
          </div>
          <div className="partner">
            <img src={partner19} alt="partner img" loading="lazy" />
          </div>
          <div className="partner">
            <img src={partner20} alt="partner img" loading="lazy" />
          </div>
          <div className="partner">
            <img src={partner21} alt="partner img" loading="lazy" />
          </div>
          <div className="partner">
            <img src={partner22} alt="partner img" loading="lazy" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Partners;
