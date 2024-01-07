import React from "react";
import "./index.scss";

// Components
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Comment from "./Components/Comment";
import Aksiya from "./Components/Aksiya";
import Services from "./Components/Services";
import AdsBanner from "./Components/AdsBanner";
import Partners from "./Components/Partners";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="app container">
      <Header />
      <Home />
      <About />
      <Comment />
      <Aksiya />
      <Services />
      <AdsBanner />
      <Partners />
      {/*
      <Footer /> */}
    </div>
  );
}

export default App;
