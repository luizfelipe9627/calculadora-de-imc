// Responsável por selecionar os botões do HTML.
let calculando = document.querySelector('#calculo');
let limpar = document.querySelector('#limpar');

// Responsável por selecionar os avisos do HTML.
let alturaAlerta = document.querySelector('#aviso1');
let pesoAlerta = document.querySelector('#aviso2');

// Responsável por puxar a DIV de resultado do HTML.
let resultadoFinal = document.querySelector('#resultado-final');

// Responsável por selecionar a DIV imc e faixa.
let imc = document.querySelector('#imc');
let faixa = document.querySelector('#faixa');

// Responsável por puxar os inputs de altura e peso do HTML.
let inputAltura = document.querySelector('#altura');
let inputPeso = document.querySelector('#peso');

// Está definindo o texto da classe IMC.
imc.textContent += 'O IMC dos seus dados é ⇢ ';
// Está criando um SPAN e armazenando na variável negritoIMC.
let negritoIMC = document.createElement('span');
// Está atribuindo ao negritoIMC um ID chamado como negritoIMC.
negritoIMC.setAttribute('id', 'negritoIMC')
// Está fazendo o IMC virar pai do negritoIMC.
imc.appendChild(negritoIMC)

// Está definindo o texto da classe Faixa.
faixa.textContent += 'Este valor considera que você está na faixa ⇢ ';
// Está criando um SPAN e armazenando na variável negritoFaixa.
let negritoFaixa = document.createElement('span');
// Está atribuindo ao negritoIMC um ID chamado como negritoIMC.
negritoFaixa.setAttribute('id', 'negritoFaixa')
// Está fazendo o Faixa virar pai do negritoFaixa.
faixa.appendChild(negritoFaixa);

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
 
    // Irá fazer o container de resultado aparecer.
    resultadoFinal.style.display = 'flex';

    // Está armazenando o resultado no SPAN negritoIMC dentro do pai IMC.
    negritoIMC.textContent = calculoFinal.toFixed(2);

    // Responsável pelas condições faixas de pesos.
    if(calculoFinal <= 10) {
        alert('Preencha os campos corretamente.');
        // Irá fazer o container de resultado desaparecer.
        resultadoFinal.style.display = 'none';
    } else if(calculoFinal <= 16 && calculoFinal <= 16.90) {
        negritoFaixa.textContent = 'Muito abaixo do peso';
    } else if(calculoFinal >= 17 &&calculoFinal <= 18.40) {
        negritoFaixa.textContent = 'Abaixo do peso';
    } else if(calculoFinal >= 18.5 && calculoFinal <= 24.90) {
        negritoFaixa.textContent = 'Peso normal';
    } else if(calculoFinal >= 25 && calculoFinal <= 29.90 ) {
        negritoFaixa.textContent = 'Acima do peso';
    } else if(calculoFinal >= 30 && calculoFinal <= 34.90) {
        negritoFaixa.textContent = 'Obesidade grau I';
    } else if(calculoFinal >= 35 && calculoFinal <= 40) {
        negritoFaixa.textContent = 'Obesidade grau II';
    } else if(calculoFinal > 40) {
        negritoFaixa.textContent = 'Obesidade grau III';
    }
});

limpar.addEventListener('click', () => {
    // Irá fazer o container de resultado desaparecer.
    resultadoFinal.style.display = 'none';
});

   

    

    

    