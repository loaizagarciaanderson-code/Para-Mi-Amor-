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
            titulo: "Nuestro comienzo ❤️",
            texto: "Aquí comenzó nuevamente nuestra historia. Un 2 de mayo que terminó convirtiéndose en una fecha muy especial para los dos."
        },

        2: {
            titulo: "Un momento contigo 💕",
            texto: "Cada momento contigo se convierte en un recuerdo que quiero guardar para siempre."
        },

        3: {
            titulo: "Tu sonrisa 🥰",
            texto: "Una de las cosas que más me gusta de ti es verte sonreír y saber que puedo compartir esos momentos contigo."
        },

        4: {
            titulo: "Un recuerdo más ❤️",
            texto: "Puede ser solamente una fotografía, pero para mí representa un momento que vivimos juntos."
        },

        5: {
            titulo: "Momentos juntos 💖",
            texto: "No importa lo que estemos haciendo, mientras sea contigo siempre termina siendo un momento especial."
        },

        6: {
            titulo: "Mi persona favorita 🥰",
            texto: "Gracias por todos esos momentos, por las risas, las bromas y por hacer mis días mucho mejores."
        },

        7: {
            titulo: "Otro recuerdo ❤️",
            texto: "Quiero seguir llenando nuestra historia de momentos como este y muchos más."
        },

        8: {
            titulo: "Tú y yo 💕",
            texto: "Dos personas, muchos recuerdos y una historia que todavía tiene muchísimo por escribir."
        },

        9: {
            titulo: "Para recordar siempre ❤️",
            texto: "Esta fotografía siempre tendrá un lugar especial entre todos los recuerdos que hemos creado."
        },

        10: {
            titulo: "Por muchos más ❤️",
            texto: "Espero que esta sea solamente una de las muchas fotografías que todavía nos faltan por tomar juntos."
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
