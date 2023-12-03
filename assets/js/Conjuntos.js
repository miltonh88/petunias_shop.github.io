const Conjuntos = [
   {
    id:27,
    img: "ejemplo.jpg",
    descripcion: "Conjunto Grecia con aro",
    talle:" 85, 100",
    color: " Blanco, Negro",
    precio: " 3000",
    COD: " C0002",
   },
   {
    id:28,
    img: "Dalila.jpg",
    descripcion: "Conjunto Encaje Dalila",
    talle:" 85",
    color: " Amarillo",
    precio: " 3000",
    COD: " C0017",
   },
   {
    id:29,
    img: "Olivia.jpg",
    descripcion: "Conjunto Olivia",
    talle:" 85, 90, 95, 105",
    color: " Blanco, Azul Marino, Azul Francia",
    precio: " 2500",
    COD: " C0021",
   },
   {
    id:30,
    img: "AlgodonLycraPuntillaPuk.jpg",
    descripcion: "Conjunto Algodón Y Lycra Con Puntilla Puk",
    talle:" 85, 95",
    color:" Blanco y Negro, Negro y Lila",
    precio:" 4596",
    COD: " C0033",
   },
   {
    id:31,
    img: "AlgodonEstampado.jpg",
    descripcion:"Conjunto Triangulo Algodón Estampado",
    talle:" 85, 90, 95",
    color:" Hueso, Gris, Negro, Blanco, Rojo",
    precio:" 3500",
    COD: " C0034",
   },
   {
    id:32,
    img: "ParisEncaje.jpg",
    descripcion: "Conjunto Paris Con Aro Y Encaje",
    talle: " 90, 95, 100",
    color: " Rojo, Blanco, Negro",
    precio: " 3000",
    COD: " C0016",
   },
   {
    id:33,
    img: "AroAlgodon.jpg",
    descripcion: "Conjunto con aro algodon",
    talle:" 90",
    color: " Blanco",
    precio: " 3000",
    COD: " C0001",
   },
   {
    id:34,
    img: "Love.jpg",
    descripcion: "Conjunto love",
    talle: " 90",
    color: " Nude",
    precio: " 2500",
    COD: " C0023",
   },
   {
    id:35,
    img: "CalvinK.jpg",
    descripcion: "Conjunto Deportivo Calvin",
    talle: " 90",
    color: " Negro",
    precio: " 3000",
    COD: " C0020",
   },
   {
    id:36,
    img: "CALVIN-Diana.jpg",
    descripcion: "Conjunto Deportivo Calvin Diana",
    talle: " 90",
    color: " Negro",
    precio: " 2680",
    COD: " C0040",
   },
   {
    id:37,
    img: "Engomado.jpg",
    descripcion: "Conjunto Engomado",
    talle: " 95",
    color: " Negro",
    precio: " 2075",
    COD: " C0022",
   },
   {
    id:38,
    img: "ArmadoAlgodon.jpg",
    descripcion: "Conjunto Sofia Armado Alg Y Lycra",
    talle: " 95, 100",
    color: " Bordo, Hueso",
    precio: " 4500",
    COD: " C0024",
   },
   {
    id:39,
    img: "WalterArmado.jpg",
    descripcion: "Conjunto Walter Armado Desahjado Triangulo",
    talle: " 95",
    color: " Rojo",
    precio: " 3620",
    COD: " C0031",
   },
   {
    id:40,
    img: "AroBicolor.jpg",
    descripcion: "Conjunto Walter Con Aro Bicolor",
    talle: " 105",
    color: " Negro y Gris",
    precio: " 4000",
    COD: " C0028",
   },
   {
    id:41,
    img: "AlbaEncaje.jpg",
    descripcion: "Conjunto Alba taza soft triangulo con encaje",
    talle: " 95, 100",
    color: " Blanco,	Negro",
    precio: " 3500",
    COD: " C0003",
   },
   {
    id:42,
    img: "FloraSoft.jpg",
    descripcion: "Conjunto Flora Taza Soft y ColaLess",
    talle: " 105",
    color: " Hueso",
    precio: " 4480",
    COD: " C0030",
   },
   {
    id:43,
    img: "CopaDD.jpg",
    descripcion: "Conjunto copa DD",
    talle: " 115",
    color: " Beige",
    precio: " 6000",
    COD: " C0115",
   },
   {
    id:44,
    img: "Bralette.jpg",
    descripcion: "Conjunto bralette y tangaless de puntilla",
    talle: " Talle 3, Talle 4",
    color: " Rosa",
    precio: " 5000",
    COD: " T0008",
   },
   {
    id:45,
    img: "TazaSoft.jpg",
    descripcion: "Conjunto taza soft y colaless de microfibra y puntilla",
    talle: " Talle 4",
    color: " Blanco",
    precio: " 5500",
    COD: " T0004",
   },
   {
    id:46,
    img: "TriaBasePunti.jpg",
    descripcion: "Triangulito c/ Base y Puntilla - ColaLess Regulable",
    talle: " Talle 4",
    color: " Rojo",
    precio: " 4000",
    COD: " N0009",
   },
   {
    id:47,
    img: "Cocot.jpg",
    descripcion: "Cocot",
    talle: " 85, 90, 100",
    color: " Blanco, Gris, Avellana",
    precio: " 4170",
    COD: " CT001",
   },
   {
    id:48,
    img: "TOP.jpg",
    descripcion: "Top Mijal",
    talle: " 85, 95, 100",
    color: " Blanco, Gris, Negro",
    precio: " 3400",
    COD: " TP001",
   },
]

const contenedorTarjetas = document.getElementById("productos-container");

 /*Crea las tarjetas de productos teniendo en cuenta la lista en el .js */
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
crearTarjetasProductos(Conjuntos);

/*
<h6>Talle:${producto.talle}</h6>
<h6>Color:${producto.color}</h6>
*/