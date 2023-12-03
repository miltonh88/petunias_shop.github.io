const Niños = [
    {
    id:52,
    img: "Nenas.jpg",
    descripcion: "Bombacha Nena",
    talle: "Único",
    color: "Surtido",
    precio: "775",
    COD: "N0001",
    },
]

const contenedorTarjetas = document.getElementById("productos-container");

 /*Crea las tarjetas de productos teniendo en cuenta la lista en .js */
function crearTarjetasProductos(productos){
  productos.forEach(producto => {
    const nuevoProducto = document.createElement("div");
    nuevoProducto.classList = "tarjeta-producto"
    nuevoProducto.innerHTML = `
    <img src="./assets/img/${producto.img}">
    <h5>${producto.descripcion}</h5>
    <h6>COD:${producto.COD}</h6>
    <p class="precio">$${producto.precio}</p>
    <button>Agregar al carrito</button>`
    contenedorTarjetas.appendChild(nuevoProducto);
    nuevoProducto.getElementsByTagName("button")[0].addEventListener("click",() => agregarAlCarrito(producto))
  });
}
crearTarjetasProductos(Niños);

/*
<h6>Talle:${producto.talle}</h6>
<h6>Color:${producto.color}</h6>
*/