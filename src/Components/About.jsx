// Styles
import "../Styles/about.scss";

// Images
import posterimg from "../Images/about-poster.svg";
import proImg1 from "../Images/pro-img-1.svg";
import proImg2 from "../Images/pro-img-2.svg";
import proImg3 from "../Images/pro-img-3.svg";
import proImg4 from "../Images/pro-img-4.svg";

// Components
import Cta from "./Cta";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import LoadingCard from "./LoadingCard";

function About() {
  const [loading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const handleImagesLoad = () => {
    setImagesLoaded(true);
  };

  useEffect(() => {
    const fakeLoadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(fakeLoadingTimeout);
    };
  }, []);

  const { t } = useTranslation();

  return (
    <div className="about-section" id="about">
      <div className="about-us">
        <div className="about-poster">
          <div className="poster-img">
            <img src={posterimg} alt="about poster" loading="lazy" />
            <div className="poster-text">
              <h2>{t("about.imgTitle")}</h2>
              <h1>{t("about.imgTxt")}</h1>
            </div>
          </div>
        </div>
        <div className="about-info">
          <h1 className="about-title">{t("about.aboutTitle")}</h1>
          <p>
            {t("about.aboutTxt1")}
            <br />
            <br />
            {t("about.aboutTxt2")}
          </p>
          <Cta txt={t("home.ctaText")} />
        </div>
      </div>
      <div className="pros">
        <h1 className="pros-title">{t("about.pros.prosTitle")}</h1>
        <div className="pros-cards">
          {loading ? (
            <LoadingCard />
          ) : (
            <div className="card">
              <div className="pro-img">
                <img src={proImg1} alt="pro img" loading="lazy" />
                <div className="pro-card">
                  <h3 className="pro-card__title">
                    {t("about.pros.tezkorlik")}
                  </h3>
                  <p>{t("about.pros.tezkorlikTxt")}</p>
                </div>
              </div>
            </div>
          )}
          {loading ? (
            <LoadingCard />
          ) : (
            <div className="card">
              <div className="pro-img">
                <img src={proImg2} alt="pro img" loading="lazy" />
                <div className="pro-card">
                  <h3 className="pro-card__title">{t("about.pros.sifat")}</h3>
                  <p>{t("about.pros.sifatTxt")}</p>
                </div>
              </div>
            </div>
          )}
          {loading ? (
            <LoadingCard />
          ) : (
            <div className="card">
              <div className="pro-img">
                <img src={proImg3} alt="pro img" loading="lazy" />
                <div className="pro-card">
                  <h3 className="pro-card__title">{t("about.pros.narx")}</h3>
                  <p>{t("about.pros.narxTxt")}</p>
                </div>
              </div>
            </div>
          )}
          {loading ? (
            <LoadingCard />
          ) : (
            <div className="card">
              <div className="pro-img">
                <img src={proImg4} alt="pro img" loading="lazy" />
                <div className="pro-card">
                  <h3 className="pro-card__title">{t("about.pros.tajriba")}</h3>
                  <p>{t("about.pros.tajribaTxt")}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
