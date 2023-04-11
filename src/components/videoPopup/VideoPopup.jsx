import React from "react";
import ReactPlayer from "react-player/youtube";
import "./style.css";
const VideoPopup = ({ show, videoId,setShow }) => {
  // console.log("--------------", videoId)
  const hidePopup = () => {
    setShow(false);
  };
  return (
    <div className={`video-popup ${show ? "visible" : ""}`} onClick={hidePopup}>
      <div className="opacity-layer">
        <div className="video-player">
          <span className="close-btn" onClick={hidePopup}>
            Close
          </span>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`}
            // url="https://www.youtube.com/watch?v=VLgVw2NEqCM&t=14255s"
            controls
            width="100%"
            height="100%"
            // playing={true}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPopup;
