import React from "react";
import "./Sidebar.css";

import { GiHamburgerMenu } from "react-icons/gi";
import Thumbnal from "./Sidesvg/thumbnail.svg";
import Chat from "./Sidesvg/chat.svg";
import Email from "./Sidesvg/Email.svg";
import Dashboard from "./Sidesvg/Dash.svg";
import Contact from "./Sidesvg/contact.svg";
import Calendar from "./Sidesvg/Calendar.svg";
import Courses from "./Sidesvg/courses.svg";
import Shop from "./Sidesvg/Shop.svg";
import Invoice from "./Sidesvg/invoice.svg";
import Setting from "./Sidesvg/setting.svg";
import Increase from "./Sidesvg/Increase.svg";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import dots from "./Sidesvg/dots.svg";
import rightarrow from './Sidesvg/rightarrow.svg';
const Sidebar = () => {
  return (
    <div>
      <div className="dash_wrapper_00">
        <div className="side_bar_wrapper_00">
          <div className="side_bar_wrapper_inside">
            weframetech
            <GiHamburgerMenu style={{ cursor: "pointer", color: "#7879F1" }} />
          </div>
          <div className="side_bar_wrapper_menu">
            <span>MAIN MENU</span>
            <section>
              <span>
                {" "}
                <img src={Dashboard} />
                Dashboard
              </span>
              <span id="email_section">
                <img src={Email} />
                Email
                <section>
                  <div id="email_circle">14</div>
                  <IoIosArrowDown style={{ color: "Iris/80" }} />
                </section>
              </span>
              <span style={{ color: "#7879F1" }}>
                <img src={Chat} />
                Chat
              </span>
              <span style={{ color: "#6418C3" }}>
                <img src={Thumbnal} />
                Kanban
                <div id="kanban_style">
                  <IoIosArrowForward />
                </div>
              </span>
              <span style={{ color: "#7879F1" }}>
                <img src={Contact} />
                Contact
                <div id="contact-style">New</div>
              </span>
              <span style={{ color: "#7879F1" }}>
                <img src={Calendar} />
                Calendar
              </span>
              <span style={{ color: "#7879F1" }}>
                <img src={Courses} />
                Courses
                <div id="kanban_style">
                  <IoIosArrowForward />
                </div>
              </span>
              <span style={{ color: "#7879F1" }}>
                <img src={Shop} />
                Shop
              </span>
              <span style={{ color: "#7879F1" }}>
                <img src={Invoice} />
                Invoices
                <div id="kanban_style">
                  <IoIosArrowForward />
                </div>
              </span>
              <span style={{ color: "#7879F1" }}>
                <img src={Setting} />
                Setting
              </span>
            </section>
            <div className="side_bar_wrapper_menu_image_below">
              <img src={dots} />
              <h1>Increase your work with kanban</h1>
              <span>
                <img src={rightarrow}/>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
