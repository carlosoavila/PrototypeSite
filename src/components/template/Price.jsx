import React from "react";
import "./Price.css"

export default props => 
    <div>
        <p className="price">Valor da tarifa com o Fale-Mais <strong>R${props.value}.</strong>  <br/>Valor da tarifa sem o Fale-Mais <strong>R${props.valueOff}.</strong> </p>
    </div>