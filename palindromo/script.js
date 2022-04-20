



let output = document.querySelector('.esito-verifica');
let verficaBtn = document.getElementById('bottone-verifica');
let word = '';
let bool;
verficaBtn.addEventListener('click',isPalindrom);
verficaBtn.addEventListener('click',printMessage);

function isPalindrom(word){
  word = document.getElementById('word-check').value
  if(word === word.split('').reverse().join('')){
    return bool = true
  }else{
    return bool = false
  } 
}

function printMessage(){
  if(bool == true){
    output.innerHTML = "La parola è palindroma"; 
    output.classList.remove('sfondo','red');
    output.classList.add('sfondo','green');
  }
  else {
    output.innerHTML = "La parola non è palindroma";
    output.classList.remove('sfondo','green');
      output.classList.add('sfondo','red');
  }
}

