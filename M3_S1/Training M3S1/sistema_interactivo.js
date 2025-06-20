// Entrada de datos del usuario
let nombre = prompt('Ingresa tu nombre');
let edad = prompt('Ingresa tu edad');
edad = parseInt(edad);
// Se valida si la edad ingresada es un número, y si es mayor a 0
if(!isNaN(edad) && edad > 0){
    // valida si la edad es mayor o igual a 18 
    if(edad >= 18){
        alert(`Hola ${nombre}, eres mayor de edad.  ¡Prepárate para grandes oportunidades en el mundo de la programación!`);
    }
    else{
        alert(`Hola ${nombre}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`);
    }
}
// Mensaje de error cuando el usuario ingresa un dato diferente a un número
else{
    console.error('Error: la edad debe ser un número, y debe ser mayor a 0');
}