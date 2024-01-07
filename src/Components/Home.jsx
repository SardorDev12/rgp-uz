// Styles
import "../Styles/home.scss";

// Images
import bannerLogo from "../Images/banner-logo.svg";
import bannerWave from "../Images/banner-wave.svg";

// Components
import Cta from "./Cta";
import Form from "./Form";

import { useTranslation } from "react-i18next";

function Home() {
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
    <div className="home" id="home">
      <div className="home-bg">
        <img src={bannerWave} alt="home bg" />
      </div>
      <div className="home-logo">
        <img src={bannerLogo} alt="home logo" />
      </div>
      <div className="home-info">
        <h1 className="home-title">
          {t("home.homeTitle1")} <br /> {t("home.homeTitle2")}
        </h1>
        <p className="home-desc">{t("home.homeText")}</p>
        <Cta txt={t("home.ctaText")} />
      </div>
      <div className="home-form">
        <Form {...formProps} />
      </div>
    </div>
  );
}

export default Home;
