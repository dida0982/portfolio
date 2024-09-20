const imagem = document.querySelector("img");

imagem.onclick = function() {
  const mySrc = imagem.getAttribute("src");
  if (mySrc === "../imgs/eu1.png") {
    imagem.setAttribute("src", "../imgs/eu2.png");
  } else {
    imagem.setAttribute("src", "../imgs/eu1.png");
  }
};
