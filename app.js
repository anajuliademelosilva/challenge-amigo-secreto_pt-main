let amigos = [];

function adicionarAmigo() {
  let nomeInput = document.getElementById("nomeInput");
  let nome = nomeInput.value.trim();

  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  amigos.push(nome);
  atualizarLista();
  nomeInput.value = "";
  
}

function atualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  amigos.forEach(nome => {
    let li = document.createElement("li");
    li.textContent = nome;
    lista.appendChild(li);
  });

}

function selecionarAmigoAleatorio() {

  if (amigos.length === 0) {
    document.getElementById("resultado").innerHTML = "A lista de amigos está vazia!";
    return;
  }

  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSelecionado = amigos[indiceAleatorio];
  document.getElementById("resultado").innerHTML = "Amigo sorteado: <strong>" + amigoSelecionado + "</strong>";

}
