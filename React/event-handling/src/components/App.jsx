import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false)

  const [headingName, setHeading] = useState("");

  function handleClick(event) {
    setHeadingText("Submitted");

    setHeading(name);
    event.preventDefault();
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);

    // console.log(event.target.value);
    // console.log(event.target.placeholder);
    // console.log(event.target.type);
  }

  return (
    <div className="container">
      {/* <h1>{headingText}</h1> */}
      <h1>Hello {headingName}</h1>
      <form onSubmit={handleClick}>
        <input 
          type="text" 
          placeholder="What's your name?" 
          onChange={handleChange}
          value={name}
        />
        <button 
          style={{backgroundColor: isMouseOver ? "black" : "white"}} 
          // onClick={handleClick} 
          type="submit"
          onMouseOut={handleMouseOut} 
          onMouseOver={handleMouseOver}>
        Submit
        </button>
      </form>
    </div>
  );
}

export default App;
