//  ====== 1. TEMA CLARO / ESCURO ======

const botaotema = document.getElementById("botao-tema");
const textotema = document.getElementById("texto-tema");

botaotema.addEventListener("click", function () {
    document.body.classList.toggle("tema-escuro");

    if (document.body.classList.contains("tema-escuro")) {
        textotema.textContent = "tema claro";
    } else {
        textotema.textContent = "tema escuro";
    }
});

//  ====== 2. CARROSSEL DE PROJETOS ======

const carrossel = document.querySelector(".carrossel");
const voltar = document.getElementById("voltar");
const avancar = document.getElementById("avancar");

const fimDoCarrossel = function () {
    return carrossel.scrollLeft + carrossel.clienteWidth >= carrossel.scrollWidth -1; 
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
