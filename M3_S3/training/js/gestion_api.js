const BASE_API_URL = "http://localhost:3000/products";

// Obtener productos existentes
const existingProducts = async () => {
    try {
        const response = await fetch(`${BASE_API_URL}`);
        const data = await response.json();
        console.log("Productos existentes:", data);
        renderProductsTable(data);
    } catch (error) {
        console.error("Error al obtener productos:", error);
    }
};

// Validar datos del producto
const validateProduct = (product) => {
    if (!product.id || !product.name || product.price == null) {
        console.error("Todos los campos son obligatorios");
        return false;
    }

    if (isNaN(product.price) || product.price < 0) {
        console.error("El precio debe ser un número válido y positivo");
        return false;
    }

    return true;
};

// Crear un producto nuevo
const newProductFunction = async () => {
    const newProduct = { id: "5", name: "Monitor", price: 233 };

    if (!validateProduct(newProduct)) return;

    try {
        const response = await fetch(BASE_API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newProduct),
        });

        if (!response.ok) throw new Error("Error al crear el producto");

        const data = await response.json();
        console.log("Producto creado:", data);

        existingProducts(); // refrescar tabla
    } catch (error) {
        console.error("Error al crear producto:", error);
    }
};

// Actualizar un producto existente
const updateProductFunction = async () => {
    const updateProduct = { id: "2", name: "Mouse", price: 50 };

    if (!validateProduct(updateProduct)) return;

    try {
        const response = await fetch(`${BASE_API_URL}/${updateProduct.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateProduct),
        });

        if (!response.ok) throw new Error("Error al actualizar el producto");

        const data = await response.json();
        console.log("Producto actualizado:", data);

        existingProducts(); // refrescar tabla
    } catch (error) {
        console.error("Error al actualizar producto:", error);
    }
};

// Eliminar un producto
const deleteProduct = async () => {
    const deleteId = 2;

    try {
        const response = await fetch(`${BASE_API_URL}/${deleteId}`, {
            method: 'DELETE'
        });

        if (!response.ok) throw new Error("Error al eliminar el producto");

        const data = await response.json();
        console.log("Producto eliminado correctamente:", data);

        existingProducts(); // refrescar tabla
    } catch (error) {
        console.error('Error al eliminar producto:', error);
    }
};

// Mostrar productos en tabla
const renderProductsTable = (products) => {
    const tableBody = document.querySelector("#productsTable tbody");
    tableBody.innerHTML = ""; // Limpiar contenido previo

    products.forEach(product => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
        `;

        tableBody.appendChild(row);
    });
};
