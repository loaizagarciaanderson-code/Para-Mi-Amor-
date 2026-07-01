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
