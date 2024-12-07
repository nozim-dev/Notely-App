import React from "react";
import "./style.scss";

const Tab = () => {
  return (
    <div className="header_tab">
      <h1>Your notes</h1>
      <div className="header_tab_box">
        <div className="header_tab_box_item">
          <a href="">All</a>
          <a href="">Personal</a>
          <a href="">Home</a>
          <a href="">Business</a>
        </div>
        <div className="header_tab_box_actionBtn">
          <input type="checkbox" id="complete" />
          <label htmlFor="complete">Show only completed notes</label>
        </div>
      </div>
    </div>
  );
};

export default Tab;
