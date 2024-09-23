const imagem = document.querySelector("img");

imagem.onclick = function() {
  const mySrc = imagem.getAttribute("src");
  if (mySrc === "../imgs/eu1.png") {
    imagem.setAttribute("src", "../imgs/eu2.png");
  } else {
    imagem.setAttribute("src", "../imgs/eu1.png");
  }
};


let myButton = document.querySelector("button");
let myh3 = document.querySelector("h3");

function definirNome() {
  const Nome = prompt("Por favor, digite o seu nome");
  localStorage.setItem("name", Nome);
  myh3.textContent = `Obrigado pela visita, ${Nome}.`;
}

if (!localStorage.getItem("name")) {
  definirNome();
} else {
  const storedName = localStorage.getItem("name");
  myh3.textContent = `Clique no botão abaixo, ${storedName}.`;
}

myButton.onclick = () => {
  definirNome();
};
