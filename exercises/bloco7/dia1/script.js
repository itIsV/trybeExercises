const butaum = document.getElementById('buddie'); //Eu sei que está escrito errado '--
console.log(butaum);
let contador = 0;

const nClicks = document.createElement('h2');
const header = document.querySelector('.container');
header.appendChild(nClicks);

butaum.addEventListener('click', () => nClicks.innerHTML = contador += 1)