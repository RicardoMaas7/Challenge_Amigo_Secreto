let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombreAmigo = input.value.trim();

    if (nombreAmigo === '') {
        alert("Por favor, inserte un nombre.");
        return;
    } else if (amigos.includes(nombreAmigo)) {
        alert("Este nombre ya está agregado.");
        return;
    } else {
        amigos.push(nombreAmigo);
    }

    actualizarListaAmigos();
    input.value = "";
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    for (const nombreAmigo of amigos) {
        const li = document.createElement('li');
        li.textContent = nombreAmigo;
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length > 0) {
        const nombreAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[nombreAleatorio];

        const resultado = document.getElementById('resultado');
        resultado.innerHTML = `<li> ¡El amigo sorteado es: ${amigoSorteado}!</li>`;
        amigos = [];
        document.getElementById('listaAmigos').innerHTML = "";
    } else {
        alert("No hay amigos para sortear");
    }
}
