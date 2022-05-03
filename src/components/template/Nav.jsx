import React from "react";
import "./Nav.css"
import {Link} from "react-router-dom";

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/" className="fa fa-home"> Início</Link>
            <Link to="/products/" className="fa fa-shopping-cart"> Produtos</Link>
            <Link to="/table/" className="fa fa-money"> Tabela de Preços</Link>
        </nav>
    </aside>