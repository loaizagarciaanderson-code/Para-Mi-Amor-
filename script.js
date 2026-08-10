const fechaInicio = new Date("2026-05-02T00:00:00");

function actualizarContador() {

    const ahora = new Date();

    let diferencia = ahora - fechaInicio;

    if (diferencia < 0) {
        document.getElementById("dias").innerHTML =
        "Nuestra historia comienza el 2 de mayo de 2026 ❤️";
        return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    document.getElementById("dias").innerHTML =
    dias + " días ❤️";
}

actualizarContador();

setInterval(actualizarContador,1000);

function mostrarDescripcion(foto) {

    const modal = document.getElementById("modal");
    const titulo = document.getElementById("tituloModal");
    const texto = document.getElementById("textoModal");

    const descripciones = {

        1: {
            titulo: "Nuestro primer viaje ❤️",
            texto: "Aquí fue nuestro primer viaje fue muy especial para los tres."
        },

        2: {
            titulo: "Un momento contigo 💕",
            texto: "Cada momento contigo se convierte en un recuerdo que quiero guardar para siempre en mi memoria."
        },

        3: {
            titulo: "nosotros 🥰",
            texto: "Una de las cosas mas sorprendentes que he vivido y me gusta por compartir esos momentos contigo."
        },

        4: {
            titulo: "Un recuerdo más ❤️",
            texto: "Puede ser solamente una fotografía, pero para mí representa un momento que vivimos juntos."
        },

        5: {
            titulo: "Momentos juntos 💖",
            texto: "No importa lo que estemos haciendo, mientras sea juntos siempre termina siendo un momento especial."
        },

        6: {
            titulo: "Mis personas favoritas 🥰",
            texto: "Gracias por todos esos momentos, por las risas, las bromas y por hacer mis días mucho mejores."
        },

        7: {
            titulo: "Tú ❤️",
            texto: "Quiero seguir llenando mi vida de ti, tan sola con tu voz haces que me olvide de las cosas quiero seguir haciendo historia de momentos como este y muchos más."
        },

        8: {
            titulo: "Tú ser único 💕",
            texto: "sin saber lo que pasaría te has convertido en una de las personas mas importantes en mi vida."
        },

        9: {
            titulo: "Para recordar siempre ❤️",
            texto: "Esta fotografía siempre tendrá el lugar más especial entre todos los recuerdos que hemos creado."
        },

        10: {
            titulo: "Por muchos más ❤️",
            texto: "Esta es solamente una de las muchas fotografías que le tenes que sacar a los anillos que hacen falta."
        }

    };

    titulo.textContent = descripciones[foto].titulo;
    texto.textContent = descripciones[foto].texto;

    modal.classList.add("activo");
}


function cerrarDescripcion() {

    document.getElementById("modal").classList.remove("activo");

}


/* También permite cerrar tocando fuera de la ventana */

document.getElementById("modal").addEventListener("click", function(event) {

    if (event.target === this) {
        cerrarDescripcion();
    }

});
