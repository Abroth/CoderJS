class Combo{
    constructor(nombre, precio, ingredientes, numeroDeCombo){
        this.nombre = nombre
        this.precio = precio
        this.ingredientes = ingredientes
        this.numeroDeCombo = numeroDeCombo
    }
}

let precioBuscado = 300;
let combos = []

combos.push(new Combo("Doble Cuarto", 132, "Carne x2, Queso x2, Ketchup, Cebolla y mostaza", 1))
combos.push(new Combo("Doble Doble Cuarto", 3000, "Carne x4, Queso x2, Ketchup, Cebolla y mostaza", 2))
combos.push(new Combo("Doble Cuarto", 342, "Carne x2, Queso x2, Ketchup, Cebolla y mostaza", 3))
combos.push(new Combo("Doble Cuarto", 3453, "Carne x5, Queso x10, Tomate, Bacon y mostaza", 4))
combos.push(new Combo("Alitas", 432, "Alitas de pollo fritas", 5))
combos.push(new Combo("Doble Cuarto", 145, "Carne x2", 6))

const buscaProducto = combos.find(x => x.nombre.includes("Alitas"))

console.table(buscaProducto)
const combosCaros = combos.filter(x => x.precio > precioBuscado)

if(combosCaros.length > 0){
    
    console.table(combosCaros)
}else{
    console.warn(`No se encontraron precios mayores a ${precioBuscado}`)
}
