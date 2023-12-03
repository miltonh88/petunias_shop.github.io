const Accesorios = [
    {
    id:1,
    img: "PezonPapel.jpg",
    descripcion: "Pezoneras de papel color Piel",
    talle: " N/A",
    color: " Piel",
    precio: " 750",
    COD: " P0001",
    },
    {
    id:2,
    img: "CopaCilicona.jpg",
    descripcion: "Pezoneras de silicona	color Piel",
    talle: " N/A",
    color: " Piel",
    precio: " 1740",
    COD: " P0002",
    },
    {
    id:3,
    img: "PGrande.jpg",
    descripcion: "Pelota para lavar corpiño",
    talle: "N/A",
    color: "N/A",
    precio: " 2620",
    COD: " BO001",
    },
    {
    id:4,
    img: "Pchica.jpg",
    descripcion: "Pelota CHICA para lavar corpiño",
    talle: "N/A",
    color: "N/A",
    precio: " 700",
    COD: " BO002",
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
crearTarjetasProductos(Accesorios);
/*
<h6>Talle:${producto.talle}</h6>
<h6>Color:${producto.color}</h6>
*/