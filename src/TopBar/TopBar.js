import React from "react";
import "./TopBar.css";
import Search from "./Icons/search.svg";
import Notify from "./Icons/notify.svg";
import video from "./Icons/video.svg";
import check from "./Icons/check.svg";
import office from "./Icons/office.svg";
import flag from "./Icons/flag.svg";
import miimage from "./Icons/mineee.jpg";
import { IoMdArrowDropdown } from "react-icons/io";
const TopBar = () => {
  return (
    <div>
      <div className="topbar_wrapper_00">
        <section style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              background: "transparent",
              width: "100%",
            }}
          >
            <img src={Search} alt="Search Icon" style={{ padding: "5px" }} />
            <input
              type="text"
              placeholder="Search here"
              style={{
                border: "none",
                outline: "none",
                background: "transparent",
                width: "100%",
                color: "white",
              }}
            />
          </span>
        </section>

        <span>OTHER MENUS</span>
        <div className="topbar_wrapper_01">
          <span>
            <img src={Notify} />
            <div className="circle_topbar">12</div>
          </span>
          <span>
            <img src={video} />
            <div className="circle_topbar" id="video_circle_topbar">
              5
            </div>
          </span>
          <span>
            <img src={check} />
            <div className="circle_topbar" id="check_circle_topbar">
              2
            </div>
          </span>

          <span>
            <img src={office} />
            <div
              className="circle_topbar"
              style={{ background: "#E328AF" }}
              id="office_circle_topbar"
            >
              !
            </div>
          </span>
        </div>

        <div className="topbar_wrapper_02">
          <img src={flag} alt="Flag" />
          <span className="language">ENGLISH</span>
          <IoMdArrowDropdown
            style={{ color: "#6418C3", fontSize: "20px", cursor: "pointer" }}
          />
        </div>

        <div className="seprator_wrapper"></div>
        <div className="topbar_wrapper_03">
          <img src={miimage} />
          <section>
            <span id="day_wrapper_03">Instructor Day</span>
            <span
              id="day_wrapper_03"
              style={{ fontSize: "14px", color: "#7879F1" }}
            >
              Super Admin
            </span>
          </section>
          <IoMdArrowDropdown
            style={{ color: "#6418C3", fontSize: "20px", cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
