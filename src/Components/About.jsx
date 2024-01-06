// Styles
import "../Styles/about.scss";

// Images
import posterimg from "../Images/about-poster.svg";

// Components
import Cta from "./Cta";

function About() {
  return (
    <div className="about-section">
      <div className="about-poster">
        <div className="poster-img">
          <img src={posterimg} alt="about poster" loading="lazy" />
          <div className="poster-text">
            <h2>Biz haqimizda...</h2>
            <h1>Barcha turdagi gaz plita ta'mirlash xizmati</h1>
          </div>
        </div>
      </div>
      <div className="about-info">
        <h1 className="about-title">Bizning omadli tariximiz</h1>
        <p>
          RGP saytiga xush kelibsiz. 2010-yilda o'z faoliyatini boshlagan
          bizning jamoa gaz plitalar ta'mirlashda sizning ichonchli hamkoringiz
          bo'lishiga ishonamiz.
          <br />
          <br />
          Oshxonangizdagi gaz plitangizning ahamiyatini tushungan holda,
          professionallardan tarkib topgan jamoa bor imkoniyatini ishga solgan
          holda, eng zo'r qulayliklarni taqdim etishni maqsad qilgan.
        </p>
        <Cta txt={"BOG'LANISH"} num={"+998 90 601 04 01 "} />
      </div>
    </div>
  );
}

export default About;
