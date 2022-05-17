//funcion declarativa

function numeroAleatorio(min, max){
    return Math.floor(Math.random()*(max-min))+min;
}
console.log(numeroAleatorio(10,21));

