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

function About() {
  return (
    <div className="about-section">
      <div className="about-us">
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
            bizning jamoa gaz plitalar ta'mirlashda sizning ichonchli
            hamkoringiz bo'lishiga ishonamiz.
            <br />
            <br />
            Oshxonangizdagi gaz plitangizning ahamiyatini tushungan holda,
            professionallardan tarkib topgan jamoa bor imkoniyatini ishga solgan
            holda, eng zo'r qulayliklarni taqdim etishni maqsad qilgan.
          </p>
          <Cta txt={"BOG'LANISH"} />
        </div>
      </div>
      <div className="pros">
        <h1 className="pros-title">Afzalliklar</h1>
        <div className="pros-cards">
          <div className="card">
            <div className="pro-img">
              <img src={proImg1} alt="pro img" />
              <div className="pro-card">
                <h3 className="pro-card__title">Tezkorlik</h3>
                <p>Har qanday muammoni tezlikda hal qilamiz.</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="pro-img">
              <img src={proImg2} alt="pro img" />
              <div className="pro-card">
                <h3 className="pro-card__title">Yuqori sifat</h3>
                <p>Xizmatlarimiz yuqori sifat bilan baxolanadi.</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="pro-img">
              <img src={proImg3} alt="pro img" />
              <div className="pro-card">
                <h3 className="pro-card__title">Qulay narx</h3>
                <p>Barcha xizmatlarimiz hamma uchun qulay narxlarda.</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="pro-img">
              <img src={proImg4} alt="pro img" />
              <div className="pro-card">
                <h3 className="pro-card__title">Ko'p yillik tajriba</h3>
                <p>10 yildan ortiq tajribaga ega jamoa.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
