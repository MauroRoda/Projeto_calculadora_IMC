// nesse trecho criamos uma variavel para cada elemento do HTML
// atribuimos a essa variavel o  identificador ID (com o mesmo nome) do documento
// link do video https://www.youtube.com/watch?v=RacwEvoTz_Y&list=PLDgemkIT111AzoS1rB61sgMJbsEA4pyD2&index=1&t=173s&ab_channel=FernandoLeonid
// como as variaveis nome, altura e peso só serão t=utilizadas dentro da funcção IMC elas foram colocadas lá dentro
const calcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');


//Aqui criamos uma função que calcula o IMC de acrodo com os dados colocados no campo altura de peso

function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== ''){
        
        const ValorIMC = (peso / (altura*altura)).toFixed(1)
        
        let classificação = "";
        if (ValorIMC < 18.5){
            classificação = 'Abaixo do peso';
        }else if (ValorIMC < 25){
            classificação = 'com o peso ideal PARABENS!!!';
        }else if (ValorIMC <30){
            classificação = 'levemente acima do peso.';
        }else if (ValorIMC < 35){
            classificação = ' com Obesidade GRAU 1.';
        }else if (ValorIMC <40){
            classificação =' com Obesidade Grau 2.';
        }else{
            classificação = 'Com obsidade Morbida CUIDADO';
        }

        resultado.textContent = 
        `${nome} seu IMC atual é ${ValorIMC}, voce está 
        ${classificação}`;

    }else{
        resultado.textContent = 'Favor preencher todos os campos'
    }
}



//Nesse trecho executamos uma função (IMC) assim que o botão calcular for clicado
// Nesse exemplo o botão Iniciar calçculo do seu IMC
calcular.addEventListener('click', imc);
