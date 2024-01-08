// Images
import footerLogo from "../Images/Icons/footer logo.svg";
import { FaTelegram } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import Form from "./Form";
import "../Styles/footer.scss";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  const formProps = {
    api: "https://sardorfarhodogli.pythonanywhere.com/applications/",
    plc1: t("form.name"),
    plc2: t("form.num"),
    plc3: t("form.message"),
    name1: "full_name",
    name2: "phone_number",
    name3: "message",
  };
  return (
    <div className="footer" id="footer">
      <div className="footer-info">
        <div className="footer-logo">
          <img src={footerLogo} alt="footer logo" />
        </div>
        <div className="manzil">
          <h3 className="manzil-title">{t("footer.footerTitle")}</h3>
          {/* <h4>{t("footer.footerManzil.manzilTitle")}</h4>
          <p>{t("footer.footerManzil.manzil")}</p> */}
        </div>

        <div className="contact-links">
          <div className="numbers">
            <h5>{t("footer.contacts.phoneNums")}</h5>
            <ul>
              <li>
                <a href="tel:+998 90 601 04 01" target="_blank">
                  <MdCall />
                  +998 90 601 04 01
                </a>
              </li>
              <li>
                <a href="tel:+998 97 910 04 01" target="_blank">
                  <MdCall />
                  +998 97 910 04 01
                </a>
              </li>
            </ul>
          </div>

          <div className="tarmoqlar">
            <div className="social-links">
              <h5>{t("footer.contacts.social")}</h5>
              <ul>
                <li>
                  <a href="https://t.me/rgp_samarkand" target="_blank">
                    <FaTelegram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/rgp_samarkand?igsh=cDlqb2dnNTdpbXBu&utm_source=qr"
                    target="_blank"
                  >
                    <RiInstagramFill />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/jamshed.boltaev.5?mibextid=LQQJ4d"
                    target="_blank"
                  >
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com/@rgp?si=hDaHe-RipgJXt_Nm"
                    target="_blank"
                  >
                    <IoLogoYoutube />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-form">
        <Form {...formProps} />

        <div className="location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6147.429835200025!2d67.005671!3d39.611104!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDM2JzQwLjAiTiA2N8KwMDAnMjAuNCJF!5e0!3m2!1sen!2s!4v1704561150881!5m2!1sen!2s"
            loading="lazy"
          ></iframe>
        </div>
        <a target="_blank" href="https://supersite.uz/" className="developer">
          {t("footer.developer")}
        </a>
      </div>
    </div>
  );
}

export default Footer;
