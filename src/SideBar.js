import { Avatar } from "@material-ui/core";
import React from "react";
import "./SideBar.css";
import nature from "./img/nature.jpeg";
import { connect } from "react-redux";

function SideBar({ user }) {
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
        <Avatar src={user.photoURL}>{user.email[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
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

const mapStateToTheProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToTheProps)(SideBar);
