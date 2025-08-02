import React from "react";
import ReactDOM from "react-dom";

const userName = "Shanel Perera";
const currentYear = new Date().getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {userName}</p>
    <p>Copyright {currentYear}</p>
  </div>,
  document.getElementById("root")
);
