import React from "react";
import "./NumberList.css"

export default props => 
    <div className="list-menu">

        <label htmlFor="list">DD para DD: </label>
        <input className="list" type="text" list="data" id="list" onChange={e => props.change(e)} />

        <datalist id="data">

            <option value="011-016"/>
            <option value="011-017"/>
            <option value="011-018"/>
            <option value="016-011"/>
            <option value="017-011"/>
            <option value="018-011"/>

        </datalist>
    </div>