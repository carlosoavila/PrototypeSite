import React from "react";
import "./Products.css"
import Header from "../components/template/Header";
import OldPhone  from "../assets/images/oldPhone.jpg"
import Phone from "../assets/images/phone.jpg"
import NewPhone from "../assets/images/newPhone.jpg"

export default props => 
    <div >
        <Header name="Produtos" Subtitle="Nada ainda"/>
        <main className="container">

        <div className="card">
            <div className="card-image">
                <img src={OldPhone} alt="phone" />
            </div>
            <div className="card-description">
                <p className="description">Fale-mais por 30 minutos <strong>R$ 30,00</strong>/mês </p>
            </div>
        </div>
        <div className="card">
            <div className="card-image">
                <img src={Phone} alt="phone" />
            </div>
            <div className="card-description">
                <p className="description">Fale-Mais por 60 minutos <strong>R$ 60,00</strong>/mês </p>
            </div>
        </div>
        <div className="card">
            <div className="card-image">
                <img src={NewPhone} alt="phone" />
            </div>
            <div className="card-description">
                <p className="description " >Fale-Mais por 120 minutos <strong>R$ 120,00</strong>/mês </p>
               
            </div>
        </div>
        </main>
    </div>