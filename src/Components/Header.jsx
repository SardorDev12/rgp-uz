// Icons
import { MdCall } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { FaClock } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header" id="header">
      <div className="header-top">
        <ul className="contact-info">
          <li>
            <a href="tel:+998 90 601 04 01" target="_blank">
              <MdCall />
              +998 90 601 04 01
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
              Dushanba-Shanba, 9:00-18:00
            </a>
          </li>
        </ul>
        <div className="lang-links">
          <div className="lang">
            <div className="lang-uz">
              <img src={uzFlag} alt="uz flag" />
            </div>
            <div className="lang-ru">
              <img src={ruFlag} alt="uz flag" />
            </div>
          </div>
          <div className="line"></div>
          <ul className="social-links">
            <li>
              <a href="">
                <FaTelegram />
              </a>
            </li>
            <li>
              <a href="">
                <RiInstagramFill />
              </a>
            </li>
            <li>
              <a href="">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="">
                <IoLogoYoutube />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="header-bottom">
        <div className="logo">
          <div className="logo-img">
            <img src={logo} alt="logo" />
          </div>
          <div className="line"></div>
          <div className="logo-title">
            <p>
              REMONT GAZOVIX <br /> PLIT
            </p>
          </div>
        </div>
        <CiMenuBurger onClick={toggleMenu} className="toggle" />
        <nav className={`navbar ${isMenuOpen ? "show" : ""}`}>
          <ul className="nav-items">
            <li className="nav-item">
              <a href="#home">Bosh sahifa</a>
            </li>
            <li className="nav-item">
              <a href="#about">Haqimizda</a>
            </li>
            <li className="nav-item">
              <a href="#services">Xizmatlar</a>
            </li>
            <li className="nav-item">
              <a href="#footer">Aloqa</a>
            </li>
          </ul>
          <Cta txt={"+998 90 601 04 01 "} />
        </nav>
      </div>
    </div>
  );
}

export default Header;
