// Styles
import "../Styles/home.scss";

// Images
import bannerLogo from "../Images/banner-logo.svg";
import bannerWave from "../Images/banner-wave.svg";

// Components
import Cta from "./Cta";
import Form from "./Form";

const formProps = {
  title: "Hoziroq bizga buyurtma bering!",
  api: "https://sardorfarhodogli.pythonanywhere.com/applications/",
  plc1: "Ism",
  plc2: "Raqam",
  plc3: "Xabar",
  name1: "full_name",
  name2: "phone_number",
  name3: "message",
};

function Home() {
  return (
    <div className="home">
      <div className="home-bg">
        <img src={bannerWave} alt="home bg" />
      </div>
      <div className="home-logo">
        <img src={bannerLogo} alt="home logo" />
      </div>
      <div className="home-info">
        <h1 className="home-title">
          SAMARQAND VILOYATIDA GAZ PLITA <br /> TA'MIRLASH XIZMATI
        </h1>
        <p className="home-desc">Har qanday gaz plitangizni ta'mirlaymiz</p>
        <Cta txt={"Bog'lanish"} num={"+998 90 601 04 01"} />
      </div>
      <div className="home-form">
        <Form {...formProps} />
      </div>
    </div>
  );
}

export default Home;
