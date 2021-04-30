import { Avatar } from "@material-ui/core";
import React from "react";
import "./SideBar.css";
import nature from "./img/nature.jpeg";

function SideBar() {
  const recentItem = (topic) => (
    <div className="recentItem">
      <span className="sidebar_hashtag">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img className="sidebar_img" src={nature} alt="" />
        <Avatar />
        <h2>Govinda Bist</h2>
        <h4>govindabist11@gmail.com</h4>
      </div>
      <div className="sidebar_status">
        <span className="sidebar_stat">
          Who viewed you <p>1,111</p>
        </span>

        <span className="sidebar_stat">
          View on Post <p>2,121</p>
        </span>
      </div>
      <div className="sidebar_footer">
        <h4 className="sidebar_footer_tags">Recent</h4>
        {recentItem("Reactjs")}
        {recentItem("JavaScript")}
        {recentItem("Programming")}
        {recentItem("Designer")}
        {recentItem("Softwareengineer")}
      </div>
    </div>
  );
}

export default SideBar;
