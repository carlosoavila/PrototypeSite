import React from "react";
import "./Product.css"

export default props =>
    <div>
        <label  htmlFor="product" name="product" id="product">Produto: </label>
        <input className="product" type="text" list="prod"onChange={(e) => props.changePro(e)}/>


        <datalist id="prod">

            <option value="Fale Mais(30 min)" />
            <option value="Fale Mais(60 min)" />
            <option value="Fale Mais(120 min)" />

        </datalist>
    </div>