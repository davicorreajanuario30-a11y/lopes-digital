function mostrarMensagem() {
  alert("Olá! 👋 Bem-vindo à Lopes Digital!");
}

function enviarPedido() {
  const nome = document.getElementById("nome").value;
  const descricao = document.getElementById("descricao").value;
  const arquivo = document.getElementById("arquivo").files[0];

  if (!nome || !descricao) {
    alert("Preencha seu nome e descreva o pedido.");
    return;
  }

  let mensagem = "Pedido enviado com sucesso! 🚀\n\n";
  
  mensagem += "Cliente: " + nome + "\n";
  mensagem += "Pedido: " + descricao + "\n";

  if (arquivo) {
    mensagem += "Arquivo selecionado: " + arquivo.name;
  }

  alert(mensagem);

  document.getElementById("nome").value = "";
  document.getElementById("descricao").value = "";
  document.getElementById("arquivo").value = "";
}
