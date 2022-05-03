import React from "react";
import  {Route, Routes} from "react-router-dom"
import Main from "../components/template/Main";
import Table from "../table/Table";
import Products from "../products/Products";




export default props =>
    <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route path="/table/" element={<Table/>}/>
        <Route path="/products/" element={<Products/>}/>
    </Routes>