import React, { useState, useEffect } from "react";
import "./App.css";
import VideoCard from "./VideoCard";
import db from "./firebase";

function App() {
  const [reelsvideos, setreelsvideos] = useState([]);
  useEffect(() => {
    //app component will run once when it loads and never again
    db.collection("reelsvideos").onSnapshot((snapshot) =>
      setreelsvideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    //BEM (Block, Element, Modifire) naming convention
    <div className="app">

      <div className="app__top">
        {/* Image at the top */}
        <img
          className="app__logo"
          src="https://www.clipartmax.com/png/full/64-648859_pixel-video-camera-flat-icon.png"
          alt=""
        />
        {/* Reels text */}
        <h3>Insta-Reels</h3>
      </div>

      <div className="app__videos">
        {/* Container of app videos (scrollable container) */}

        {reelsvideos.map(({ channel, avatarSrc, song, url, likes, shares }) => (
          <VideoCard
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            url={url}
            likes={likes}
            shares={shares}
          />
        ))}

        {/* <VideoCard />
        <VideoCard /> */}
        {/* <Video/> */}
        {/* <Video/> */}
        {/* <Video/> */}
        {/* <Video/> */}
        {/* <Video/> */}
        {/* <Video/> */}
      </div>
    </div>
  );
}

export default App;
