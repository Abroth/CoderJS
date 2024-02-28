// Selecciona el elemento donde muestro el horario
var horarioElement = document.querySelector(".time");

// Función para actualizar el horario
function actualizarHorario() {
    // Usa moment.js para obtener la hora actual
    var horaActual = moment().format('HH:mm');

    // Actualiza el contenido del elemento con la hora actual
    horarioElement.textContent = horaActual;
}

// Actualiza el horario cada segundo (1000 milisegundos)
setInterval(actualizarHorario, 1000);

// Llama a la función una vez para mostrar el horario inicial
actualizarHorario();
