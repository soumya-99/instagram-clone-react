import React, { useState, useRef } from "react";
import "./VideoCard.css";
import VideoHeader from "./VideoHeader";
import VideoFooter from "./VideoFooter";

function VideoCard({ url, likes, shares, channel, avatarSrc, song }) {
  const [isVideoPlaying, setIsVideoplaying] = useState(false);
  const videoRef = useRef(null);
  //useRef

  const onVideoPress = () => {
    if (isVideoPlaying) {
      // stop
      videoRef.current.pause();
      setIsVideoplaying(false);
    } else {
      //play
      videoRef.current.play();
      setIsVideoplaying(true);
    }
  };
  return (
    <div className="videoCard">
      <VideoHeader />
      <video
        onClick={onVideoPress}
        ref={videoRef}
        className="video__player"
        src={url}
        alt="ig-video"
        loop
      />

      {/* <img className="videoCard__player" src={url} alt="content-video" /> */}

      <VideoFooter
        channel={channel}
        likes={likes}
        shares={shares}
        avatarSrc={avatarSrc}
        song={song}
      />
    </div>
  );
}

export default VideoCard;
