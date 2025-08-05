// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    } else {
        amigos.push(nombre);
        document.getElementById("amigo").value = "";
    }
}

