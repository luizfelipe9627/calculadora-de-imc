alert('Para calcular com exito use virgula ou ponto depois do primeiro número da altura. Ex -> 1.65' )

var calculando = document.querySelector('button');

calculando.addEventListener('click', function() {
    
    // Responsável por armazenar os valores digitados nos input:
    var nome = document.querySelector('.nome').value;
    var altura = document.querySelector('.altura').value;
    var peso = document.querySelector('.peso').value;
   
    // Está aplicando raiz quadrada:
    var resultadoAltura = Math.pow(altura, 2);
    // Está armazenando o valor do peso:
    var resultadoPeso =  peso;
    // Está dividindo o valor do peso e da altura:
    var resultadoFinal = resultadoPeso / resultadoAltura;
    // Mostra o resultado final em baixo do bottom:
    var resultado = document.querySelector('.resultado-final').innerHTML =  resultadoFinal.toFixed(2);
    // Responsável pelas condições de pesos:
    if (resultadoFinal < 18.5) {
        document.querySelector('.resultado-final').innerHTML =  `${nome} seu resultado deu ${resultado} e você está abaixo do peso normal!`;
    } else if (resultadoFinal < 24.9) {
        document.querySelector('.resultado-final').innerHTML =  `${nome} seu resultado deu ${resultado} e você está no peso ideal, parabéns!`;
    } else if (resultadoFinal < 29.9) {
        document.querySelector('.resultado-final').innerHTML =  `${nome} seu resultado deu ${resultado} e você está com sobrepeso!`;
    } else if (resultadoFinal < 34.9) {
        document.querySelector('.resultado-final').innerHTML =  `${nome} seu resultado deu ${resultado} e você está com obesidade de 1º grau!`;
    } else if (resultadoFinal < 39.9) {
        document.querySelector('.resultado-final').innerHTML =  `${nome} seu resultado deu ${resultado} e você está com obesidade de 2º grau!`;
    } else if (resultadoFinal > 40) {
        document.querySelector('.resultado-final').innerHTML =  `${nome} seu resultado deu ${resultado} e você está com obesidade de 3º grau, cuidado!`;
    }
});













