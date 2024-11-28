document.addEventListener('DOMContentLoaded', function(){ //Aguarda o DOM ser carregado para executar o cógido
    const buttons = document.querySelectorAll('[data-tab-button]'); //Seleciona todos os botões das abas
    const questions = document.querySelectorAll('[data-faq-question]'); //Seleciona todas as perguntas do FAQ

    const heroSection = document.querySelector('.hero'); //Selciona a seção principal da página, identificada pela classe .hero
    const alturaHero =heroSection.clientHeight; //Calcula a altura da seção principal para ser usada em funcionalidades relacionadas ao scroll

    ocultaElementosDoHeader();                            //Adicona um evento de scroll à janela. Toda vez que o usuário rolar a página, verifica:
    window.addEventListener('scroll', function(){         //Se o scroll atual ultrapassou a altura da seção principal
        const posicaoAtual = window.scrollY;              // Caso ultrapasse, o header é ocultado com a função ocultaElementoDoHEader
        if (posicaoAtual > alturaHero){                   //Caso contrário, o header é exibido com exibeElementosDoHeader
        } else{
            exibeElementosDoHeader();
        }
    })

    //Seção de atrações, programação das abas
    for (let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active')


        })
    }

    //Seção FAQ, accordion
    for (let i = 0; i < questions.length; i++){                           //Percorre todas as perguntas selecionadas em questions
        questions[i].addEventListener('click', abreOuFechaResposta)       // Adiciona um evento de clique em cada uma, chamando a função abreOuFechaResposta
    }
})

function ocultaElementosDoHeader(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibeElementosDoHeader(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function abreOuFechaResposta(event){                      //Identifica o elemento pai da pergunta clicada
    const classe = 'faq__questions__item--is-open';
    const elementoPai = event.target.parentNode;

    elementoPai.classList.toggle(classe);

}

function removeBotaoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    
    for (let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function escondeTodasAbas(){
    const tabsContainer = document.querySelectorAll('[data-tab-id');

    for (let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}