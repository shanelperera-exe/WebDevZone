import React from "react";
import Login from "./Login";

var isLoggedIn = false;

function App() {
  return (
    <div className="container">
      {isLoggedIn ? <h1>Hello</h1> : <Login/>}
    </div>
  );
}

// Use of && to render something if an expression is true
// const currentTime = new Date(2025, 8, 4, 9).getHours();
// currentTime > 12 && <h1>Why are you still working</h1>


export default App;
