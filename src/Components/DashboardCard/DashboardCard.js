import React from "react";
import "./DashboardCard.css";

function DashboardCard(props) {
  return (
    <div>
      <div className={"dash-info" + " " + props.name}>
        <p>{props.title}</p>
        <p>{props.figures}</p>
      </div>
    </div>
  );
}

export default DashboardCard;
