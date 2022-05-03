import React from "react";
import "./Button.css"

export default props => 
<div>
    <button className="button" onClick={(e) => props.click(e)}>{props.name}</button>
</div>