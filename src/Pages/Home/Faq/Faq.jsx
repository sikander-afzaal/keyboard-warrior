import React, { useState } from "react";
import "./Faq.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusSquare,
  faMinusSquare,
} from "@fortawesome/free-regular-svg-icons";
function Faq() {
  const [open, setOpen] = useState([false, false, false, false]);
  const clickHandler = (e) => {
    const num = e.target.dataset.num;
    setOpen((prev) => {
      let arr = [...prev];
      let newArr = arr.map((elem, index) => {
        if (index == num) {
          return !elem;
        } else {
          return elem;
        }
      });
      return newArr;
    });
    console.log(open);
  };
  return (
    <div id="faq" className="faq">
      <h1 className="faq-h1">FAQ</h1>
      <div className="faq-div">
        <div className="faq-q-div">
          <div
            data-num={0}
            onClick={clickHandler}
            className={`faq-btn ${open[0] ? "border-radius" : ""}`}
          >
            <p className={`${open[0] ? "active-btn" : ""}`}>
              WHAT IS KEYBOARD WARRIORS?
            </p>
            {open[0] ? (
              <FontAwesomeIcon
                className={`${open[0] ? "active-btn" : ""}`}
                icon={faMinusSquare}
              />
            ) : (
              <FontAwesomeIcon icon={faPlusSquare} />
            )}
          </div>
          <div className={`faq-answer ${open[0] ? "active" : ""}`}>
            <p className={`answer ${open[0] ? "active-answer" : ""}`}>
            KEYBOARD WARRIORS IS A NFT COLLECTION ON THE CARDANO BLOCKCHAIN THAT IS NOW MINTING!
            EACH WARRIOR IS RANDOMLY GENERATED FROM 100'S OF DIFFERENT TRAITS INSPIRED BY FANTASY
            RPG VIDEO GAMES AND INTERNET COMMENT CULTURE. AMONG THE COLLECTION ARE 24 HIGHLY DETAILED ULTRA RARES,
            EACH WITH DISTINCT PERSONALITY, VOICE, AND TITLE. 

            </p>
            <br />
            <p className={`answer ${open[0] ? "active-answer" : ""}`}>
            THE FIRST PHASE WILL BE 500 NFT'S, WITH THE COMMUNITY VOTING ON HOW THE ADDITIONAL NFT'S WILL BE RELEASED
            AND WHAT THE TOTAL MINT COUNT WILL BE.
            </p>
          </div>
        </div>
        <div className="faq-q-div">
          <div
            data-num={1}
            onClick={clickHandler}
            className={`faq-btn ${open[1] ? "border-radius" : ""}`}
          >
            <p className={`${open[1] ? "active-btn" : ""}`}>
              WHAT IS THE MINT COST AND HOW DO I MINT?
            </p>
            {open[1] ? (
              <FontAwesomeIcon
                className={`${open[1] ? "active-btn" : ""}`}
                icon={faMinusSquare}
              />
            ) : (
              <FontAwesomeIcon icon={faPlusSquare} />
            )}
          </div>
          <div className={`faq-answer ${open[1] ? "active" : ""}`}>
            <p className={`answer ${open[1] ? "active-answer" : ""}`}>
              EACH KEYBOARD WARRIOR WILL COST 50 ADA. YOU MUST USE A CARDANO
              SHELLEY-ERA WALLET SUCH AS YOROI, NAMI, OR ADALITE.
            </p>
          </div>
        </div>
        <div className="faq-q-div">
          <div
            data-num={2}
            onClick={clickHandler}
            className={`faq-btn ${open[2] ? "border-radius" : ""}`}
          >
            <p className={`${open[2] ? "active-btn" : ""}`}>
              WHAT ARE FACTIONS?
            </p>
            {open[2] ? (
              <FontAwesomeIcon
                className={`${open[2] ? "active-btn" : ""}`}
                icon={faMinusSquare}
              />
            ) : (
              <FontAwesomeIcon icon={faPlusSquare} />
            )}
          </div>
          <div className={`faq-answer ${open[2] ? "active" : ""}`}>
            <p className={`answer ${open[2] ? "active-answer" : ""}`}>
              YOU HAVE A CHOICE TO ALIGN YOURSELF WITH ONE OF TWO FACTIONS,
              ELYSIUM OR INFERNO. BY JOINING ELYSIUM YOU ALIGN YOURSELF WITH
              KINDNESS, AND DO GOODERY! YOU WOULD RATHER DEFUSE A FIGHT WITH
              LOGIC AND REASON THAN RESORT TO AGGRESSION. ELYSIUM PROVIDES LIGHT
              SIDE SPELL CARDS AND TITLES. WARRIORS WHO PREFER TO TAUNT AND TALK
              TRASH WILL BE ABLE TO JOIN INFERNO, PROVIDING YOU DARK SIDE SPELL
              CARDS AND TITLES.
            </p>
            <br />
            <p className={`answer ${open[2] ? "active-answer" : ""}`}>
              SPELL CARDS WILL BE ANNOUNCED EARLY 2022.
            </p>
          </div>
        </div>
        <div className="faq-q-div">
          <div
            data-num={3}
            onClick={clickHandler}
            className={`faq-btn ${open[3] ? "border-radius" : ""}`}
          >
            <p className={`${open[3] ? "active-btn" : ""}`}>
              WHY SHOULD I MINT A KEYBOARD WARRIOR?
            </p>
            {open[3] ? (
              <FontAwesomeIcon
                className={`${open[3] ? "active-btn" : ""}`}
                icon={faMinusSquare}
              />
            ) : (
              <FontAwesomeIcon icon={faPlusSquare} />
            )}
          </div>
          <div className={`faq-answer ${open[3] ? "active" : ""}`}>
            <p className={`answer ${open[3] ? "active-answer" : ""}`}>
              FIRST AND FOREMOST WE HOPE THAT OUR HOLDERS ENJOY OUR ART STYLE
              AND HUMOR. WE ARE AIMING TO DO SOMETHING DIFFERENT AND OUR
              CREATIVE DIRECTION IS SOMETHING WE TAKE GREAT PRIDE IN.
            </p>
            <br />
            <p className={`answer ${open[3] ? "active-answer" : ""}`}>
              ADDITIONALLY WE AIM TO CREATE A ROBUST MARKETPLACE OF AVATARS,
              SPELL CARDS, TITLES, AND MYSTERY AIRDROPS WHERE EVERYONE CAN FEEL
              LIKE THEY ARE A PART OF THE JOURNEY. WE WILL BE REWARDING OUR
              HOLDERS OVER THE COURSE OF THE YEAR AND HELPING YOU CREATE YOUR
              ULTIMATE KEYBOARD WARRIOR.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
