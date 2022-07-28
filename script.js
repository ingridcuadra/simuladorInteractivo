let agregar, mas, continuar, aunMas
let caramelo = 0

const agregarCaramelos = (caramelo,cantidad) => caramelo + cantidad
const agregarMasCaramelos = (aunMas,mas,cantidad) => aunMas + mas + cantidad

alert("¡Agrega caramelos al frasco! Hay 0 caramelos por ahora :(")

do {
    cantidad = parseFloat(prompt("¿Cuántos caramelos desea agregar?"))

    if(isNaN(cantidad)){
        alert("Número ingresado no válido")
        cantidad = parseFloat(prompt("Ingrese los digitos correspondientes a la cantidad de caramelos que quiere agregar al frasco, por favor"))
    }

    alert(`Ahora hay ${agregarCaramelos(cantidad,caramelo)} caramelo(s) en el frasco :D`)

    agregar = prompt("¿Queres agregar más caramelos? (Escriba si o no)").toLowerCase

    if(agregar = "si") {
        mas = parseFloat(prompt("¿Cuántos más?"))

        alert(`Ahora hay ${agregarCaramelos(mas,cantidad)} caramelos en el frasco :)`)
    }

    continuar = prompt("¿QUERES AGREGAR MÁS? ¡EL FRASCO EXPLOTARÁ! (Escriba si o no)")

    if(continuar = "si") {
        aunMas = parseFloat(prompt("¿Cuántos?"))

        alert(`Ya hay ${agregarMasCaramelos(aunMas,mas,cantidad)} caramelos :P`)
    }else if(continuar = "no") {
        alert("De acuerdo, nos vemos luego :3")
    }
}while(agregar = "no" || cantidad < 10000 || aunMas < 10000 || mas < 10000)

alert("Hay demasiados caramelos en frasco. Gracias por dejar tus caramelos <3 ¡Hasta pronto!")