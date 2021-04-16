// function testingScope(escopo) {
//   if (escopo === true) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = `${ifScope} ótimo, fui utilizada no escopo !'`;
//     console.log(ifScope);
//   } else {
//     let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
// }

// testingScope(true);

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// oddsAndEvens.sort((a, b) => a - b);

// console.log(oddsAndEvens);

// const amor = (n) => n === 1 ? n : n * amor(n -1);

// console.log(amor(4));

const longestWord = (phrase) => {
  array = phrase.split(' ');
  let result = '';
  let aux = '';
  for (let index = 0; index < array.length; index += 1) {
    if (array[0].length < array[index].length) {
      aux = array[0];
      array[0] = array[index];
      array[index] = aux;
    } 
    result = array[0];
  }
  return result;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));