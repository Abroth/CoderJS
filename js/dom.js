fetch("http://localhost:3000/user")
    .then(res => console.log(res))

// const fs = require("fs")

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const buttonAdd = document.getElementById("button-add");

buttonAdd.addEventListener("click", addTask) //evento cuando tocamos el boton

//agregamos una tarea en la lista que ya guardamos
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something") //chequeamos que no este vacia la tarea
    }
    else{ //si esta completo, creamos un li con los datos completados, tambien creamos un span con el icono de cruz, para eliminar la tarea.
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"; //=> Cruz
        li.appendChild(span)
    }

    inputBox.value = ''; //=> resetamos el valor del input
    // saveData()
    guardarDatosEnLocalStorage()
}

listContainer.addEventListener("click", removeTask, false) //evento cuando tocamos el texto o la cruz

function removeTask(e){ //=> si tocamos el texto, nos habilita la class cheched, que habiamos armado para tachar el texto
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");

        // saveData()
        guardarDatosEnLocalStorage()
    }
    else if(e.target.tagName === "SPAN"){ //=> si tocamos la cruz, simplemente eliminamos el elemento
        e.target.parentElement.remove();

        // saveData()
        guardarDatosEnLocalStorage()
    }
}

// function saveData(){ //salvamos los datos, y lo ejecutamos cada vez que modificamos el list containter
//     localStorage.setItem("data", listContainer.innerHTML)
// }

// function showTask(){ //traemos lo guardado en el list container
//     listContainer.innerHTML = localStorage.getItem("data");
// }


//usamos el json para guardar los datos
function guardarDatosEnLocalStorage() {
    var datosJson = JSON.stringify(listContainer.innerHTML);

    // localStorage.setItem('misDatos', datosJson);
  }
  
  function cargarDatosDesdeLocalStorage() {
    var datosJson = localStorage.getItem('misDatos');
    var datos = JSON.parse(datosJson);

    listContainer.innerHTML = datos;
  }

  cargarDatosDesdeLocalStorage();

  

  