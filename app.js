import { database } from "./firebase-config.js";

import {
  ref,
  push,
  set
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-database.js";


window.mostrarMensagem = function () {
  alert("Olá! 👋 Bem-vindo à Lopes Digital!");
};


window.enviarPedido = async function () {

  const nome =
    document.getElementById("nome").value.trim();

  const descricao =
    document.getElementById("descricao").value.trim();


  if (!nome || !descricao) {

    alert(
      "Preencha seu nome e descreva o pedido."
    );

    return;

  }


  try {

    const pedidosRef =
      ref(database, "pedidos");


    const novoPedido =
      push(pedidosRef);


    await set(novoPedido, {

      nome: nome,

      descricao: descricao,

      status: "novo",

      data: new Date().toISOString()

    });


    alert(
      "✅ Pedido enviado com sucesso!"
    );


    document.getElementById("nome").value = "";

    document.getElementById("descricao").value = "";

    document.getElementById("arquivo").value = "";


  } catch (erro) {

    console.error(erro);

    alert(
      "❌ Erro ao enviar o pedido."
    );

  }

};
