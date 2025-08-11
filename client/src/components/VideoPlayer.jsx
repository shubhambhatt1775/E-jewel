// VideoPlayer.jsx
import React from "react";


const VideoPlayer = ({ src, type = "video/mp4", autoPlay = true, loop = true, muted = true, width = "100%"  }) => {
  return (
    <div style={{ maxWidth: width, marginTop: "80px" }}>
      <video
        src={src}  // Use the passed src prop
        type={type}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        style={{ width: "100%", borderRadius: "8px", Height:"85%", display: "block" }}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};



export default VideoPlayer;
