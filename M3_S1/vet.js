let mascotas = [{
    nombre: "Luna",
    especie: "Perro",
    edad: 3,
    vacunado: true
  },
  {
    nombre: "Firulais",
    especie: "Perro",
    edad: 3,
    vacunado: false
  },
  {
    nombre: "Firulais2",
    especie: "Perro",
    edad: 3,
    vacunado: true
  }
]
const mascotasVacunadas = () =>{
    let vacunadas = mascotas.filter((mascota) => mascota.vacunado)
    console.log('Mascotas vacunadas:')
    vacunadas.forEach((mascota)=> {
        console.log(`• ${mascota.nombre}`)
    })
}
const promedioEdadMascota = () =>{
    
}

mascotasVacunadas()