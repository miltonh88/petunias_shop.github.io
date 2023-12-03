const Boxers = [
    {
    id:23,
    img: "paco.jpg",
    descripcion: "BOXER ARGENTINA PACO",
    talle: " 4, 5, 6",
    color: " Surtido",
    precio: " 3500",
    COD: " X0001",
    array: "Boxers"
    },
    {
    id:24,
    img: "zorba.jpg",
    descripcion: "Boxer Zorba",
    talle: " S, M, L, XL",
    color: " Surtido",
    precio: " 2760",
    COD: " X0002",
    array: "Boxers"
    },
    {
    id:25,
    img: "boxerest.jpg",
    descripcion: "Boxer Estampado",
    talle: "M, XXL",
    color: "Azul con rayas blancas, Negro, Negro con rayas blancas",
    precio: " 2000",
    COD: " X0003",
    array: "Boxers"
    },
    {
    id:26,
    img: "slip.jpg",
    descripcion: "Slip L y K",
    talle: "8",
    color: "Surtido",
    precio: " 2500",
    COD: "X0004",
    array: "Boxers"
    },
]

/*
X0001 PROMO X3 8.900,00.
X0002 PROMO X3 7.500,00.
*/

const contenedorTarjetas = document.getElementById("productos-container");

 /*Crea las tarjetas de productos teniendo en cuenta la lista en .js*/
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
crearTarjetasProductos(Boxers);

