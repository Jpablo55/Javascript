const productos = {
  1: { id: 1, nombre: "Camiseta", precio: 25000 },
  2: { id: 2, nombre: "Pantalón", precio: 50000 },
  3: { id: 3, nombre: "Zapatos", precio: 80000 },
};

// Convertimos productos en un Set para evitar duplicados
const setProductos = new Set(Object.values(productos));


const categorias = new Map();
categorias.set("Ropa superior", "Camiseta");
categorias.set("Ropa inferior", "Pantalón");
categorias.set("Calzado", "Zapatos");


console.log(" Propiedades y valores del objeto productos ");
for (let key in productos) {
  console.log(`ID: ${productos[key].id}, Nombre: ${productos[key].nombre}, Precio: ${productos[key].precio}`);
}

console.log("\n Productos únicos desde el Set ");
for (let producto of setProductos) {
  console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: ${producto.precio}`);
}

console.log("\n Categorías y nombres desde el Map ");
categorias.forEach((nombre, categoria) => {
  console.log(`Categoría: ${categoria}, Producto: ${nombre}`);
});

// Validación simple de productos
console.log("\n--- Validación de productos ---");
for (let key in productos) {
  const { id, nombre, precio } = productos[key];
  if (!id || !nombre || typeof precio !== "number") {
    console.log(`Producto con clave ${key} tiene datos inválidos.`);
  } else {
    console.log(`Producto ${nombre} válido.`);
  }
}