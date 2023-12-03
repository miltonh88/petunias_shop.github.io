const Bikinis = [
    {
    id:5,
    img: "MarilynFucsia.jpg",
    descripcion: "Bikini Marilyn Y Vedetina",
    talle: " Talle 4",
    color: " Fucsia",
    precio: " 7000",
    COD: " Bk0001",
    array: "Bikinis"
    },
    {
    id:6,
    img: "TrianguloPrint.jpg",
    descripcion: "Bikini Triangulo Y Cola Less animal print",
    talle: " Talle 2",
    color: " Fucsia",
    precio: " 6000",
    COD: " Bk0004",
    array: "Bikinis"
    },
    {
    id:7,
    img: "TrianguloArgo.jpg",
    descripcion: "Bikini Triangulo Y Cola Con Argolla",
    talle: " Talle 3",
    color: " Turquesa",
    precio: " 6500",
    COD: " Bk0005",
    array: "Bikinis"
    },
    {
    id:8,
    img: "TangaRegulable.jpg",
    descripcion: "Bikini Triangulo Con Tanga Regulable",
    talle: " Talle 1",
    color: " Surtido",
    precio: " 6000",
    COD: " Bk0009",
    array: "Bikinis"
    },
    {
    id:9,
    img: "TrianguloLess.jpg",
    descripcion: "Bikini Triangulo Y ColaLess",
    talle: " Talle 1-3",
    color: " Turquesa",
    precio: " 6000",
    COD: " Bk0014",
    array: "Bikinis"
    },
    {
    id:10,
    img: "AroVedetina.jpg",
    descripcion: "Bikini Corpiño Con Taza Y Aro Y Vedetina",
    talle: " Talle 1-4",
    color: " Tostado / Celeste",
    precio: "	6500",
    COD: " Bk0017",
    array: "Bikinis"
    },
    {
    id:11,
    img: "TrianguloVolados.jpg",
    descripcion: "Bikini Triangulo Y ColaLess Con Volados",
    talle: " Talle 3",
    color: " Naranja",
    precio: "	5365",
    COD: " Bk0024",
    array: "Bikinis"
    },
    {
    id:12,
    img: "Morley.jpg",
    descripcion: "Bikini Triángulo Morley",
    talle: " Talle 2",
    color: " Negro",
    precio: "	3000",
    COD: " Bk0025",
    array: "Bikinis"
    },
]

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
crearTarjetasProductos(Bikinis);
/*
    <h6>Talle:${producto.talle}</h6>
    <h6>Color:${producto.color}</h6>
*/