import React from "react";
import ReactDOM from "react-dom";

const fname = "Shanel";
const lname = "Perera";

const luckyNum = Math.floor(Math.random() * 9 + 1);

ReactDOM.render(
  <div>
    <h1>
      Hello {fname} {lname}
    </h1>
    <p>My lucky number is {luckyNum}</p>
  </div>,

  document.getElementById("root")
);
