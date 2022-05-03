import React from "react";
import "./Table.css"

import Header from "../components/template/Header";

export default props =>
    <div>
        <Header name="Tabela de Preços"/>
        <main className="container">
            <table>
                <tr>
                    <th>Origem</th>
                    <th>Destino</th>
                    <th>R$/Min</th>
                </tr>
                <tr>
                    <td>011</td>
                    <td>016</td>
                    <td>1.90</td>
                </tr>
                <tr>
                    <td>016</td>
                    <td>011</td>
                    <td>2.90</td>
                </tr>
                <tr>
                    <td>011</td>
                    <td>017</td>
                    <td>1.70</td>
                </tr>
                <tr>
                    <td>017</td>
                    <td>011</td>
                    <td>2.70</td>
                </tr>
                <tr>
                    <td>011</td>
                    <td>018</td>
                    <td>0.90</td>
                </tr>
                <tr>
                    <td>018</td>
                    <td>011</td>
                    <td>1.90</td>
                </tr>
            </table>
        </main>
    </div>