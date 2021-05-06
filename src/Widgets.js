import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import "./Widgets.css";
function Widgets() {
  const newArticle = (heading, subtitle) => (
    <div className="widgets_news">
      <div className="widgets_articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets_header">
        <h3>Linked News</h3>
        <InfoIcon />
      </div>
      <div>
        {newArticle("React JS", "Javascript Library update")}
        {newArticle("New Graphic AMS", "AMD Rizen new graphic in the market")}
        {newArticle("Spring Framewrok ", "Java spring framework new update")}
        {newArticle("IBM", "vacancy open for IBM Software Engineer")}
        {newArticle("Microsoft", "New microsoft update version 12")}
      </div>
    </div>
  );
}

export default Widgets;
