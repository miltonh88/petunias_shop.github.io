const contenedorTarjetas = document.getElementById("productos-container");
const unidadesElement = document.getElementById("unidades");
const precioElement = document.getElementById("precio");
const totalesContainer = document.getElementById("totales");
const carritoVacioElement = document.getElementById("carrito-vacio");

/** Crea las tarjetas de productos teniendo en cuenta lo guardado en localstorage */
function crearTarjetasProductosCarrito() {
  contenedorTarjetas.innerHTML = "";
  const productos = JSON.parse(localStorage.getItem("Conjuntos, Bikinis, Bombachas, Boxers, Medias, Niños, Accesorios"));
  if (productos && productos.length > 0) {
    productos.forEach((producto) => {
      console.log("Productos:", producto);
      const nuevoProducto = document.createElement("div");
      nuevoProducto.classList = "tarjeta-producto";
      nuevoProducto.innerHTML = `
    <img src="./assets/img/${producto.img}">
    <h5>${producto.descripcion}</h5>
    <h6>${producto.COD}</h6>
    <span>$${producto.precio}</span>
    <div>
    <button>-</button>
    <span class="cantidad">${producto.cantidad}</span>
    <button>+</button>
    </div>
    `;
    contenedorTarjetas.appendChild(nuevoProducto);
      nuevoProducto
        .getElementsByTagName("button")[0]
        .addEventListener("click", (e) => {
          const unidadesElement = e.target.parentElement.getElementsByClassName("cantidad")[0];
          unidadesElement.innerText = restarAlCarrito(producto);
          crearTarjetasProductosCarrito();
          actualizarTotales();
        });
        nuevoProducto
        .getElementsByTagName("button")[1]
        .addEventListener("click", (e) => {
          const unidadesElement = e.target.parentElement.getElementsByClassName("cantidad")[0];
          unidadesElement.innerText = agregarAlCarrito(producto);
          actualizarTotales();
        });
    });
  }
  revisarMensajeVacio();
  actualizarTotales();
  actualizarNumeroCarrito();
}

crearTarjetasProductosCarrito();

/** Actualiza el total de precio y unidades de la página del carrito */
function actualizarTotales() {
  const productos = JSON.parse(localStorage.getItem("Conjuntos, Bikinis, Bombachas, Boxers, Medias, Niños, Accesorios"));
  let unidades = 0;
  let precio = 0;
  if (productos && productos.length > 0) {
    productos.forEach((producto) => {
      unidades += producto.cantidad;
      precio += parseFloat(producto.precio.replace()) * producto.cantidad || 0;
    });
  }
  unidadesElement.innerText = unidades;
  precioElement.innerText = precio;
  if(precio === 0) {
    reiniciarCarrito();
    revisarMensajeVacio();
  }
}

document.getElementById("reiniciar").addEventListener("click", () => {
  contenedorTarjetas.innerHTML = "";
  reiniciarCarrito();
  revisarMensajeVacio();
});

/** Muestra o esconde el mensaje de que no hay nada en el carrito */
function revisarMensajeVacio() {
  const productos = JSON.parse(localStorage.getItem("Conjuntos, Bikinis, Bombachas, Boxers, Medias, Niños, Accesorios"));
  carritoVacioElement.classList.toggle("escondido", productos);
  totalesContainer.classList.toggle("escondido", !productos);
}

function construirMensajeDetallado() {
  const productos = JSON.parse(localStorage.getItem("Conjuntos, Bikinis, Bombachas, Boxers, Medias, Niños, Accesorios"));
  let mensaje = "¡Hola! Quiero realizar el siguiente pedido:\n";

  if (productos && productos.length > 0) {
    productos.forEach((producto) => {
      const precioProducto = parseFloat(producto.precio) || 0; // Asegúrate de que el precio sea un número
      mensaje += `${producto.cantidad}x ${producto.descripcion} - $${precioProducto * producto.cantidad}\n`;
    });
  }

  mensaje += `\nTotal unidades: ${unidadesElement.innerText}\nTotal precio: $${precioElement.innerText}`;

  // Eliminamos los caracteres especiales y reemplazamos espacios con %20
  mensaje = encodeURIComponent(mensaje.trim());

  return mensaje;
}

document.getElementById("comprar").addEventListener("click", () => {
  const contactoNatu = document.getElementById("whatsapp-natu");
  const contactoEli = document.getElementById("whatsapp-eli");

  if (contactoNatu && contactoEli) {
    const mensaje = construirMensajeDetallado();
    const urlNatu = contactoNatu.getAttribute("href") + encodeURIComponent(mensaje);
    const urlEli = contactoEli.getAttribute("href") + encodeURIComponent(mensaje);

    // Abre las ventanas de WhatsApp para Natu y Eli
    window.open(urlNatu, "https://api.whatsapp.com/send?phone=+543496510262&text=Hola%20tienda%20petunias");
    window.open(urlEli, "https://api.whatsapp.com/send?phone=+543774466106&text=Hola%20tienda%20petunias");
  }
});