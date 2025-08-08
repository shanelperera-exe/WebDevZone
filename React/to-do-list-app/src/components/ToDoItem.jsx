import React, { useState } from "react";

function ToDoItem(props) {
    return (
        <div onClick={() => {
            props.onChecked(props.id);
        }}>
            <li>{props.listItem}</li>
        </div>
    );
}

// function ToDoItem(props) {
//     const [isDone, setIsDone] = useState(false)

//     function handleClick() {
//         setIsDone((prevValue) => {
//             return !prevValue;
//         });
//     }   

//     return (
//         <div onClick={handleClick}>
//             <li style={{textDecoration: isDone ? "line-through" : "none"}}>{props.listItem}</li>
//         </div>
//     );
// }

export default ToDoItem;