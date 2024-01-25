const productos = [
    {id: 1, nombre: "Arroz", precio: 1200, stock: 40},
    {id: 2, nombre: "Fideos", precio: 1000, stock: 4},
    {id: 3, nombre: "Pan", precio: 700, stock: 80},
]

const saludoInicial = function(){
    let consultaAlCliente = alert("¡Bienviendio a la tienda online! A continuacion encontrara nuestros productos y precios.")
    mostrarProductos()
}

function mostrarProductos(){
    const productosParaMostrar = productos.map(producto => producto.nombre + " $" + producto.precio + "  ");
    let consultaPorPreciosAlCliente = confirm("Los productos que tenemos son los siguientes: " + productosParaMostrar + " ¿Desea hacer una compra?")

    if(consultaPorPreciosAlCliente == true ){
        procederCompra()
    }else{
        saludoInicial()
    }
}

function clacularTotal(cantidad, precio){
    let total = precio * cantidad;
    return total
}

function procederCompra(){
    let productoAComprar = prompt("¿Que producto desea comprar?")

    const buscarProducto = productos.find(producto => producto.nombre.toLowerCase() === productoAComprar.toLowerCase())

    if(buscarProducto){
        let cantidadDeProductos = prompt("¿Cuantos desea comprar?")

        if(cantidadDeProductos > 0 && cantidadDeProductos <= buscarProducto.stock && !isNaN(cantidadDeProductos)){
            let totalAPagar = clacularTotal(cantidadDeProductos, buscarProducto.precio)
            let confirmacionDeCompra = confirm("Excelente! contamos con stock! El total es: $" + totalAPagar + " ¿Confirmas la compra?")

            if(confirmacionDeCompra == true){
                alert("¡Tu compra se ha realizado con exito!")
                saludoInicial()
            }else{
                alert("Hemos borrado el carrito de compra. ¡Gracias por ingresar a la pagina!")
                saludoInicial()
            }
        }else{
            alert("El producto no cuenta con stock. Pruebe nuevamente escribiendo un numero.")
            procederCompra()
        }
    }else if (!buscarProducto){
        alert("El producto ingresado no existe!")
        procederCompra()
    }
}

saludoInicial()
