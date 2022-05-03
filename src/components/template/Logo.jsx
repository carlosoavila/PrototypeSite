import React from "react";
import "./Logo.css"
import logo from "../../assets/images/Telzir.png"

export default props =>
    <aside className="logo">
        <a href="/#">
            <img src={logo} alt="" />
        </a>
    </aside>