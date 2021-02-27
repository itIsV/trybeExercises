//Exercício 1 :

let valorN = 10;
let quadrado = '';

for (let n = 0; n <= valorN * valorN; n += 1) {
  quadrado +='*';
    if (quadrado.length === valorN) {
      console.log (quadrado);
      quadrado = '';
    }
};

//Exercício 2 :

let triangulo = '';

for (let n = 0; n <= valorN; n += 1) {
  triangulo +='*';
    console.log (triangulo);
};

//Exercício 3 :

let asterix = '*' , obelix = ' ';
let trianguloInvertido = '', nAsteriscos = 1, nEspaços = valorN - 1;

for (let n = valorN; n > 0; n -= 1) {
  for (indexEspaços = 0; indexEspaços < nEspaços; indexEspaços += 1) {
    trianguloInvertido += obelix;
  };
  for (indexAsteriscos = 0; indexAsteriscos < nAsteriscos; indexAsteriscos +=1) {
    trianguloInvertido += asterix;
  };
  console.log (trianguloInvertido);
  nAsteriscos += 1;
  nEspaços -= 1;
  trianguloInvertido = ''
}
