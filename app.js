// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    } 
    amigos.push(nombre);
    document.getElementById("amigo").value = "";
    mostrarAmigos();
}

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    if (amigos.length === 0) {
        lista.innerHTML = "<li>No hay amigos agregados.</li>";
    } else {
        for (let i = 0; i < amigos.length; i++) {
            let li = document.createElement("li");
            li.textContent = amigos[i];
            lista.appendChild(li);
        }
    }
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");   
    if (amigos.length < 2) {
        alert("Necesitas al menos dos amigos para hacer un sorteo.");
        return;
    }
    let ganador = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.textContent = "El ganador del sorteo es: " + ganador;
}