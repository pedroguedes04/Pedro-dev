//  ====== 1. TEMA CLARO / ESCURO ======

const botaotema = document.getElementById("botao-tema");
const textotema = document.getElementById("texto-tema");

botaotema.addEventListener("click", function () {
    document.body.classList.toggle("escuro");

    if (document.body.classList.contains("escuro")) {
        textotema.textContent = "tema claro";
    } else {
        textotema.textContent = "tema escuro";
    }
});

//  ====== 2. CARROSSEL DE PROJETOS ======

const carrossel = document.querySelector(".carrossel");
const botaoVoltar = document.getElementById("voltar");
const botaoAvancar = document.getElementById("avancar");

const fimDoCarrossel = function () {
    return carrossel.scrollLeft + carrossel.clientWidth >= carrossel.scrollWidth -1; 
}

botaoAvancar.addEventListener("click", function () {
    if (fimDoCarrossel()) {
        carrossel.scrollTo(0, 0);
    } else {
        carrossel.scrollBy(340, 0);
    }
});

botaoVoltar.addEventListener("click", function () {
    if (carrossel.scrollLeft <= 0) {
        carrossel.scrollTo(carrossel.scrollWidth, 0);
    } else {
        carrossel.scrollBy(-340, 0);
    }
});


// ====== 3. FORMULÁRIO DE CONTATO =======

const formulario = document.getElementById("formulario");
