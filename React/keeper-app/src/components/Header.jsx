import React from "react";
import logo from "./../assets/logo2.png";
import HighlightIcon from "@mui/icons-material/Highlight";

function Header() {
    return <header>
        <div className="title">
            <img src={logo} alt="logo" width="50" height="50" />
            <h1>Keeper</h1>
        </div>
    </header>
}

export default Header;