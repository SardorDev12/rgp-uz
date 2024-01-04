import React from 'react'
import '../Styles/header.scss'
import logo from '../Images/logo.png'
import ContactBtn from './/ContactBtn'

function Header() {
  return (
    <header>
      <div className="container">
      <div className="logo">
        <img src={logo} alt="" className="logo-img" />
      </div>
      <nav>
        <ul className="nav-links">
          <li className="nav-link">
            <a href="">Bosh sahifa</a>
          </li>
          <li className="nav-link">
            <a href="">Haqimizda</a>
          </li>
          <li className="nav-link">
            <a href="">Xizmatlar</a>
          </li>
          <li className="nav-link">
            <a href="">Aloqa</a>
          </li>
        </ul>
        <ContactBtn text={'+998 90 601 04 01'} number={'+998 90 601 04 01'}/>
      </nav>
      </div>
    </header>
  )
}

export default Header