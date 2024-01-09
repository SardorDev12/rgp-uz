// Styles
import "../Styles/services.scss";

// Components
import Form from "./Form";
import CommentsSlider from "./CommentsSlider";
import { useTranslation } from "react-i18next";

// Images
import servicesBg from "../Images/services-bg.svg";

// Icons
import { FaFireFlameCurved } from "react-icons/fa6";
import { GiAutoRepair } from "react-icons/gi";
import { MdAutorenew } from "react-icons/md";
import { MdWifiCalling3 } from "react-icons/md";
import { MdOutlineRecommend } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { MdOutlineStar } from "react-icons/md";

function Services() {
  const { t } = useTranslation();
  const formProps = {
    title: t("form.formTitle"),
    api: "https://sardorfarhodogli.pythonanywhere.com/applications/",
    plc1: t("form.name"),
    plc2: t("form.num"),
    plc3: t("form.message"),
    name1: "full_name",
    name2: "phone_number",
    name3: "message",
  };
  return (
    <div className="services-section" id="services">
      <div className="services-bg">
        <img src={servicesBg} alt="services bg" loading="lazy" />
      </div>
      <div className="services-info">
        <div className="services-title">{t("services.servicesTitle")}</div>
        <div className="service-cards">
          <div className="service-card">
            <FaFireFlameCurved />
            <h4>{t("services.diagnoz")}</h4>
          </div>
          <div className="service-card">
            <GiAutoRepair />
            <h4>{t("services.tamirlash")}</h4>
          </div>
          <div className="service-card">
            <MdAutorenew />
            <h4>{t("services.yangilash")}</h4>
          </div>
          <div className="service-card">
            <MdWifiCalling3 />
            <h4>{t("services.konsultatsiya")}</h4>
          </div>
          <div className="service-card">
            <MdOutlineRecommend />
            <h4>{t("services.maslahat")}</h4>
          </div>
          <div className="service-card">
            <IoHome />
            <h4>{t("services.manzil")}</h4>
          </div>
        </div>
      </div>
      <div className="izohlar">
        <div className="izohlar-slider">
          <div className="stars">
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
          </div>
          <div className="slider">
            <CommentsSlider />
          </div>
        </div>
        <div className="izohlar-form">
          <Form {...formProps} />
        </div>
      </div>
    </div>
  );
}

export default Services;
