function validar(){
    
    var correo = document.getElementById("email").value;
    var nombre = document.getElementById("contact_name").value;
    var telefono = document.getElementById("contact_phone").value;
    var mensaje = document.getElementById("contact_message").value;


    var validacEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var validacCelular = /^\d{9}$/;


    if (correo === "" || validacEmail.test(correo)==false){
        document.getElementById("mensajeCorreo").textContent = "Debe ingresar un correo válido";

    }else{
        document.getElementById("mensajeCorreo").textContent = "";
    }

    if(telefono===""){
        document.getElementById("mensajeTelefono").textContent = "";
    }
    else if (validacCelular.test(telefono)==false) {
        document.getElementById("mensajeTelefono").textContent = "Debe ingresar un teléfono válido";
    }
    if (nombre === "" ){
        document.getElementById("mensajeNombre").textContent = "Debe ingresar un nombre ";

    }else{
        document.getElementById("mensajeNombre").textContent = "";
    }
    if (mensaje === "" ){
        document.getElementById("mensajeMensaje").textContent = "El mensaje no puede estar vacío";

    }else{
        document.getElementById("mensajeMensaje").textContent = "";
    }
    console.log(mensajeMensaje);

}

function calcularSubTotal(){
    var precioProductoText = document.getElementById("precioProducto").textContent;
    var precioProducto = parseFloat(precioProductoText);
    var cantidadProducto = parseFloat(document.getElementById("cantidad_producto").value);
    console.log(precioProductoText);
    console.log(precioProducto);
    console.log(cantidadProducto);

    document.getElementById("subtotal").textContent=precioProducto*cantidadProducto;
}
//Jquery
$(document).ready(function(){
    $("#fila-productos").hide();
    // accion para el boton que cuando se haga click este muestre la siguiente fila de productos  
    $("#btn-ver-mas").click(function(){
        $("#fila-productos").show();
        $("#btn-ver-mas").hide();
    })
   
})

