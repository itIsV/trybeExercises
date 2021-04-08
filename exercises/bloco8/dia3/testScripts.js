// const objPeople = [
//   { name: 'José', age: 21 },
//   { name: 'Lucas', age: 19 },
//   { name: 'Maria', age: 16 },
//   { name: 'Gilberto', age: 18 },
//   { name: 'Vitor', age: 15 },
// ];

// const verifyAgeDrive = (arrayOfPeople) => (
//   arrayOfPeople.filter(({name}) => ( name.includes(['i'])))
// );

// console.log(verifyAgeDrive(objPeople)); // [ { name: 'Maria', age: 16 }, { name: 'Vitor', age: 15 } ]

const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map((number) => ((number > 0) ? parseInt(`-${number}`) : number)); // fiz diferente hihi

console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ] 
console.log(numbers); // [ 1, 2, 3, 4, -5 ]