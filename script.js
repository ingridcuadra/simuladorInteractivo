// function saludar() {
//     console.log("hola")
// }

// saludar()

function sumar(numero1 = 0, numero2 = 0) {
    return numero1 + numero2
}

let num1, num2
do{
    num1 = parseFloat(prompt("Ingrese un número"))
    num2 = parseFloat(prompt("Ingrese otro número"))
}while(isNaN(num1) || isNaN(num2))

let resultado = sumar(num1,num2)
console.log(resultado)