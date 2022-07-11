import React, { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";
import MainScreenDesktop from "./MainScreenDesktop";
import MainScreenMobile from "./MainScreenMobile";

function useWindowSize() {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return size;
}


export default function MainScreen() {
  const [height, width] = useWindowSize();
  const [screen,setScreen]=useState(1);
 

  const displayMainScreenHandler = () => {
    if (width <= 768) {
      return (
        <MainScreenMobile width={width} height={height} click={(index)=>{setScreen(index)}}/>
      );
    } else {
      return (
       <MainScreenDesktop width={width} height={height} click={(index)=>{setScreen(index)}}/>
      );
    }
  };
  const screenHandler=()=>{
    switch(screen){
      case 1:
        return displayMainScreenHandler();
      case 2:
        return <LoadingScreen/>
    }
  }
  return screenHandler();
}
