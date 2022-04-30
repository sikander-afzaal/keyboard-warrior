import React from "react";
import "./Slider.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import art1 from "../../../Assets/slider/art (1).png";
import art2 from "../../../Assets/slider/art (11).png";
import art3 from "../../../Assets/slider/art (12).png";
import art4 from "../../../Assets/slider/art (13).png";
import art5 from "../../../Assets/slider/art (14).png";
import art6 from "../../../Assets/slider/art (15).png";
import art7 from "../../../Assets/slider/art (16).png";
import art8 from "../../../Assets/slider/art (17).png";
import art9 from "../../../Assets/slider/art (18).png";
import art10 from "../../../Assets/slider/art (19).png";
import art11 from "../../../Assets/slider/art (20).png";
import art12 from "../../../Assets/slider/art (21).png";
import art13 from "../../../Assets/slider/art (22).png";
import art14 from "../../../Assets/slider/art (23).png";
import art15 from "../../../Assets/slider/art (24).png";
import art16 from "../../../Assets/slider/art (25).png";
import art17 from "../../../Assets/slider/art (26).png";
import art18 from "../../../Assets/slider/art (27).png";
import art19 from "../../../Assets/slider/art (28).png";
import art20 from "../../../Assets/slider/art (29).png";
import art21 from "../../../Assets/slider/art (30).png";
import art22 from "../../../Assets/slider/art (31).png";
import art23 from "../../../Assets/slider/art (32).png";
import art24 from "../../../Assets/slider/art (33).png";
function Slider() {
  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1000"
      className="slider"
    >
      <Splide
        options={{
          type: "loop",
          autoplay: true,
          perPage: 6,
          pauseOnHover: false,
          resetProgress: false,
          height: "auto",
          loop: true,
          width: "100%",
          gap: "5rem",
          arrows: false,
          pagination: false,
          drag: false,
          interval: "0",
          speed: "3000",
          perMove: 1,
          breakpoints: {
            2560: {
              perPage: 4,
            },
            1500: {
              width: "90%",
            },
            1462: {
              perPage: 5,
              width: "90%",
            },
            1162: {
              perPage: 3,
              width: "90%",
            },
            650: {
              perPage: 2,
              width: "90%",
            },
            430: {
              perPage: 2,
              width: "90%",
            },
          },
        }}
      >
        <SplideSlide>
          <img className="slider-img" src={art1} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img className="slider-img" src={art2} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img className="slider-img" src={art3} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img className="slider-img" src={art4} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img className="slider-img" src={art5} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img className="slider-img" src={art6} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img className="slider-img" src={art7} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img className="slider-img" src={art8} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img className="slider-img" src={art9} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img className="slider-img" src={art10} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img className="slider-img" src={art11} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img className="slider-img" src={art12} alt="" />
        </SplideSlide>
      </Splide>
      <Splide
        options={{
          type: "loop",
          autoplay: true,
          perPage: 6,
          pauseOnHover: false,
          resetProgress: false,
          direction: "rtl",
          height: "auto",
          loop: true,
          width: "100%",
          gap: "5rem",
          arrows: false,
          pagination: false,
          drag: false,
          interval: "0",
          speed: "3000",
          perMove: 1,
          breakpoints: {
            2560: {
              perPage: 4,
            },
            1500: {
              width: "90%",
            },
            1462: {
              perPage: 5,
              width: "90%",
            },
            1162: {
              perPage: 3,
              width: "90%",
            },
            650: {
              perPage: 2,
              width: "90%",
            },
            430: {
              perPage: 2,
              width: "90%",
            },
          },
        }}
      >
        <SplideSlide>
          <img className="slider-img" src={art13} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img className="slider-img" src={art14} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img className="slider-img" src={art15} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img className="slider-img" src={art16} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img className="slider-img" src={art17} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img className="slider-img" src={art18} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img className="slider-img" src={art19} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img className="slider-img" src={art20} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img className="slider-img" src={art21} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img className="slider-img" src={art22} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img className="slider-img" src={art23} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img className="slider-img" src={art24} alt="" />
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Slider;
