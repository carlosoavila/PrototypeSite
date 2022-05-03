// Testes 

let ddEleven3 = '011018'
let ddEleven2 = '011016'
let ddEleven1 = '011017'

let ddEleven4 = '017011'
let ddEleven5 = '018011'
let ddEleven6 = '016011'

let product0 = 0
let product1 = 30
let product2 = 60
let product3 = 120

function call(phone1, minutes, product) { 
if(phone1 == ddEleven2 && product == 0) { // Ligação sem o produto ******
    price = 1.90
    totalValue = minutes * price
    return totalValue
  

  }else if(phone1 == ddEleven2 && product < minutes){ // Ligação com produto e cobrança de tarifa excedente 
      price = 1.90 
      fees = price * 0.1
      exceededMinutes = minutes - product
      feesPrice = exceededMinutes * (fees + price)
      totalValue =  feesPrice
      return totalValue
  }
 
}

console.log(call(ddEleven2, 20, product0))