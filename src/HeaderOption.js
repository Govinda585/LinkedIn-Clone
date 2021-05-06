import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@material-ui/core";
import { connect } from "react-redux";

function HeaderOption({ Icon, title, avatar, onClick, user }) {
  return (
    <div className="headerOption" onClick={onClick}>
      {Icon && <Icon className="headerOption_icon" />}
      {avatar && (
        <Avatar className="headerOption_avatar" src={user?.photoURL}>
          {user.email[0]}
        </Avatar>
      )}
      <h3 className="headerOption_title"> {title}</h3>
    </div>
  );
}

const mapDispatchToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapDispatchToProps)(HeaderOption);
