function formatearMensaje(mensajeCodificado) {
    const mensajeDecodificado = decodeURIComponent(mensajeCodificado);
  
    // Separar las líneas con saltos de línea
    const lineasMensaje = mensajeDecodificado.split('\n');
  
    // Personalizar el formato según tus preferencias
    const mensajeFormateado = lineasMensaje.map((linea) => {
      // Puedes agregar más personalizaciones aquí según sea necesario
      return `• ${linea.trim()}`; // Agrega viñetas y elimina espacios en blanco al principio o al final
    }).join('\n'); // Une las líneas formateadas con saltos de línea
  
    return mensajeFormateado;
  }
  
  // Puedes agregar más funciones de presentación si es necesario