function validar(){
    
    var correo = document.getElementById("email").value;
    var nombre = document.getElementById("contact_name").value;
    var mensaje = document.getElementById("contact_message").value;


    if (correo === ""){
        document.getElementById("mensajeCorreo").textContent = "Debe ingresar un correo ";

    }else{
        document.getElementById("mensajeCorreo").textContent = "";
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