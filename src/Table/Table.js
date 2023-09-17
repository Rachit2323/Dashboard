import React from "react";
import "./Table.css";
import TableIcons from "./btnAdd.svg";
import arrowrow from "./rowarrow.svg";


const Card = ({ title, color, text, type }) => {
  return (
    <div>
      {type !== "0" && (
        <div
          className="card_wrapper_outer"
          style={{
            transform: title === "BUGS FIXING" ? "rotate(13deg)" : "none",
          }}
        >
          <div className="card_wrapper_upper">
            <span>
              <section style={{ background: `${color}` }}></section>
              <h1 style={{ color: `${color}` }}>{title}</h1>
            </span>
            <img src={arrowrow} style={{ cursor: "pointer" }} />
          </div>
          <span>{text}</span>
          <div
            className="progress_bar_medium_card"
            style={{
              background: `linear-gradient(to right,var(--Color1, ${color}) 25%,var(--Color2, #1e1c3a) 75%)`,
            }}
          ></div>
          <div className="outer_main_wrapper_down_cards_table_outer">
            <section className="outer_main_wrapper_down_cards_table">
              <div id="card_shown" style={{ position: "absolute" }}>
                {" "}
              </div>
              <div id="card_shown" style={{ position: "absolute", left: "8%" }}>
                {" "}
              </div>
              <div
                id="card_shown"
                style={{ position: "absolute", left: "16%" }}
              >
                {" "}
              </div>
              <div
                id="card_shown"
                style={{ position: "absolute", left: "24%" }}
              >
                {" "}
              </div>
            </section>
            <span>Due in 4 days</span>
          </div>
        </div>
      )}
      {type === "0" && <div>
         <div className="revise_card">
          <section>
             <span>Move card here</span>
          </section>

         </div>
        </div>}
    </div>
  );
};

const Table = () => {
  return (
    <div className="table_outer">
      <Alltable title="To-Do List (24)" />
      <Alltable title="In Progress (2)" />
      <Alltable title="Done (3)" />
      <Alltable title="Revised (0)" />
    </div>
  );
};

const Alltable = ({ title }) => {
  return (
    <div>
      <div className="table_outer_wrapper">
        <div className="table_heading_wrapper">
          <span>{title}</span>

          <img src={TableIcons} style={{ cursor: "pointer" }} />
        </div>
        <div className="card_all_detail_section">
          {title !== "Revised (0)" && (
            <>
              <Card
                title={
                  title === "To-Do List (24)"
                    ? "Important"
                    : title === "In Progress (2)"
                    ? "Important"
                    : title === "Done (3)"
                    ? "Video"
                    : "Default Title"
                }
                color={
                  title === "To-Do List (24)"
                    ? "#FFAB2D"
                    : title === "In Progress (2)"
                    ? "#5ECFFF"
                    : title === "Done (3)"
                    ? "#FF4A55"
                    : "Default Title"
                }
                text="Create sign up sheet for holiday student/parent conferences."
              />

              <Card
                title={
                  title === "To-Do List (24)"
                    ? "Instructor Meeting"
                    : title === "In Progress (2)"
                    ? "BUGS FIXING"
                    : title === "Done (3)"
                    ? "Database"
                    : "Default Title"
                }
                color={
                  title === "To-Do List (24)"
                    ? "#E328AF"
                    : title === "In Progress (2)"
                    ? "#FF4A55"
                    : title === "Done (3)"
                    ? "#38E25D"
                    : "Default Title"
                }
                text="Plan holiday demonstration program. Create outline"
              />

              <Card
                title={
                  title === "To-Do List (24)"
                    ? "Instructor MeetingS"
                    : title === "In Progress (2)"
                    ? "BUGS FIXINGS"
                    : title === "Done (3)"
                    ? "Database"
                    : "Default Title"
                }
                color={
                  title === "To-Do List (24)"
                    ? "#E328AF"
                    : title === "In Progress (2)"
                    ? "#FF4A55"
                    : title === "Done (3)"
                    ? "#38E25D"
                    : "Default Title"
                }
                text="Plan holiday demonstration program. Create outline"
              />
            </>
          )}

          {title === "Revised (0)" && <Card type="0" />}
        </div>
      </div>
    </div>
  );
};

export default Table;
