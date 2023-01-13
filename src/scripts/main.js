document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const alturaHero =heroSection.clientHeight;


    //captura a posição do scroll
    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if(posicaoAtual < alturaHero) {
            ocultaelementosDoHeader();
        } else {
            exibeElementosDoHeader();
        }
    })

    
    // seçao de atrações, programação das abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAsAbas();
            aba.classList.add('shows__list--active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--active');

        })
    }

    // Seção FAQ, acordion
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
}) 

//função ocultar cabeçalho
function ocultaelementosDoHeader() {    
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}
// exibe elementos do header
function exibeElementosDoHeader() {    
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--active');
    }
}

function escondeTodasAsAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id');

    for (let i = 0; i  < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--active')
    }
}