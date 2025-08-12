// Esto es un arreglo y ahi se van a ir almacenando los amigos que se ingresen
let amigos = [];

// Este es una funcion que sirve para añadir amigo
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombreDeAmigo = input.value.trim();

    if (nombreDeAmigo === "") {
        alert("Por favor escribe un nombre");
        return;
    }

    amigos.push(nombreDeAmigo);
    mostrarLista();
    input.value = "";
}

// Función para mostrar la lista en el HTML
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpiar lista antes de mostrar

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}
//funcion que me ayuda a sortear los amigos registrados
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Necesito nombre de 2 amigos para hacer el SORTEO");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    // me muestra un amigo secreto
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> Tu amigo secreto es: <strong>${amigoSecreto}</strong></li>`;

    // vacia la lista ingresada de amigos
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
}
