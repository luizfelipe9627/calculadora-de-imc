// Responsável por selecionar o botão de calculo do HTML.
let calculando = document.querySelector('#calculo');

// Responsável por selecionar o container de mostrar exemplo.
let botaoInstrucoes = document.querySelector('#section-button');

// Responsável por selecionar os avisos do HTML.

let alturaAlerta = document.querySelector('#aviso1');
let pesoAlerta = document.querySelector('#aviso2');

// Responsável por puxar a parte de resultado do HTML.
let resultadoFinal = document.querySelector('#resultado-final');
let negritoIMC = document.querySelector('#negritoIMC');
let negritoFaixa = document.querySelector('#negritoFaixa');

// Responsável por puxar os inputs de altura e peso do HTML.
let inputAltura = document.querySelector('#altura');
let inputPeso = document.querySelector('#peso');

// Irá mostrar um exemplo de como funciona a calculadora de IMC.
botaoInstrucoes.addEventListener('click', () => {
    alert('Exemplo:\n\nAltura ⇢ 1.60 ou 1,60\nPeso ⇢ 65.50 ou 65,50\nResultado IMC ⇢ 25.59\n\nObs.: Para ter sucesso no cálculo, você deve colocar sua altura(cm) e seu peso(kg) com os devidos caracteres: ponto final(".") ou virgula(",").');
});

calculando.addEventListener('click', (e) => {
    // Usado para impedir que envie o formulário.
    e.preventDefault();

    // Responsável por armazenar os valores digitados nos input.
    let altura = document.querySelector('#altura');
    let peso = document.querySelector('#peso');

    // Está fazendo a validação dos inputs, verificando se eles estão vazios.
    if(peso.value === '' || altura.value === '') {  
        if(peso.value === '') {
            // Está adicionando um texto dentro do elemento.
            pesoAlerta.textContent = 'Por favor preencha o campo de peso.';
            // Está adicionando uma nova classe no elemento.
            pesoAlerta.classList.add('aviso');
            // Usado para fazer focar o input apos exibir o aviso.
            peso.focus();
            // Responsável por fazer o aviso sumir.
            setTimeout(() => {
                // Está adicionando um texto vazio dentro do elemento.
                pesoAlerta.textContent = '';
                // Está removendo uma nova classe no elemento.
                pesoAlerta.classList.remove('aviso');
            }, 3000)
        } if(altura.value === '') {
            // Está adicionando um texto dentro do elemento.
            alturaAlerta.textContent = 'Por favor preencha o campo de altura.';
            // Está adicionando uma classe do elemento.
            alturaAlerta.classList.add('aviso');
            // Usado para fazer focar o input apos exibir o aviso.
            altura.focus()
            // Responsável por fazer o aviso sumir.
            setTimeout(() => {
                // Está adicionando um texto vazio dentro do elemento.
                alturaAlerta.textContent = '';
                // Está removendo uma classe do elemento.
                alturaAlerta.classList.remove('aviso');
            }, 3000)
        }
        // Está retornando para o começo do evento de clique novamente.
        return e;
    }

    // Está aplicando raiz quadrada, pegando o valor da altura e retornando a base elevada a 2.
    let valorAltura = Math.pow(altura.value, 2);
    // Está armazenando o valor do peso.
    let valorPeso =  peso.value;
    // Está dividindo o valor do peso e da altura.
    let calculoFinal = valorPeso / valorAltura;
    // Mostra o resultado final em baixo do botão de calcular.
    negritoIMC.innerHTML = calculoFinal.toFixed(2);

    // Irá fazer o container de exemplo sumir.
    botaoInstrucoes.style.display = 'none';
    // Irá fazer o container de resultado aparecer.
    resultadoFinal.style.display = 'flex';

    // Responsável pelas condições faixas de pesos.
    if(calculoFinal <= 16 && calculoFinal <= 16.90) {
        negritoFaixa.innerHTML = 'Muito abaixo do peso';
    } else if(calculoFinal >= 17 &&calculoFinal <= 18.40) {
        negritoFaixa.innerHTML = 'Abaixo do peso';
    } else if(calculoFinal >= 18.5 && calculoFinal <= 24.90) {
        negritoFaixa.innerHTML = 'Peso normal';
    } else if(calculoFinal >= 25 && calculoFinal <= 29.90 ) {
        negritoFaixa.innerHTML = 'Acima do peso';
    } else if(calculoFinal >= 30 && calculoFinal <= 34.90) {
        negritoFaixa.innerHTML = 'Obesidade grau I';
    } else if(calculoFinal >= 35 && calculoFinal <= 40) {
        negritoFaixa.innerHTML = 'Obesidade grau II';
    } else if(calculoFinal > 40) {
        negritoFaixa.innerHTML = 'Obesidade grau III';
    }
});