// let array = [0,1,2,3,4];
// let container = document.getElementById('container');
// container.innerHTML = `<ul>`;
// array.forEach(numero =>{container.innerHTML += `<li> ${numero} </li>`});
// container.innerHTML += `</ul>`;


// Taller practico
// 1.1
// let colores = ['azul', 'verde', 'amarillo', 'lila'];
// let container = document.getElementById('container');
// colores.forEach(color => container.innerHTML += `<span> El color ${color} es muy bonito </span><br>`);

// 1.2
// let frasesMotivadoras = [
//     'El éxito es la suma de pequeños esfuerzos repetidos día tras día.', 
//     'La vida es como montar en bicicleta. Para mantener el equilibrio, debes avanzar',
//     'La innovación distingue a un líder de un seguidor.',
//     'No limites tus desafíos, desafía tus límites'
// ];
// let container = document.getElementById('container');
// frasesMotivadoras.forEach(frase => container.innerHTML += `<p>${frase}</p>`);

// 1.3
// let numeros = [0,1,2,3,4];
// let list = document.getElementById('unorganized-list')
// numeros.forEach(numero => list.innerHTML += `<li> ${numero} </li>`);


// 2.1
// let container = document.getElementById('container');
// let persona = {nombre: 'Andrea', edad: 19, ocupacion: 'Team leader'}
// container.innerHTML = `<span> Tarjeta de presentación </span> <br> <p>Nombre: ${persona.nombre}</p> <p>Edad: ${persona.edad}</p> <p>Ocupación: ${persona.ocupacion}</p>`

// 2.2
// let cancion = {titulo:'El gitano groseron',artista: 'Gildardo Montoya', duracion:'5:20'}
// let container = document.getElementById('container');
// container.innerHTML = `
// <h1>Canción</h1>
// <p>Título: ${cancion.titulo} </p>
// <p>Artista: ${cancion.artista} </p>
// <p>Duración: ${cancion.duracion} </p>
// `

//2.3 
// let producto = {nombre: 'yogurt griego', precio: 2000, stock: 5}
// let container = document.getElementById('container');
// container.innerHTML = `
// <ul> 
//     <li>Producto: ${producto.nombre}</li>
//     <li>Precio: ${producto.precio}</li>
//     <li>Stock: ${producto.stock}</li>
// </ul>
// `;

// 3.1
// let usuarios = [{nombre: 'Cristian', correo:'cris899@outlook.com'}, {nombre:'Daniela', correo:'Danielitaccc24@outlook.com'},{nombre:'Camila', correo:'militaseee@outlook.com'}];
// let container = document.getElementById('container');
// usuarios.forEach(usuario => container.innerHTML += `
//     <h1>Tarjeta ${usuario.nombre}</h1>
//     <div>
//         <p> Nombre: ${usuario.nombre} </p>
//         <p> Correo: ${usuario.correo} </p>
//     </div>
//     `);

// 3.2
// let libros = [{titulo: 'Asalto al paraíso', autor:'Aguinis, M.', año:2002},{titulo: 'Largo pétalo de mar', autor:'Allende, I.', año:2019}]
// let container = document.getElementById('container');
// container.innerHTML = '<ul>'
// libros.forEach(libro => container.innerHTML += `<li> Titulo: ${libro.titulo} - Año: ${libro.año} - Autor: ${libro.autor} </li>`)
// container.innerHTML += '</ul>'

// 3.3 Tienes una lista de tareas (con descripcion y completada). 
// Crea una función que genere una estructura HTML diferente si la tarea está completa o pendiente. Por ejemplo: mostrar un ✅ o ❌ antes del texto.
