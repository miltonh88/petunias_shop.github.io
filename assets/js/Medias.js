const Medias = [
    {
    id:49,
    img: "SocLiso.jpg",
    descripcion: "Soquetes lisos de mujer MD",
    talle: "35-38",
    color: "Surtido",
    precio: "510",
    COD: "M0001",
    },
    {
    id:50,
    img: "SocUnisex.jpg",
    descripcion: "Soquetes unisex KP",
    talle: "35-38",
    color: "Lisa Lenceria Cielo",
    precio: "500",
    COD: "M0002",
    },
    {
    id:51,
    img: "EstampFluo.jpg",
    descripcion: "Soquetes estampado fluo lebnen underwear",
    talle: "35-41",
    color: "surtido",
    precio: "810",
    COD: "M0003",
    },
]

/*
M0001	PRECIO PROMOCIÓN 3x 1450.
M0002	PRECIO PROMOCIÓN 3x 2000.
M0003	PRECIO PROMOCIÓN 3x 2300.
*/

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
crearTarjetasProductos(Medias);

/*
<h6>Talle:${producto.talle}</h6>
<h6>Color:${producto.color}</h6>
*/