import React, { Component } from "react";
import "./Calculator.css"
import Button from "./Button";
import NumberList from "./NumberList";
import Time from "./Time";
import Price from "./Price";
import Product from "./Product";

const initialState = {
    ramalList: "",
    time: 0,
    product: "",
    productTime: 0,
    priceOff: 0, //Valor sem o fale-mais
    price: 0 // Valor com o fale-mais

}


export default class Calculator extends Component {

    state ={...initialState}

    clear() {
        window.location.reload()
    }

    time(number) {
            const value = number.target.value
            this.setState({time: value})
             console.log(value)
    }

    ramal(list) {
            const value = list.target.value
            this.setState({ramalList:value})
            console.log(value)

    }

    product(pro) {
        const value = pro.target.value
        if(value == 'Fale Mais(30 min)'){
            this.setState({productTime:30})
            console.log(value)
        }else if(value == 'Fale Mais(60 min)') {
            this.setState({productTime:60})
            console.log(value)
        }else if(value == 'Fale Mais(120 min)') {
            this.setState({productTime:120})
            console.log(value)
        }
    }

    price() {
        const ramalList = this.state.ramalList
        const time = this.state.time
        const productTime = this.state.productTime
        if(ramalList === '011-016') {
            if(time > productTime) {
                let price = 1.90  
                let fees = price * 0.1
                let exceededMinutes = time - productTime
                let totalOn = exceededMinutes * (fees + price)
                let totalOff = time * price
                this.setState({price:totalOn ,priceOff:totalOff})
            } else {
                let price = 1.90
                let totalOn = 0
                let totalOff = time * price
                this.setState({price:totalOn ,priceOff:totalOff})
            }
        }
       
      
        if(ramalList === '011-017') {
            if(time > productTime) {
                let price = 1.70  
                let fees = price * 0.1
                let exceededMinutes = time - productTime
                let totalOn = exceededMinutes * (fees + price)
                let totalOff = time * price
                this.setState({price:totalOn ,priceOff:totalOff})
            } else {
                let price = 1.70
                let totalOn = 0
                let totalOff = time * price
                this.setState({price:totalOn ,priceOff:totalOff})
            }
        }

        if(ramalList === '011-018') {
            if(time > productTime) {
                let price = 0.90 
                let fees = price * 0.1
                let exceededMinutes = time - productTime
                let totalOn = exceededMinutes * (fees + price)
                let totalOff = time * price
                this.setState({price:totalOn ,priceOff:totalOff})
            } else {
                let price = 0.90
                let totalOn = 0
                let totalOff = time * price
                this.setState({price:totalOn ,priceOff:totalOff})
            }
        }

        if(ramalList === '016-011') {
            if(time > productTime) {
                let price = 2.90  
                let fees = price * 0.1
                let exceededMinutes = time - productTime
                let totalOn = exceededMinutes * (fees + price)
                let totalOff = time * price
                this.setState({price:totalOn ,priceOff:totalOff})
            } else {
                let price = 2.90
                let totalOn = 0
                let totalOff = time * price
                this.setState({price:totalOn ,priceOff:totalOff})
            }
        }

        if(ramalList === '017-011') {
            if(time > productTime) {
                let price = 2.70  
                let fees = price * 0.1
                let exceededMinutes = time - productTime
                let totalOn = exceededMinutes * (fees + price)
                let totalOff = time * price
                this.setState({price:totalOn ,priceOff:totalOff})
            } else {
                let price = 2.70
                let totalOn = 0
                let totalOff = time * price
                this.setState({price:totalOn ,priceOff:totalOff})
            }
        }

        if(ramalList === '018-011') {
            if(time > productTime) {
                let price = 1.90  
                let fees = price * 0.1
                let exceededMinutes = time - productTime
                let totalOn = exceededMinutes * (fees + price)
                let totalOff = time * price
                this.setState({price:totalOn ,priceOff:totalOff})
            } else {
                let price = 1.90
                let totalOn = 0
                let totalOff = time * price
                this.setState({price:totalOn ,priceOff:totalOff})
            }
        }

    }

    render() {
        const time = n => this.time(n)
        const ramal = n =>this.ramal(n)
        const price = n => this.price(n)
        const product = n => this.product(n)
        const clear = n => this.clear(n)
        

        return (
            <div className="calculator">
                <NumberList change={ramal}/>
                <Time keyDown={time}/>
                <Product changePro={product}/>
                <Price value={this.state.price} valueOff={this.state.priceOff}/>
                <Button name="Calcular" click={price}/>
                <Button name="Limpar" click={clear}/>
            </div>
        )
    }
}