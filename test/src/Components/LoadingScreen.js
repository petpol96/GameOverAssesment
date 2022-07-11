import React, { useEffect } from "react";
import loadingGif from "../assets/img/LOGO_MOVE.gif";

export default function LoadingScreen() {
  useEffect(()=>{
    setTimeout(()=>{

      window.location.replace('https://tampa.escapegameover.us/');

    },3000)
  })
  return (
    <div className="LoadingScreen_container">
      <div className="LoadingScreen_gif_holder">
        <img src={loadingGif} className="LoadingScreen_gif" />
      </div>
    </div>
  );
}
