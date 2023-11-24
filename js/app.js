const preguntas = [
    {
        pregunta: "Elige el orden correcto en el que los miembros de BLACKPINK fueron revelados por primera vez antes de su debut a través de las redes sociales oficiales de YG.",
        opciones: ["JISOO - JENNIE - ROSÉ - LISA", "JISOO - LISA - JENNIE - ROSÉ", "JENNIE - JISOO - LISA - ROSÉ", "JENNIE - JISOO - ROSÉ - LISA", "JENNIE - LISA - JISOO - ROSÉ"],                
        respuesta: 5
    },
    /*{
        pregunta: "Anota la suma de las fechas de nacimiento de todos los miembros de BLACKPINK.",
        respuesta:757,
    },
    {
        pregunta: "Escribe el título del primer vídeo de práctica de baile subido al canal oficial de YouTube de BLACKPINK. (Basado en canciones de BLACKPINK)",
        respuesta: ["whistle", "Whistle", "WHISTLE", "휘파람"],
    },*/
    {
        pregunta: "Elige qué tipo de regalo floral recibe JENNIE de su madre cada cumpleaños.",
        opciones: ["Rosa azul", "Girasol", "Jacinto amarillo", "Rosas rosadas", "Lisianto"],
        respuesta: 1
    },
    {
        pregunta: "Aquí hay algunos álbumes de BLACKPINK. Elija la respuesta que los enumere en el orden de publicación correcto.   A.THE ALBUM   B.SQUARE UP    C.BORN PINK     D.KILL THIS LOVE",
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

            if (!isNaN(respuestaUsuario) && respuestaUsuario === pregunta.respuesta) {
                alert('¡Respuesta correcta!');
                puntos++;
            } else {
                alert('Respuesta incorrecta.');
            }

            preguntaActual++;

            if (preguntaActual < preguntas.length) {
                mostrarPregunta();
            } else {
                alert('Juego terminado. Puntuación final: ' + puntos + '/' + preguntas.length);
            }
        }
        mostrarPregunta();
/*let puntos = 0;
let q02 = prompt("Anota la suma de las fechas de nacimiento de todos los miembros de BLACKPINK. (en formato MMDD)");
if (q02 !== null) {
    if (isNaN(q02) || q02 !== "757") {
        alert("Respuesta incorrecta.");
        puntos--;
    } else {
        alert("¡Respuesta correcta!");
        puntos++;
    }
}


for (let intento = 1; intento <= 3; intento++) {
    let pregunta2 = prompt("Escribe el título del primer vídeo de práctica de baile subido al canal oficial de YouTube de BLACKPINK. (Basado en canciones de BLACKPINK)");

    if (pregunta2 !== null) {
        if (!/^[a-zA-Z\s]+$/.test(pregunta2)) {
            alert("Respuesta incorrecta.");
        } else if (["whistle", "whistle", "휘파람"].includes(pregunta2.toLowerCase())) {
            alert("¡Respuesta correcta!");
            puntos++;
            break;  
        } else {
            alert("Respuesta incorrecta.");
            puntos--;
        }
    }
}

alert(puntos + "/2 aciertos");*/