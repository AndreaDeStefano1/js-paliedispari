/* 
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Bonus: L’inserimento avviene tramite un campo input 
*/



let output = document.querySelector('.result');
let verficaBtn = document.getElementById('play-button');
let choice, userNum;
let sum = 0;
let random;



verficaBtn.addEventListener('click', function() {

  print(winnerDeclare(tot(parseInt(getValue('choice-check')), randomNum(1,5))))
});

// funzione per avere il valore di un input come stringa
function getValue(string){
  return document.getElementById(string).value;
}
// funzione numero random
function randomNum(min, max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
// funzione somma
function tot(num1 , num2){
  return num1 + num2 
}
// funzione dichiarazione vincitore
function winnerDeclare(num){
  console.log(num);
  if((num % 2 == 0 && getValue('word-check') == 'pari') ||(num % 2 != 0 && getValue('word-check') == 'dispari')){
    return 'Hai vinto'
  }else if((num % 2 != 0 && getValue('word-check') == 'pari') || (num % 2 == 0 && getValue('word-check') == 'dispari')){
    return 'Hai perso'
  }
}
// funzione stampa
function print(message){
  output.innerHTML = `${message}`
}