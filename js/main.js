// jQuery
$(document).ready(function () { 
  $("#fila-productos").hide(); //al cargar el documento, esconde una fila de productos 


  var contadorGuardado = localStorage.getItem('carritoCount'); //recupera el valor de contadorGuardado desde el localstorage
  if (contadorGuardado) { //si contadorGuardado tiene un valor, se actualiza la badge con el conteo de productos en el carrito
      $("#items-carrito").text(contadorGuardado);
  }

  // funcion que muestra una fila mas de productos
  $("#btn-ver-mas").click(function () {
    $("#fila-productos").show();
    $("#btn-ver-mas").hide();
  });

  

  $(".btn-add-cart").click(function () {
    // obtiene el número de elementos en el carrito (badge)
    var itemsCarrito = $("#items-carrito");

    // incrementa el numero de elementos en el carrito (al hacer click en comprar)
    var cantidad = parseInt($("#items-carrito").text());
    if (!isNaN(cantidad)) {
      // si es un número valido, aumenta en 1 
      itemsCarrito.text(cantidad + 1);
    } else {
      // si no es un número valido (NaN), establecer el valor inicial a 1 (cuando el cliente aún no ha agregado nada al carrito)
      itemsCarrito.text(1);
    }
    // guardar el número de elementos en el carrito en localStorage para que se mantenga al navegar por la página
    localStorage.setItem('carritoCount', cantidad + 1);
  });
    
});
  
function validar() {
  //se recuperan los datos del formulario
  var correo = document.getElementById("email").value;
  var nombre = document.getElementById("contact_name").value;
  var telefono = document.getElementById("contact_phone").value;
  var mensaje = document.getElementById("contact_message").value;
  
  //se valida que el mail y telefono tengan el formato adecuado
  var validacEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var validacCelular = /^\d{9}$/;
  
  //mensajes para permitir al usuario ingresar datos válidos
  if (correo === "" || validacEmail.test(correo) === false) {
    document.getElementById("mensajeCorreo").textContent =
      "Debe ingresar un correo válido";
  } else {
    document.getElementById("mensajeCorreo").textContent = "";
  }

  if (telefono === "") {
    document.getElementById("mensajeTelefono").textContent = "";
  } else if (validacCelular.test(telefono) === false) {
    document.getElementById("mensajeTelefono").textContent =
      "Debe ingresar un teléfono válido";
  }
  if (nombre === "") {
    document.getElementById("mensajeNombre").textContent =
      "Debe ingresar un nombre ";
  } else {
    document.getElementById("mensajeNombre").textContent = "";
  }
  if (mensaje === "") {
    document.getElementById("mensajeMensaje").textContent =
      "El mensaje no puede estar vacío";
  } else {
    document.getElementById("mensajeMensaje").textContent = "";
  }
}
  
function calcularSubTotal() { //funcion que calcula el subtotal del producto 
  var precioProductoText =
    document.getElementById("precioProducto").textContent;
  var precioProducto = parseFloat(precioProductoText);
  var cantidadProducto = parseFloat(
    document.getElementById("cantidad_producto").value
  );

  document.getElementById("subtotal").textContent =
    precioProducto * cantidadProducto;
}

//-----consumo de API-------
// Verificar si los datos están en el localStorage
var imagenesGuardadas = localStorage.getItem('imagenesGatos');

if (imagenesGuardadas) {
    // Si hay datos en el localStorage, utilizarlos directamente
    populateCategories(JSON.parse(imagenesGuardadas));
} else {
    fetch("https://api.thecatapi.com/v1/images/search?limit=3") //api que entrega imágenes aleatorias de gatos
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('imagenesGatos', JSON.stringify(data));
            populateCategories(data);
        })
        .catch(error => console.error('Error fetching data:', error));
}

// función agregar las imagenes al carrusel
function populateCategories(data) {
    var container1 = document.getElementById("carrusel-gato1");
    var container2 = document.getElementById("carrusel-gato2");
    var container3 = document.getElementById("carrusel-gato3");

    // itera sobre cada imagen y la agrega al contenedor correspondiente
    data.forEach((image, index) => {
        var imageUrl = image.url;
        var imggato = document.createElement("img");
        imggato.src = imageUrl;

        // agrega la imagen al contenedor correspondiente segun el indice
        if (index === 0) {
            container1.appendChild(imggato);
        } else if (index === 1) {
            container2.appendChild(imggato);
        } else if (index === 2) {
            container3.appendChild(imggato);
        }
    });
}

