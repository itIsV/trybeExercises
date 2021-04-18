// const employedPerson = (nomeCompleto) => ({nomeCompleto, email:`${nomeCompleto.split(' ')[0]}_${nomeCompleto
//   .split(' ')[1]}@trybe.com`});

// const newEmployees = () => {
//   const employees = {
//       id1: employedPerson('Pedro Guerra'),
//       id2: employedPerson('Luiza Drumond'),
//       id3: employedPerson('Carla Paiva')
//     };
//   return employees;
// };

// console.log(newEmployees());

const check = (number, action) => number === action() ? console.log('Parabéns você ganhou') : console.log('Tente novamente');

const between1And5 = () => Math.ceil(Math.random() * 5);

check(2, between1And5);