import React from "react";
import "./Main.css";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import vertical from "./Icons/vertical.svg";
import chat from "./Icons/chat.svg";
import friend from "./Icons/friend.svg";
import Table from "../Table/Table.js";

const Main = () => {
  return (
    <div>
      <div className="outer_main_wrapper_00">
        <div className="outer_main_wrapper_01">
          <div className="outer_main_wrapper_upper">
            <section>
              <FaArrowAltCircleLeft
                style={{ fontSize: "30px", color: "#A5A5A5" ,cursor:'pointer'}}
              />

              <span>School November Tasks</span>
            </section>
            <div className="outer_main_wrapper_upper_right">
              <section>
                <span>Centered Martial Arts</span>
                <span
                  style={{
                    color: "#A5A5A5",
                    fontFamily: "Open Sans",
                    fontSize: "14px",
                  }}
                >
                  Sunnyvale, Ca
                </span>
              </section>
              <img src={vertical} style={{cursor:'pointer'}} />
            </div>
          </div>
          <div className="outer_main_wrapper_down">
            <section className="outer_main_wrapper_down_cards">
              <div id="card_shwon" style={{ position: "absolute" }}>
                {" "}
              </div>
              <div
                id="card_shwon"
                style={{ position: "absolute", left: "50%" }}
              >
                {" "}
              </div>
              <div
                id="card_shwon"
                style={{ position: "absolute", left: "100%" }}
              >
                {" "}
              </div>
              <div
                id="card_shwon"
                style={{ position: "absolute", left: "150%" }}
              >
                {" "}
              </div>
              <div id="card_shwon" style={{ background: "#E328AF" }}>
                9+
              </div>
            </section>
            <section className="card_section_down" style={{ marginLeft: "5%" }}>
              <img src={friend} />
              Invite People
            </section>
            <section
              className="card_section_down"
              style={{
                background: "#15132B",
                width: "8%",
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.04)",
                border: "1px solid var(--iris-80, #7879F1)",
              }}
            >
              Private
            </section>
            <section
              className="card_section_down"
              style={{
                width: "6%",
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.04)",
                border: "1px solid var(--iris-80, #7879F1)",
              }}
            >
              Edit
            </section>
            <section className="card_section_down">
              <img src={chat} />
              45 Comments
            </section>
            <span>Total Progress 60%</span>
            <div className="progress_bar_medium"></div>
          </div>
        </div>
      </div>
      <Table/>
    </div>
  );
};

export default Main;
