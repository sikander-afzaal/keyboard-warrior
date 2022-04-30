import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Layout/Header/Header.jsx";
import Home from "./Pages/Home/Home.jsx";
import Sale from "./Pages/Sale/Sale.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
    AOS.refreshHard();
    AOS.refresh();

  }, []);
  console.warn = () => { }
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="main-cont">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/sale-page" element={<Sale />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
