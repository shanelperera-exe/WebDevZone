import React, {useState} from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange() {
        const { name, value } = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        }) 
    }

    function submitNote() {
        props.onAdd(note);
        event.preventDefault();
        setNote({
            title: "",
            content: ""
        });
    }

    return (
    <div>
        <form>
        <input 
            name="title" 
            placeholder="Title" 
            value={note.title}
            onChange={handleChange}
        />
        <textarea 
            name="content" 
            placeholder="Take a note..."
            rows="3" 
            value={note.content}
            onChange={handleChange}
        />
        <button
            onClick={submitNote}
        >+</button>
        </form>
    </div>
    );
}

export default CreateArea;
