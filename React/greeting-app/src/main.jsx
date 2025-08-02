import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const now = new Date(2025, 1, 1, 20);
const currentTime = now.getHours();

var greeting;

const customStyle = {
  color: ""
}

if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
}
else if (currentTime < 17) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
}
else if (currentTime < 20) {
  greeting = "Good Evening";
  customStyle.color = "yellow";
}
else {
  greeting = "Good Night";
  customStyle.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={customStyle}>{greeting}</h1>
  </div>,
  document.getElementById("root")
);
