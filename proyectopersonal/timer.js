// Obtenemos el elemento del HTML donde vamos a mostrar el contador
const timeDisplay = document.getElementById("timePanel");

// Variables para llevar el control del tiempo
let seconds = 0;
let minutes = 0;
let hours = 0;

// Función que actualiza el contador cada segundo
function updateTime() {

    // Aumentamos los segundos en 1
    seconds++;

    // Si llega a 60 segundos, sumamos 1 minuto y reiniciamos segundos
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    // Si llega a 60 minutos, sumamos 1 hora y reiniciamos minutos
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    // Formato con ceros delante (ej: 09:05:03)
    let displayHours = hours < 10 ? "0" + hours : hours;
    let displayMinutes = minutes < 10 ? "0" + minutes : minutes;
    let displaySeconds = seconds < 10 ? "0" + seconds : seconds;

    // Mostramos el tiempo en el HTML
    timeDisplay.innerText = `${displayHours}:${displayMinutes}:${displaySeconds}`;
}

// Ejecutamos la función cada 1 segundo (1000 ms)
setInterval(updateTime, 1000);

// Inicializamos el contador en 00:00:00 al cargar la página
timeDisplay.innerText = "00:00:00";