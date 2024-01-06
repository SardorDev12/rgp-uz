// Styles
import "../Styles/aksiya.scss";

// Images
import aksiyaImg from "../Images/aksiya.svg";

// Components
import Cta from "./Cta";

function Aksiya() {
  return (
    <div className="aksiyalar">
      <div className="aksiya-title">Aksiyalar</div>
      <div className="aksiya-cards">
        <div className="aksiya-card">
          <div className="aksiya-img">
            <img src={aksiyaImg} alt="aksiya img" />
            <div className="aksiya-info">
              <h3 className="card-title">Sayt orqali buyurtma uchun</h3>
              <h1 className="aksiya">15%</h1>
              <Cta txt={"Aksiyani olish"} />
            </div>
          </div>
        </div>
        <div className="aksiya-card">
          <div className="aksiya-img">
            <img src={aksiyaImg} alt="aksiya img" />
            <div className="aksiya-info">
              <h3 className="card-title">
                Pensionerlar <br /> uchun
              </h3>
              <h1 className="aksiya">15%</h1>
              <Cta txt={"Aksiyani olish"} />
            </div>
          </div>
        </div>
        <div className="aksiya-card">
          <div className="aksiya-img">
            <img src={aksiyaImg} alt="aksiya img" />
            <div className="aksiya-info">
              <h3 className="card-title">Tug'ilgan kuningiz uchun</h3>
              <h1 className="aksiya">15%</h1>
              <Cta txt={"Aksiyani olish"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aksiya;
