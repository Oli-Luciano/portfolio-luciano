// ROLAGEM SUAVE
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// TEXTO DIGITANDO
const texto = "Oi, eu sou Luciano.";
let index = 0;
function digitar() {
  const el = document.querySelector('.hero h2');
  if (index < texto.length) {
    el.textContent += texto.charAt(index);
    index++;
    setTimeout(digitar, 100);
  }
}
window.addEventListener('load', () => {
  document.querySelector('.hero h2').textContent = "";
  digitar();
});

// TEMA CLARO/ESCURO
const botaoTema = document.getElementById('toggle-tema');
const corpo = document.body;
if (localStorage.getItem("tema") === "claro") {
  corpo.classList.add("claro");
  botaoTema.textContent = "☀️";
} else {
  botaoTema.textContent = "🌙";
}
botaoTema.addEventListener('click', () => {
  corpo.classList.toggle('claro');
  const temaAtual = corpo.classList.contains('claro') ? 'claro' : 'escuro';
  localStorage.setItem('tema', temaAtual);
  botaoTema.textContent = temaAtual === 'claro' ? '☀️' : '🌙';
});

// ANIMAÇÃO DE SEÇÕES
const secoes = document.querySelectorAll("section");
const observer = new IntersectionObserver(entradas => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visivel");
    }
  });
});
secoes.forEach(secao => observer.observe(secao));

// SAUDAÇÃO
const hora = new Date().getHours();
let saudacao;
if (hora < 12) {
  saudacao = "Bom dia!\nÉ um prazer ter você aqui no meu portfólio.";
} else if (hora < 18) {
  saudacao = "Boa tarde!\nÉ um prazer ter você aqui no meu portfólio.";
} else {
  saudacao = "Boa noite!\nÉ um prazer ter você aqui no meu portfólio.";
}
alert(saudacao);

// BOTÃO TOPO
window.addEventListener("scroll", () => {
  const botao = document.getElementById("topoBtn");
  botao.style.display = window.scrollY > 300 ? "flex" : "none";
});
document.getElementById("topoBtn").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ENVIO FORMULÁRIO COM MENSAGEM
const form = document.getElementById('form-contato');
const mensagemSucesso = document.getElementById('mensagem-sucesso');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  fetch(form.action, {
    method: 'POST',
    body: formData,
  }).then(response => {
    if (response.ok) {
      form.reset();
      mensagemSucesso.style.display = 'block';
    } else {
      alert('Ocorreu um erro. Tente novamente.');
    }
  }).catch(error => {
    alert('Erro ao enviar. Verifique sua conexão.');
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-contato");
  const botao = form.querySelector("button[type='submit']");
  const mensagemSucesso = document.getElementById("mensagem-sucesso");

  form.addEventListener("submit", (e) => {
    botao.disabled = true; // desativa o botão

    // opcional: reativa o botão após um tempo se desejar
    setTimeout(() => {
      botao.disabled = false;
      botao.textContent = "Enviar Mensagem";
    }, 10000); // 10 segundos
  });
});
