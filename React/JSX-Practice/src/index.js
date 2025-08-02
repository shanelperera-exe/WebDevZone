import React from "react";
import ReactDOM from "react-dom";

const userName = "Shanel Perera";
const currentYear = new Date().getFullYear();


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <p>Created by {userName}</p>
    <p>Copyright {currentYear}</p>
  </div>
);