import React from 'react'
import banner from '../Images/banner.png'
import '../Styles/home.scss'
import ContactBtn from '../Components/ContactBtn'

function Home() {
  return (
    <div className='home'>
      <div className="banner">
        <img src={banner} alt="banner" />
        <div className="home-text">
        <h1 className="home-title">O'ZBEKISTONDAGI ENG ZO'R GAZ PLITA TA'MIRLASH MARKAZI</h1>
        <p>Har qandayu gaz plitangizni ta'mirlaymiz</p>
        <ContactBtn text={"BOG'LANISH"} number={'+998 90 601 04 01'}/>

       </div>
      </div>
      
    </div>
  )
}

export default Home