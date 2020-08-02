import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../src/img/logo.png";
import MainCard from "./MainCard";

function App() {
  return (
    <div className="App">
      <div className="logo  ">
        <img src={logo} alt="logo" className="logo_img" />
        <span className="logo_text">WHATSAPP WEB</span>
      </div>
      <div className="main-card">
        <MainCard />
      </div>
    </div>
  );
}

export default App;
