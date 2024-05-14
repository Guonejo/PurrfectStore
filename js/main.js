// jQuery
$(document).ready(function () {
    $("#fila-productos").hide();


    var savedCount = localStorage.getItem('carritoCount');
    if (savedCount) {
        $("#items-carrito").text(savedCount);
    }
  
    // Acción para el botón que muestre la siguiente fila de productos
    $("#btn-ver-mas").click(function () {
      $("#fila-productos").show();
      $("#btn-ver-mas").hide();
    });

    
  
    $(".btn-add-cart").click(function () {
      // Obtiene el elemento que contiene el número de elementos en el carrito
      var itemsCarrito = $("#items-carrito");
      var nombreProducto = document.querySelector(".nombre-producto").textContent;

      var precioProductoText = document.querySelector(".precio").textContent;
      
      var precioProducto = parseFloat(precioProductoText.replace(/[^\d]/g, ''), 10);
      console.log("Producto comprado:", nombreProducto);
      console.log("Precio:", precioProducto);
      console.log("Se agregó un elemento al carrito.");
  
      // Incrementa el número de elementos en el carrito
      var currentQuantity = parseInt($("#items-carrito").text());
      if (!isNaN(currentQuantity)) {
        // Si es un número válido, incrementar
        itemsCarrito.text(currentQuantity + 1);
      } else {
        // Si no es un número válido (NaN), establecer el valor inicial a 1
        itemsCarrito.text(1);
      }
      // Guardar el número de elementos en el carrito en localStorage
      localStorage.setItem('carritoCount', currentQuantity + 1);
    });
    
  });
  
  function validar() {
    var correo = document.getElementById("email").value;
    var nombre = document.getElementById("contact_name").value;
    var telefono = document.getElementById("contact_phone").value;
    var mensaje = document.getElementById("contact_message").value;
  
    var validacEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var validacCelular = /^\d{9}$/;
  
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
    console.log(mensajeMensaje);
  }
  
  function calcularSubTotal() {
    var precioProductoText =
      document.getElementById("precioProducto").textContent;
    var precioProducto = parseFloat(precioProductoText);
    var cantidadProducto = parseFloat(
      document.getElementById("cantidad_producto").value
    );
    console.log(precioProductoText);
    console.log(precioProducto);
    console.log(cantidadProducto);
  
    document.getElementById("subtotal").textContent =
      precioProducto * cantidadProducto;
  }

  fetch("https://api.thecatapi.com/v1/images/search?limit=3")
  .then(response => response.json())
  .then(data => {
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
  })


  var map = L.map('map').setView([-33.01232, -71.54920], 13);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([-33.01232, -71.54920]).addTo(map);
var popup = L.popup()
    .setLatLng([-33.01232, -71.54920])
    .setContent("PurrfectStore")
    .openOn(map);
