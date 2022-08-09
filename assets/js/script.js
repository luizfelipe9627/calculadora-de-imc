// Responsável por selecionar o botão de calculo.
var calculando = document.querySelector('button');

// Responsável por selecionar os avisos.
var alturaAlerta = document.querySelector('#aviso1');
var pesoAlerta = document.querySelector('#aviso2');

// Responsável pelo resultado.
var resultadoFinal = document.querySelector('#resultado-final')
var negritoIMC = document.querySelector('#negritoIMC');
var negritoFaixa = document.querySelector('#negritoFaixa');

calculando.addEventListener('click', (e) => {
    // Usado para impedir que envie o formulário.
    e.preventDefault();

    // Responsável por armazenar os valores digitados nos input.
    var altura = document.querySelector('#altura');
    var peso = document.querySelector('#peso');

    // Está fazendo a validação dos inputs.
    if(peso.value === '' || altura.value === '') {  
        if(peso.value === '') {
            pesoAlerta.textContent = 'Por favor preencha o campo de peso.';
            pesoAlerta.classList.add('aviso');
            peso.focus();
            // Responsável por fazer o aviso sumir.
            setTimeout(() => {
                pesoAlerta.textContent = '';
                pesoAlerta.classList.remove('aviso');
            }, 3000)
        } if(altura.value === '') {
            alturaAlerta.textContent = 'Por favor preencha o campo de altura.';
            alturaAlerta.classList.add('aviso');
            altura.focus()
            // Responsável por fazer o aviso sumir.
            setTimeout(() => {
                alturaAlerta.textContent = '';
                alturaAlerta.classList.remove('aviso');
            }, 3000)
        }
        // Está retornando para o começo do evento de clique novamente.
        return e;
    }
    
    // Está aplicando raiz quadrada, pegando o valor da altura e retornando a base elevada a 2.
    var valorAltura = Math.pow(altura.value, 2);

    // Está armazenando o valor do peso.
    var valorPeso =  peso.value;

    // Está dividindo o valor do peso e da altura.
    var calculoFinal = valorPeso / valorAltura;

    // Mostra o resultado final em baixo do botão de calcular.
    negritoIMC.innerHTML = calculoFinal.toFixed(2);

    // Responsável por deixar os inputs limpos.
    peso.value = '';
    altura.value = '';

    // // Irá fazer o container aparecer.
    resultadoFinal.style.display = 'flex';

    // Responsável pelas condições faixas de pesos.
    if(calculoFinal < 16) {
        negritoFaixa.innerHTML = 'Muito abaixo do peso.';
    } else if(calculoFinal < 17) {
        negritoFaixa.innerHTML = 'Abaixo do peso.';
    } else if(calculoFinal <= 18,5) {
        negritoFaixa.innerHTML = 'Peso normal.';
    } else if(calculoFinal <= 25) {
        negritoFaixa.innerHTML = 'Acima do peso.';
    } else if(calculoFinal <= 29,9) {
        negritoFaixa.innerHTML = 'Obesidade grau I.';
    } else if(calculoFinal <= 34,9) {
        negritoFaixa.innerHTML = 'Obesidade grau II.';
    } else if(calculoFinal >= 40) {
        negritoFaixa.innerHTML = 'Obesidade grau III.';
    }
});




