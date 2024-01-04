import '../Styles/services.scss'
import service1 from '../Images/service 1.png'
import service2 from '../Images/service 2.png'
import service3 from '../Images/service 3.png'
import serviceimg1 from '../Images/service img 1.png'
import serviceimg2 from '../Images/service img 2.png'
import serviceimg3 from '../Images/service img 3.png'
import ContactBtn from './ContactBtn'

function Services() {
  return (
    <section className="services-section">
      <div className="container">
      <h1 className="section-title">Xizmatlar</h1>
      <div className="services">
        <div className="service">
          <div className="service-img">
            <img src={serviceimg1} alt="service img" />
            <div className="service-info">
              <div className="service-icon">
                <img src={service1} alt="service logo" />
              </div>
              <h3 className="service-title">
              Gaz plitalar diagnostikasi
              </h3>
            </div>
          </div>
        </div>
        <div className="service">
          <div className="service-img">
            <img src={serviceimg2} alt="service img" />
            <div className="service-info">
              <div className="service-icon">
                <img src={service2} alt="service logo" />
              </div>
              <h3 className="service-title">
              Gaz plitalar ta'mirllash
              </h3>
            </div>
          </div>
        </div>
        <div className="service">
          <div className="service-img">
            <img src={serviceimg3} alt="service img" />
            <div className="service-info">
              <div className="service-icon">
                <img src={service3} alt="service logo" />
              </div>
              <h3 className="service-title">
              Gaz plita yangilash
              </h3>
            </div>
          </div>
        </div>
      </div>
      <ContactBtn text={"Bog'lanish"} number={'+998 90 601 04 01 '}/>
      </div>
    </section>
  )
}

export default Services