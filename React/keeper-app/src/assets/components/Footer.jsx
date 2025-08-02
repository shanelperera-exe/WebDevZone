import React from "react";

function Footer() {
    const now = new Date();
    const currentYear = now.getFullYear();

    return <footer>
        <p>© {currentYear} Keeper. All rights reserved.</p>
    </footer>
}

export default Footer;