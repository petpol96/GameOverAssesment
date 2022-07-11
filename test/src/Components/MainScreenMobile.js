import Logo from "../assets/img/logo.png";
import React from 'react'
import TampaImgMobile from "../assets/img/home_page/US_mobile.png";

export default function MainScreenMobile(props) {
    const width=props.width
    const height=props.height
    const background_map_ratioX = 0.873;
  return (
    <div
          style={{
            width: width,
            height: height,
            display: "grid",
            gridTemplateRows: `80px ${height - 80}px`,
          }}
        >
          <div className="Header_mobile">
            <img className="Logo" src={Logo} />
          </div>
          <div className="Mainscreen_mapholder"
          >
            <div
              style={{
                backgroundImage: `url(${TampaImgMobile})`,
                width: `${width * background_map_ratioX}px`,
                height: "100%",
                maxHeight: `${height - 80}px`,
                backgroundSize: `${(height - 80)* 0.42}px ${height - 80}px`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <span
                style={{
                  width: `${width * background_map_ratioX}px`,
                }}
                className="MainScreen_map_boldText_mobile"
              >
                Choose location
              </span>
              <span
                style={{
                  width: `${width * background_map_ratioX}px`,
                }}
                className="MainScreen_map_smallText_mobile"
              >
                book now.get locked.escape.repeat.
              </span>
              <div
                style={{
                  width: `${width * background_map_ratioX}px`,
                 
                }}
                className="MainScreen_map_btnHolder_mobile"
              >
                <button
                  style={{
                    width: `${width * 0.23}px`,
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
  )
}

