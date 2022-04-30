import React, { useRef, useState, useEffect } from "react";
import {Link} from "react-router-dom"
import "./Timer.css";
function CountDownTimer() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  const [showTimer, setTimer] = useState(true);
  let interval = useRef();
  const startTimer = () => {
    let a = new Date("11 feb 2022 13:00:00");
    let b = a.toLocaleString("en-US", {
      // hour: "numeric",
      hour12: true,
    });
    let sensibleFormat = new Date(b);
    let countdownDate = sensibleFormat.getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance <= 0) {
        // stop our timer
        setTimer(false);

        clearInterval(interval.current);
      } else {
        // update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();

    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1000"
      className="timer-div"
    >
      {/* <div className="timer-h1">TIMER</div> */}
      {!showTimer ? (
      <Link to="/sale-page"><button data-aos="fade-up" className="mint">
          MINT NOW
        </button></Link>
      ) : (
        <div className="timer">
          <div className="time-wrap">
            <div className="timer-number">{timerDays}</div>
            <span> DAYS</span>
          </div>
          <div className="timer-dot "></div>
          <div className="time-wrap">
            <div className="timer-number">{timerHours}</div>
            <span> HRS</span>
          </div>
          <div className="timer-dot "></div>
          <div className="time-wrap">
            <div className="timer-number">{timerMinutes}</div>
            <span>MIN</span>
          </div>
          <div className="timer-dot last-dot"></div>
          <div className="time-wrap">
            <div className="timer-number">{timerSeconds}</div>
            <span>SEC</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default CountDownTimer;
