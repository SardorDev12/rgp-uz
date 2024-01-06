import React from "react";
import "./index.scss";

// Components
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Comment from "./Components/Comment";

function App() {
  return (
    <div className="app container">
      <Header />
      <Home />
      <About />
      <Comment />
    </div>
  );
}

export default App;
