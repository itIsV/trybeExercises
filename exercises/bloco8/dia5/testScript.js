// hello code

// const specialFruit = ['Banana', 'Manga', 'maça'];

// const additionalItens = ['Mel', 'Cereja picada'];

// const fruitSalad = (specialFruit, additionalItens) => [...specialFruit, ...additionalItens];

// console.log(fruitSalad(specialFruit, additionalItens));

// const product = {
//   name: 'Smart TV Crystal UHD',
//   price: '1899.05',
//   seller: 'Casas de Minas',
// };

// const printObjectValues = (object) => `${Object.values(object)}`;
// console.log(printObjectValues(product));

// const printObjectValues2Ponto0 = ({name, seller, price}) => ` Super promoção!!!\n${name} na ${seller} por apenas: ${price}!!`
// console.log(printObjectValues2Ponto0(product));

// const student = {
//   a: 'Maria',
//   b: 'Turma B',
//   c: 'Matematica',
// };

// const { a: name, b: classAssigned, c: subject } = student;

// console.log(name); // Maria
// console.log(classAssigned); // Turma B
// console.log(subject); // Matemática

// const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
// const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

// console.log(firstCountry); // Brazil
// console.log(secondCountry); // Japan
// console.log(thirdCountry); // China
// console.log(fourthCountry); // Canada

// let a = 8, b = 6;
// console.log(`agora a vale: ${a} e b vale: ${b}`);
//                   [a, b] = [b, a];
// console.log('---------------------------');
// console.log(`agora a vale: ${a} e b vale: ${b}`);

// const source = [1,2,3,4,5,6,7,8,9,10];
// const removeFirstTwo = (list) => { const [,, ...arr] = list; // O numero de vírgulas determina os elementos a serem pulados.
//   return arr;
// }
// const arr = removeFirstTwo(source);
// console.log(arr);

// const person = {
//   name: 'João',
//   lastName: 'Jr',
//   age: 34,
// };

// const { nationality = 'Brazilian' } = person;
// console.log(nationality); // Brazilian // Não consigo ver o menor sentio nisso...

// const position2d = [1.0, 2.0];
// const [x, y, z = 0] = position2d;

// console.log(x); // 1
// console.log(y); // 2
// console.log(z); // 0

// const getNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

// const person = {
//     firstName: 'João',
//     lastName: 'Jr II',
// };

// const otherPerson = {
//     firstName: 'Ivan',
//     lastName: 'Ivanovich',
//     nationality: 'Russian',
// };

// person.nationality = 'Brazilian';

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));

const multiply = (number, value = 1) => number * value;

console.log(multiply(8));
const source = [1,2,3,4,5,6,7,8,9,10];
const removeFirstTwo = (list) => { const [,, ...arr] = list; // O numero de vírgulas determina os elementos a serem pulados.
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);


