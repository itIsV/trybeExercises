//Exercício 1 :

let valorN = 5;
let quadrado = '';

for (let n = 0; n <= valorN * valorN; n += 1) {
  quadrado +='*';
    if (quadrado.length === valorN) {
      console.log (quadrado);
      quadrado = '';
    }
};

