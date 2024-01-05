import React from "react";
import "./index.scss";

// Components
import Header from "./Components/Header";
import Home from "./Components/Home";

function App() {
  return (
    <div className="app container">
      <Header />
      <Home />
    </div>
  );
}

export default App;
