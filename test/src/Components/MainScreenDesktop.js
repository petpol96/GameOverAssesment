import Logo from "../assets/img/logo.png";
import React from "react";
import TampaImg from "../assets/img/home_page/US.png";



export default function MainScreenDesktop(props) {
  const width = props.width;
  const height = props.height;
  const background_map_ratioX = 0.873;
  const background_map_ratioY = 0.56;
  
 

  return (
    <div
      style={{
        width: width,
        height:'100vh',
        display: "grid",
        gridTemplateRows: `80px ${height - 80}px`,
      }}
    >
      <div className="Header">
        <div className="Logo_container">
          <img className="Logo" src={Logo} />
        </div>
      </div>
      <div className="Mainscreen_mapholder">
        <div
          style={{
            backgroundImage: `url(${TampaImg})`,
            width: `${width * background_map_ratioX}px`,
            height: `${
              width * background_map_ratioX * background_map_ratioY
            }px`,
            maxHeight: `${
              width * background_map_ratioX * background_map_ratioY - 160
            }px`,
            backgroundSize: `${width * background_map_ratioX}px ${
              width * background_map_ratioX * background_map_ratioY
            }px`,
          }}
          className="Mainscreen_mapholder_background"
        >
          <span
            style={{
              width: `${width * background_map_ratioX}px`,
              top: `${
                width * background_map_ratioX * background_map_ratioY * 0.14 +
                80
              }px`,
            }}
            className="MainScreen_map_boldText"
          >
            Choose location
          </span>
          <span
            style={{
              width: `${width * background_map_ratioX}px`,
              top: `${
                width * background_map_ratioX * background_map_ratioY * 0.17 +
                130
              }px`,
            }}
            className="MainScreen_map_smallText"
          >
            book now.get locked.escape.repeat.
          </span>
          <div
            style={{
              width: `${width * background_map_ratioX}px`,
              top: `${
                width * background_map_ratioX * background_map_ratioY * 0.3 +
                151
              }px`,
            }}
            className="MainScreen_map_btnHolder"
          >
            <button
              style={{
                width: `${width * 0.1}px`,
              }}
              className="MainScreen_map_btn"
              onClick={()=>{props.click(2)}}
            >
              TAMPA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
