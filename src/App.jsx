import React from "react";
import "./index.scss";

// Components
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";

function App() {
  return (
    <div className="app container">
      <Header />
      <Home />
      <About />
    </div>
  );
}

export default App;
