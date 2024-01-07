// Styles
import "../Styles/aksiya.scss";

// Images
import aksiyaImg from "../Images/aksiya.svg";

// Components
import Cta from "./Cta";
import { useTranslation } from "react-i18next";

function Aksiya() {
  const { t } = useTranslation();
  return (
    <div className="aksiyalar">
      <div className="aksiya-title">{t("aksiyalar.aksiyaTitle")}</div>
      <div className="aksiya-cards">
        <div className="aksiya-card">
          <div className="aksiya-img">
            <img src={aksiyaImg} alt="aksiya img" />
            <div className="aksiya-info">
              <h3 className="card-title">
                {t("aksiyalar.aksiyaCards.saytOrqali")}
              </h3>
              <h1 className="aksiya">10%</h1>
              <Cta txt={t("aksiyalar.aksiyaCards.aksiyaBtnTxt")} />
            </div>
          </div>
        </div>
        <div className="aksiya-card">
          <div className="aksiya-img">
            <img src={aksiyaImg} alt="aksiya img" />
            <div className="aksiya-info">
              <h3 className="card-title">
                {t("aksiyalar.aksiyaCards.pensionerlar")}
              </h3>
              <h1 className="aksiya">15%</h1>
              <Cta txt={t("aksiyalar.aksiyaCards.aksiyaBtnTxt")} />
            </div>
          </div>
        </div>
        <div className="aksiya-card">
          <div className="aksiya-img">
            <img src={aksiyaImg} alt="aksiya img" />
            <div className="aksiya-info">
              <h3 className="card-title">
                {" "}
                {t("aksiyalar.aksiyaCards.birthday")}
              </h3>
              <h1 className="aksiya">15%</h1>
              <Cta txt={t("aksiyalar.aksiyaCards.aksiyaBtnTxt")} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aksiya;
