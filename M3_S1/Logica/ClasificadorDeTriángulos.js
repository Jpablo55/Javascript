
let lado1 = parseFloat(prompt('Ingrese el primer lado del triángulo'));
let lado2 = parseFloat(prompt('Ingrese el segundo lado del triángulo'));
let lado3 = parseFloat(prompt('Ingrese el tercer lado del triángulo'));

if((lado1 >= 0 && lado2 >= 0 && lado3 >= 0) && ((lado1 + lado2) > lado3) && ((lado2 + lado3) > lado1) && ((lado1 + lado3) > lado2)){
    if(lado1 === lado2 && lado1 === lado3){
        console.log('Es un triángulo equilátero')
    }
    else if(lado1 === lado2 || lado2 == lado3 || lado1 === lado3){
        console.log('Es un triángulo isósceles')
    }
    else{
        console.log('Es un triángulo escaleno')
    }
}
else{
    console.log('Los lados ingresados no forman un triángulo')
}

// Métodos de arrays en JavaScript

let frutas = ['Banano', 'Manzana', 'Pera']
frutas.shift()

let numbers = [1,2,3]
numbers.push(4)

let palabras = ['Mariana', 'David']
palabras.unshift('Andrea')

let colores = ['Rojo', 'Negro', 'Azul']
colores.pop()

let animales = ['Tortuga', 'Pinguino', 'Leon', 'Hipopotamo']
let porcion_animales = animales.slice(1,3)

let dias = ['Lunes', 'Martes', 'Sabado']
dias[1] = 'Jueves'

let frase = ['tres', 'tristes', 'tigres']
let unionFrase = frase.join(' ')

let nombres = ['Jeronimo', 'Daniel', 'Alejandra']
nombres.sort()

let numbers2 = [9,8,7,6,5,4,3,2,1]
numbers2.reverse()

let ciudades = ['Medellín', 'Bogotá', 'Tenjo']
let exist = ciudades.includes('Tenjo')

// for, for of, y for in
let word = 'Logica'
for(let element of word){
    console.log(element)
}


for(let i = 1; i <= 5; i++ ){
    console.log(i)
}

for (const key in word) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}
