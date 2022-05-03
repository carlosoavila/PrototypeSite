import React from "react";
import "./Time.css"

export default props => 
    <div>
        <label htmlFor="time">Tempo:</label>
        <input className="time" type="number" id="time" name="time" placeholder="Minutos" onChange={e => props.keyDown(e)}/>
    </div>