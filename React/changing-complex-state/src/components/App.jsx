import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        }
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        }
      }
    })
  }

  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input 
          name="fName" 
          placeholder="First Name" 
          onChange={handleChange}
          value={fullName.fName}
        />
        <input 
          name="lName" 
          placeholder="Last Name" 
          onChange={handleChange}
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

// function App() {
//   const [fName, setFirstName] = useState("");
//   const [lName, setLastName] = useState("");

//   function updateFName(event) {
//     setFirstName(event.target.value);
//   }

//   function updateLName(event) {
//     setLastName(event.target.value);
//   }

//   return (
//     <div className="container">
//       <h1>Hello {fName} {lName}</h1>
//       <form>
//         <input 
//           name="fName" 
//           placeholder="First Name" 
//           onChange={updateFName}
//           value={fName}
//         />
//         <input 
//           name="lName" 
//           placeholder="Last Name" 
//           onChange={updateLName}
//           value={lName}
//         />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

export default App;
