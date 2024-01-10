// Icons
import { MdCall } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { FaClock } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";

import { useTranslation } from "react-i18next";

// Images
import uzFlag from "../Images/Lang/uz.svg";
import ruFlag from "../Images/Lang/ru.svg";

// Logos
import logo from "../Images/Icons/logo.svg";

// Styles
import "../Styles/header.scss";

// Components
import Cta from "./Cta";
import { useState } from "react";

function Header() {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();

  const changeLang = (lang) => {
    changeLanguage(lang);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="header" id="header">
      <div className="header-top">
        <ul className="contact-info">
          <li>
            <a href="tel:+998 90 601 04 01" target="_blank">
              <MdCall />
              +998 90 601 04 01{" "}
            </a>
          </li>
          <div className="line"></div>
          <li>
            <a href="mailto:jamshed0401@gmail.com" target="_blank">
              <IoMail />
              jamshed0401@gmail.com
            </a>
          </li>
          <div className="line"></div>
          <li>
            <a>
              <FaClock />
              {t("header.contactInfo.workingHours")}
            </a>
          </li>
        </ul>
        <div className="lang-links">
          <div className="lang">
            <div className="lang-uz">
              <img
                onClick={() => changeLang("uz")}
                src={uzFlag}
                alt="uz flag"
                loading="lazy"
              />
            </div>
            <div className="lang-ru">
              <img
                onClick={() => changeLang("ru")}
                src={ruFlag}
                alt="uz flag"
                loading="lazy"
              />
            </div>
          </div>
          <div className="line"></div>
          <ul className="social-links">
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
      <div className="header-bottom">
        <div className="logo">
          <div className="logo-img">
            <img src={logo} alt="logo" loading="lazy" />
          </div>
          <div className="line"></div>
          <div className="logo-title">
            <p>
              {t("header.logoTitle1")} <br />
              {t("header.logoTitle2")}
            </p>
          </div>
        </div>
        <div className="mobile-header">
          <CiMenuBurger onClick={toggleMenu} className="toggle" />
          <Cta txt={"+998 90 601 04 01 "} />
        </div>

        <nav className={`navbar ${isMenuOpen ? "show" : ""}`}>
          <ul className="nav-items">
            <li onClick={closeMenu} className="nav-item">
              <a href="#home"> {t("navItems.home")}</a>
            </li>
            <li onClick={closeMenu} className="nav-item">
              <a href="#about">{t("navItems.about")}</a>
            </li>
            <li onClick={closeMenu} className="nav-item">
              <a href="#services">{t("navItems.services")}</a>
            </li>
            <li onClick={closeMenu} className="nav-item">
              <a href="#footer">{t("navItems.contact")}</a>
            </li>
          </ul>
          <Cta txt={"+998 90 601 04 01 "} />
        </nav>
      </div>
    </div>
  );
}

export default Header;
