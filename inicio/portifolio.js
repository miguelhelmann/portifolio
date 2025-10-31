const botaoModo = document.getElementById("modo");

const body = document.body;

botaoModo.addEventListener("click", () => {
  body.classList.toggle("modo-claro");

  if (body.classList.contains("modo-claro")) {
    localStorage.setItem("tema", "claro");
  } else {
    localStorage.setItem("tema", "escuro");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const temaSalvo = localStorage.getItem("tema");

  if (temaSalvo === "claro") {
    body.classList.add("modo-claro");
  }
});

const elemento = document.getElementById("texto-1");

const frases = [
  "Olá! Que bom te ver por aqui!",
  "E aí, tudo certo?",
  "Fala, tudo bem?",
  "Oi, prazer em te ver por aqui!",
  "E aí, bora conhecer meu trabalho?",
  "Seja bem-vindo(a) ao meu portifólio!",
];

let frasesDisponiveis = [...frases];
let indiceFrase = Math.floor(Math.random() * frasesDisponiveis.length);
let indiceLetra = 0;
let deletando = false;

function digitar() {
  const fraseAtual = frasesDisponiveis[indiceFrase];

  if (!deletando) {
    elemento.textContent = fraseAtual.substring(0, indiceLetra + 1);
    indiceLetra++;

    if (indiceLetra === fraseAtual.length) {
      deletando = true;
      setTimeout(digitar, 2000);
      return;
    }
  } else {
    elemento.textContent = fraseAtual.substring(0, indiceLetra - 1);
    indiceLetra--;

    if (indiceLetra === 0) {
      deletando = false;

      frasesDisponiveis.splice(indiceFrase, 1);

      if (frasesDisponiveis.length === 0) {
        frasesDisponiveis = [...frases];
      }

      indiceFrase = Math.floor(Math.random() * frasesDisponiveis.length);
    }
  }

  const velocidade = deletando ? 50 : 100;
  setTimeout(digitar, velocidade);
}

digitar();

const menuBotao = document.getElementById("menu");
const menuLista = document.querySelector("nav ul");
const menuLinks = document.querySelectorAll("nav ul li");

menuBotao.addEventListener("click", () => {
  menuLista.classList.toggle("show");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuLista.classList.remove("show");
  });
});

document.querySelectorAll('.card-proj').forEach(card => {
  const imgProj = card.querySelector('.img-proj');
  const imgTag = imgProj ? imgProj.querySelector('img') : null;

  const ativar = () => card.classList.add('ativo');
  const desativarSeSaiu = (e) => {
    const destino = e.relatedTarget;
    if (!destino || !card.contains(destino)) {
      card.classList.remove('ativo');
    }
  };

  card.addEventListener('mouseenter', ativar);
  if (imgProj) imgProj.addEventListener('mouseenter', ativar);
  if (imgTag) imgTag.addEventListener('mouseenter', ativar);

  card.addEventListener('mouseleave', desativarSeSaiu);

  if (imgProj) imgProj.addEventListener('mouseleave', desativarSeSaiu);
  if (imgTag) imgTag.addEventListener('mouseleave', desativarSeSaiu);
});

const form = document.querySelector('.formulario');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('e-mail').value;
  const mensagem = document.getElementById('mensagem').value;

  const numeroWhatsApp = "5545984060089";

  const texto = `%0A%0ANome: ${nome}%0AEmail: ${email}%0AMensagem: ${mensagem}`;

  const url = `https://wa.me/${5545984060089}?text=${texto}`;

  window.open(url, '_blank');
});