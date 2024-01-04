import "../Styles/about.scss";
import ContactBtn from "./ContactBtn";
import aboutImg1 from "../Images/about img 1.png";
import aboutImg2 from "../Images/about img 2.png";

function About() {
  return (
    <section className="about-section">
      <div className="container">
        <h1 className="section-title">Haqimizda</h1>
        <div className="about-info">
          <p>
            RGP saytiga xush kelibsiz. 2010-yilda o'z faoliyatini boshlagan
            bizning jamoa gaz plitalar ta'mirlashda sizning ichonchli
            hamkoringiz bo'lishiga ishonamiz. Oshxonangizdagi gaz plitangizning
            ahamiyatini tushungan holda, professionallardan tarkib topgan jamoa
            bor imkoniyatini ishga solgan holda, eng zo'r qulayliklarni taqdim
            etishni maqsad qilgan.
          </p>
          <ContactBtn text={"Bog'lanish"} number={"+998 90 601 04 01"} />
        </div>
        <div className="about-imgs">
          <div className="about-img">
            <img src={aboutImg1} alt="about img" />
          </div>
          <div className="about-img">
            <img src={aboutImg2} alt="about img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
