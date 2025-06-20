// Agregar nombre de mascotas
let listaMascotas = [
    {nombre: 'Luna', especie: 'Perro', edad: 3, vacuna: 'si'},
    {nombre: 'Miau', especie: 'Gato', edad: 2, vacuna: 'no'},
    {nombre: 'Rex', especie: 'Perro', edad: 5, vacuna: 'si'}, 
    {nombre: 'Paco', especie: 'Loro', edad: 1, vacuna: 'no'},
    {nombre: 'Nube', especie: 'Conejo', edad: 4, vacuna: 'si'},
  ]; 
  
  //Agrega una mascota a la lista 
  const agregarMascota = () => {
      const nombre = prompt('Ingrese el nombre de la mascota')
      const especie = prompt('Ingrese la especie de la mascota')
      const edad = prompt('Ingrese la edad de la mascota')
      const vacuna = prompt('Esta la mascota vacunada? Si/No').toLowerCase();
  
  listaMascotas.push({
      nombre: nombre,
      especie: especie,
      edad: parseInt(edad),
      vacuna: vacuna
      })
  }
  
  // Filtra por el nombre de la mascota
  const buscarMascota = () => {
      const buscar = prompt('Ingresa el nombre de la mascota que quieres buscar')
      const nombreEncontrado = listaMascotas.filter(mascota => mascota.nombre.toLowerCase() === buscar.toLowerCase())
  
      if (nombreEncontrado.length > 0) {
          console.log('Mascotas encontradas:')
          nombreEncontrado.forEach(mascota => {
              console.log(`Nombre: ${mascota.nombre}, Especie: ${mascota.especie}, Edad: ${mascota.edad}, Vacuna: ${mascota.vacuna}`);
          });
      }
      else{
          console.log('No se ha encontrado la mascota.')
      }
  }
  
  const mascotasVacunadas = () =>{
      let vacunadas = listaMascotas.filter((mascota) => mascota.vacuna === 'si');
      console.log('Mascotas vacunadas:')
      vacunadas.forEach((mascota)=> {
          console.log(`• ${mascota.nombre}`)
      })
  }
  const promedioEdadMascota = () =>{
      let sumaEdades = 0;
      listaMascotas.forEach((mascota) => sumaEdades += mascota.edad)
      let promedio = sumaEdades / listaMascotas.length
      console.log(`Promedio edades de mascotas: ${promedio}`)
  }
  
  console.log('La lista de mascotas es:', listaMascotas)
  
  const ordenarporedad = () => {
      const mascotasordenadas = listaMascotas.sort((a, b) => a.edad - b.edad);
      const resultado = mascotasordenadas.map(mascota => `${mascota.nombre} (${mascota.edad} años)`).join("<br>");
      document.getElementById("resultado").innerHTML = resultado;
      console.log('Mascotas ordenadas por edad:', mascotasordenadas);
  }
  
  const menu = () => {
    console.log("Menú:");
    console.log("1. Agregar mascota");
    console.log("2. Buscar mascota");
    console.log("3. Mascotas vacunadas");
    console.log("4. Promedio edad mascota");
    console.log("5. Ordenar por edad");
    console.log("6. Salir");
  
    const opcion = prompt(`Ingrese una opción
      \n1. Agregar mascota
      \n2. Buscar mascota
      \n3. Mascotas vacunadas
      \n4. Promedio edad mascota
      \n5. Ordenar por edad
      \n6. Salir`);
  
    switch (opcion) {
      case "1":
        agregarMascota();
        break;
      case "2":
        buscarMascota();
        break;
      case "3":
        mascotasVacunadas();
        break;
      case "4":
        promedioEdadMascota();
        break;
      case "5":
        ordenarporedad();
        break;
      case "6":
        console.log("Saliendo...");
        break;
      default:
        console.log("Opción inválida");
    }
  
    if (opcion !== "6") {
      menu();
    }
  }
  
  menu();