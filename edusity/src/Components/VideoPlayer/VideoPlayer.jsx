import React, { useRef } from "react";
import "./VideoPlayer.css";
// import video from "../../assest/college-video.mp4"; haven't video

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };

  return (
    <div
      className={`video-player hide ${playState ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video src={""} muted autoPlay controls></video>
    </div>
  );
};

export default VideoPlayer;
