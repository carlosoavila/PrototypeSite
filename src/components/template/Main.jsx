import React, {Fragment} from "react";
import Calculator from "./Calculator";
import Header from "./Header";
import "./Main.css"



export default props =>
    <Fragment> 
        <Header name="Início">
            <p>Com o novo produto FaleMais da Telzir o cliente adquire um plano e pode falar de graça até  um determinado tempo (em minutos) <br /> e só paga os minutos excedentes.</p>
        </Header>
        <main className="content">
            <Calculator />
        </main>
    </Fragment>

    