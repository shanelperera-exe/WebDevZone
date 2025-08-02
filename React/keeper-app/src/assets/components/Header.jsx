import React from "react";
import logo from "../logo2.png";


function Header() {
    return <header>
        <div className="title">
            <img src={logo} alt="logo" width="50" height="50" />
            <h1>Keeper</h1>
        </div>
    </header>
}

export default Header;