import React from "react";
import "./Header.css"

export default props =>
   <header className="header">
    <h1 className="mt-3">
            <i className="fa fa-home"></i> {props.name}
        </h1>
        <h6>{props.children}</h6>
   </header>