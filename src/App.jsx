import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import Services from './Components/Services'
import About from './Components/About'
import AdvantagesPartners from './Components/AdvantagePartners'
import Footer from './Components/Footer'

// Styles
import './Styles/app.scss'

function App() {
  return (
    <div className='container'>
      <Header/>
      <Home/>
      <Services/>
      <About/>
      <AdvantagesPartners/>
      <Footer/>
    </div>
  )
}

export default App