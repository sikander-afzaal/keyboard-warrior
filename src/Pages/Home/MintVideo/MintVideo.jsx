import React from "react";
import "./MintVideo.css";
import mintVideo from "../../../Assets/MintingAnimation.mp4";
const MintVideo = () => {
  return (
    <div className="mint_video">
      <video controls={true} autoPlay={true} loop playsInline>
        <source src={mintVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default MintVideo;
