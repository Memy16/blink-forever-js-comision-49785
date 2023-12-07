const preguntas = [
    {
        pregunta: "Elige el orden correcto en el que los miembros de BLACKPINK fueron revelados por primera vez antes de su debut a través de las redes sociales oficiales de YG.",
        opciones: ["JISOO - JENNIE - ROSÉ - LISA", "JISOO - LISA - JENNIE - ROSÉ", "JENNIE - JISOO - LISA - ROSÉ", "JENNIE - JISOO - ROSÉ - LISA", "JENNIE - LISA - JISOO - ROSÉ"],                
        respuesta: 5
    },
    {
        pregunta: "¿Cual es la suma de las fechas de nacimiento de todos los miembros de BLACKPINK?",
        opciones: ["757", "752", "57"],
        respuesta:757
    },
    {
        pregunta: "Elige qué tipo de regalo floral recibe JENNIE de su madre cada cumpleaños.",
        opciones: ["Rosa azul", "Girasol", "Jacinto amarillo", "Rosas rosadas", "Lisianto"],
        respuesta: 1
    },
    {
        pregunta: "Aquí hay algunos álbumes de BLACKPINK. Elija la respuesta que los enumere en el orden de publicación correcto.\n A.THE ALBUM\n B.SQUARE UP\n C.BORN PINK\n D.KILL THIS LOVE",
        opciones: ["D - B - A - C", "B - D - A - C", "B - D - C - A", "D - B - C - A", "A - B - D - C"],
        respuesta: 5
    },
    {            
        pregunta: "Elija el significado correcto de la serie de YouTube de BLACKPINK B.P.M.",
        opciones: ["BLACKPINK MEMORIES", "BLACKPINK MOMENTS", "BLACKPINK MAKING FILM", "BORN PINK MEMORIES", "BORN PINK MOMENTS"],
        respuesta: 4
    },
        ];
        
let preguntaActual = 0;
let puntos = 0;

function mostrarPregunta() {
    const pregunta = preguntas[preguntaActual];
    document.getElementById('pregunta').innerText = pregunta.pregunta;

    const opcionesHtml = pregunta.opciones.map((opcion, index) =>
        `<input type="radio" name="opcion" value="${index + 1}" id="opcion${index + 1}">
        <label for="opcion${index + 1}">${opcion}</label><br>`
        ).join("");

            document.getElementById('opciones').innerHTML = opcionesHtml;
        }

function verificarRespuesta() {
    const pregunta = preguntas[preguntaActual];
    const respuestaUsuario = parseInt(document.querySelector('input[name="opcion"]:checked').value);

function mostrarResultado(resultado) {
    const resultadoDiv = document.createElement('div');

    resultadoDiv.style.position = 'fixed';
    resultadoDiv.style.top = '50%';
    resultadoDiv.style.left = '50%';
    resultadoDiv.style.transform = 'translate(-50%, -50%)';
    resultadoDiv.style.padding = '20px';
    resultadoDiv.style.borderRadius = '10px';
    resultadoDiv.style.background = resultado === 'correcta' ? '#cc20eb' : '#000000';
    resultadoDiv.style.color = '#fff';
    resultadoDiv.style.textAlign = 'center';
    resultadoDiv.style.zIndex = '9999';

    const imagen = document.createElement('img');
    imagen.src = resultado === 'correcta' ? 'https://i.postimg.cc/QCh391Cq/blackpink09-blink-forever.jpg' : 'https://i.postimg.cc/8cngK5T8/lalisa09-blink-forever.jpg';
    imagen.style.width = '250px'; 
    const mensaje = document.createElement('p');
    mensaje.textContent = resultado === 'correcta' ? '¡Respuesta correcta!' : 'Respuesta incorrecta.';

    resultadoDiv.appendChild(imagen);
    resultadoDiv.appendChild(mensaje);
    document.body.appendChild(resultadoDiv);
    setTimeout(() => {
        document.body.removeChild(resultadoDiv);
    }, 3000);

    if (!isNaN(respuestaUsuario) && respuestaUsuario === pregunta.respuesta) {
    mostrarResultado('correcta');
    puntos++;
    } else {
        mostrarResultado('incorrecta');
    }
        preguntaActual++;

    preguntaActual < preguntas.length ? mostrarPregunta() : alert('Juego terminado. Puntuación final: ' + puntos + '/' + preguntas.length);