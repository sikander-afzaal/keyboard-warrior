import React, { useState } from "react";
import "./Header.css";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";
function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="header">
      <div className="head-cont">
        <Link className="logo-cont" to="/">
          <img src={logo} alt="" className="logo" />
        </Link>

        <div className={`right-header ${open ? "open-head" : ""}`}>
          <i
            onClick={() => {
              setOpen(false);
            }}
            className="fas fa-times mobile"
          ></i>
          <a
            onClick={() => {
              setOpen(false);
            }}
            href="/#roadmap"
            className="nav-links"
          >
            Roadmap
          </a>
          <a
            onClick={() => {
              setOpen(false);
            }}
            href="/#faq"
            className="nav-links"
          >
            FAQ
          </a>
          <Link
            onClick={() => {
              setOpen(false);
            }}
            to="/sale-page"
            className="nav-links"
          >
            Sale
          </Link>

          <div className="social-div">
            <a
              href="https://instagram.com/keyboardwarriorsnft"
              className="nav-links social"
              target={"blank"}
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://twitter.com/KeyWarriorsNFT"
              className="nav-links social"
              target={"blank"}
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://discord.gg/mZtVwqkBSx"
              target={"blank"}
              className="nav-links social"
            >
              <i className="fab fa-discord"></i>
            </a>
          </div>
        </div>
        <i
          onClick={() => {
            setTimeout(() => {
              setOpen(true);
            }, 200);
            document.querySelector(".right-header").style.display = "flex";
          }}
          className="fas fa-bars mobile"
        ></i>
      </div>
    </div>
  );
}

export default Header;
