import React from "react";
import "./Home.css";
import Slider from "./Slider/Slider.jsx";
import Roadmap from "./Roadmap/Roadmap.jsx";
import Faq from "./Faq/Faq.jsx";
import Timer from "./Timer/Timer.jsx";
// import MintVideo from "./MintVideo/MintVideo.jsx";
function Home({ changeQr }) {
  return (
    <div className="home">
      <Timer changeQr={changeQr} />
      <Slider />
      <Roadmap />
      <Faq />
      {/* Mint Animation Video */}
      {/* <MintVideo /> */}
    </div>
  );
}

export default Home;
