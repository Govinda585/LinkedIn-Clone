import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import InputOption from "./InputOption";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";
import SendIcon from "@material-ui/icons/Send";

function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post_header">
        <Avatar src={photoUrl}> {name[0]}</Avatar>
        <div className="post_info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post_body">
        <p>{message}</p>
      </div>
      <div className="post_buttons">
        <InputOption Icon={ThumbUpAltIcon} text="Like" color="gray" />
        <InputOption Icon={MessageIcon} text="Comment" color="gray" />
        <InputOption Icon={ShareIcon} text="Share" color="gray" />
        <InputOption Icon={SendIcon} text="Send" color="gray" />
      </div>
    </div>
  );
}

export default Post;
