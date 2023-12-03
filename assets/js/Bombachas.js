const Bombachas = [
    {
    id:13,
    img: "ColalessAlgodon.jpg",
    descripcion: "ColaLess",
    talle: " Especiales",
    color: " Surtido",
    precio: "2300",
    COD: " B0004",
    },
    {
    id:14,
    img: "BAlgSeñora.jpg",
    descripcion: "Bombacha algodón señora",
    talle: " Único",
    color: " Negras",
    precio: " 4220",
    COD: " B0005",
    },
    {
    id:15,
    img: "TipoLucia.jpg",
    descripcion: "Bombacha lucia",
    talle: " Único",
    color: " Negra",
    precio: " 2000",
    COD: " B0006",
    },
    {
    id:16,
    img: "ColaMicroReg.jpg",
    descripcion: "ColaLess Regulable Microfibra",
    talle: " Único",
    color: " Surtido",
    precio: " 2500",
    COD: " B0007",
    },
    {
    id:17,
    img: "VedetinasAlgodon.jpg",
    descripcion: "Vedetinas",
    talle: " Único",
    color: " Surtido",
    precio: "	2500",
    COD: " B0008",
    },
    {
    id:18,
    img: "Colregulablealg.jpg",
    descripcion: "ColalLess regulable de algodon",
    talle: " Único",
    color: " Surtido",
    precio: " 2400",
    COD: " B0009",
    },
    {
    id:19,
    img: "ColalessEncajeRegulable.jpg",
    descripcion: "ColaLess regulable de encaje",
    talle: " N/A",
    color: " N/A",
    precio: " 2400",
    COD: " B0010",
    },
    {
    id:20,
    img: "ColElásticoLurex.jpg",
    descripcion: "ColaLess con elastico lurex",
    talle: " Único",
    color: " Surtido",
    precio: " 3200",
    COD: " B0011",
    },
    {
    id:21,
    img: "Colalessmavi.jpg",
    descripcion: "ColaLess mavi",
    talle: " Único",
    color: " Varios Diseños",
    precio: " 3100",
    COD: " B0014",
    },
    {
    id:22,
    img: "ColaLisa.jpg",
    descripcion: "ColaLess lisa",
    talle: " Único",
    color: " Surtido",
    precio: "	2500",
    COD: " B0015",
    },
]
/*
B0004 ColaLess especiales	surtido	$2.300	las venderia a 2500 como las talle unico.
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
crearTarjetasProductos(Bombachas);

/*
    <h6>Talle:${producto.talle}</h6>
    <h6>Color:${producto.color}</h6>
*/