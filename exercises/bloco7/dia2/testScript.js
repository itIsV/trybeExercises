// const tana = {falaew:'aew'};
// const test = (object, key, value) =>{
//   object[key] = value;
//   return object;
// }
// test(tana, 'que', 'foi?')
// console.log(tana);

// const student = {
//   HTML: 'Exelente!',
//   CSS: 'Exelente!',
//   JavaScript: 'A Melhor!',
//   SoftSkills: 'De primeira qualidade.'
// }

// const exemplo = (object) => Object.entries(object);
// console.log(exemplo(student));

// const order = {
//   name: 'Rafael Andrade',
//   phoneNumber: '11-98763-1416',
//   address: {
//     street: 'Rua das Flores',
//     number: '389',
//     apartment: '701',
//   },
//   order: {
//     pizza: {
//       margherita: {
//         amount: 1,
//         price: 25,
//       },
//       pepperoni: {
//         amount: 1,
//         price: 20,
//       }
//     },
//     drinks: {
//       coke: {
//         type: 'Coca-Cola Zero',
//         price: 10,
//         amount: 1,
//       }
//     },
//     delivery: {
//       deliveryPerson: 'Ana Silveira',
//       price: 5,
//     }
//   },
//   payment: {
//     total: 60,
//   },
// };

// const customerInfo = (order) => {
//   // // Adicione abaixo as informações necessárias.Complete a função customerInfo() 
//   // para que seu retorno seja similar a 
//   // "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
// console.log(`Olá ${order.order.delivery.deliveryPerson},
// entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}.`)

// }

// customerInfo(order);

// console.log(`

// `);

// const orderModifier = (order) => {
//   // Adicione abaixo as informações necessárias.
//   // Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva,         Modifique o nome da pessoa compradora.
//   // o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00.                   "Modifique o valor total da compra para R$ 50,00.
//   order.name = 'Luiz Silva';
//   const newPerson = order.name;
//   order.payment.total = 50;
//   const completeValue = order.payment.total;
//   console.log(`Olá ${newPerson}, 
//   o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero e R$ ${completeValue},00.`);
// }

// orderModifier(order);

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// const addShift = (object,key,value) => object[key] = value;  

// addShift(lesson2,'turno','manhã');

// console.log(lesson2);

// const keyList = (object) => Object.keys(object);

// console.log(keyList(lesson1));

// const objectLength = (object) => Object.entries(object).length;

// console.log(objectLength(lesson3));

// const objectValues = (object) => Object.values(object);

// console.log(objectValues(lesson1));

const allLessons = Object.assign({}, lesson1 );
console.log(allLessons);