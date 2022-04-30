import React from "react";
import "./Roadmap.css";
function Roadmap() {
  return (
    <div id="roadmap" className="roadmap">
      <h1 className="title">Roadmap</h1>
      <div className="roadmap-grid">
        <div></div>
        <div className="vertical-line"></div>
        <div></div>
        <div data-aos="fade-right" className="grid-box grid1">
          <h1>PHASE I - Launch</h1>
          <p>First 500 Mints</p>
          <p>Discord RPG Beta Test</p>
        </div>
        <div className="wrapper">
          <div className="circle-grid"></div>
          <div className="vertical-line"></div>
        </div>
        <div></div>

        <div></div>
        <div className="wrapper">
          <div className="circle-grid"></div>
          <div className="vertical-line"></div>
        </div>
        <div data-aos="fade-left" className="grid-box grid2">
          <h1>PHASE II - First 500 Minted</h1>

          <p>Community Vote on Final Collection Size</p>
          <p>Rarity Tool Registration</p>
          <p>Whitepaper Release</p>
          <p>Spell Card Expansion</p>
        </div>
        <div data-aos="fade-right" className="grid-box grid1">
          <h1>PHASE III - 75% Minted</h1>
          <p>Mystery Airdrop for First 500</p>
          <p>Discord RPG Expansion</p>
          <p>V/O & Dialogue Recordings for Ultra Rares & Titles</p>
          <p>Passive Upgrade Airdrops for Ultra Rares & Rare Items</p>
        </div>
        <div className="wrapper">
          <div className="circle-grid"></div>
          <div className="vertical-line"></div>
        </div>
        <div></div>

        <div></div>
        <div className="wrapper">
          <div className="circle-grid"></div>
          <div className="vertical-line"></div>
        </div>
        <div data-aos="fade-left" className="grid-box grid2">
          <h1>PHASE IV - 100% Minted</h1>
          <p>Physical Card Release</p>
          <p>Spell Card Expansion II</p>
          <p>Keyboard Warriors H2H Card Game</p>
        </div>
      </div>
      <h5 className="title">

        
      </h5>
    </div>
  );
}

export default Roadmap;
