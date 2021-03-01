//Exercício 1 :
console.log ('Exercício 1:\n');

let valorN = 5;
let quadrado = '';

for (let n = 0; n <= valorN * valorN; n += 1) {
  quadrado +='*';
    if (quadrado.length === valorN) {
      console.log (quadrado);
      quadrado = '';
    }
};

//Exercício 2 :
console.log ('\nExercício 2:\n');

let triangulo = '';

for (let n = 0; n < valorN; n += 1) {
  triangulo +='*';
    console.log (triangulo);
};

//Exercício 3 :
console.log ('\nExercício 3:\n');

let asterix = '*' , obelix = ' ';
let trianguloInvertido = '', nAsteriscos = 1, nEspaços = valorN - 1;

for (let n = valorN; n > 0; n -= 1) {
  for (let indexEspaços = 0; indexEspaços < nEspaços; indexEspaços += 1) {
    trianguloInvertido += obelix;
  };
  for (let indexAsteriscos = 0; indexAsteriscos < nAsteriscos; indexAsteriscos +=1) {
    trianguloInvertido += asterix;
  };
  console.log (trianguloInvertido);
  nAsteriscos += 1;
  nEspaços -= 1;
  trianguloInvertido = ''
};

//Exercício 4
console.log ('\nExercício 4:\n');

  let trianguloCompleto = '';
  let rightSide = Math.ceil(valorN/2);
  let leftSide = Math.ceil(valorN/2);
  let centerSide = 1;

  for (let index = 0; index < valorN; index += 1) {
    for (let left = 0; left < leftSide; left += 1) {
    trianguloCompleto += ' ';
    };
    for (let center = 0; center < centerSide; center +=1) {
      trianguloCompleto += '*';
    };
    for (let right = 0; right < rightSide; right += 1) {
      trianguloCompleto += ' ';
    }
    if (valorN % 2 === 0) {
    console.log(' A base deve ser ímpar!!');
    break;
   }
     else {
      console.log(trianguloCompleto);
      rightSide, leftSide -=1;
      centerSide += 2;
      trianguloCompleto = '';
     };
    if (centerSide > valorN) {
      break;
    }
  };  