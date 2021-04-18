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
//   console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}
//   Nº: ${order.address.number}, AP: ${order.address.apartment}.`)

// }

// customerInfo(order);

// const orderModifier = (order) => {
//   const pessoasCompradora = order.order.delivery;
//   pessoasCompradora.deliveryPerson = 'Luiz Silva';
//   const total = order.payment;
//   total.total = 50;
//   console.log(`Olá ${pessoasCompradora.deliveryPerson}, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ ${total.total}.`)

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

// const addTurn = (lesson, key, value) => lesson[key] = value;

// addTurn(lesson2, 'Turno', 'Manhã');

// console.log(lesson2);

// const keysList = (objeto) => console.table(Object.keys(objeto));

// keysList(lesson1);

// const objectLength = (object) => console.log(Object.entries(object).length);

// objectLength(lesson3);

// const valuesList = (objeto) => console.table(Object.values(objeto));

// valuesList(lesson1);

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
// console.log(allLessons);

// const totalOfStudents = (obect) => {
//   let result = 0;
//   for (index in obect) {
//     result += obect[index].numeroEstudantes;
//   }
//   console.log(result);
// }

// totalOfStudents(allLessons)

// const getValueByNumber = (object, number) => Object.values(object)[number];

// console.log(getValueByNumber(lesson1, 0));

// const verifyPair = (obect, key, value) => obect[key] === value;

// console.log(verifyPair(lesson3, 'turno', 'noite'));

// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

// const watchMathClass = (obect) => {
//   let result = 0;
//   for (index in obect) {
//     obect[index].materia === 'Matemática' ? result += obect[index].numeroEstudantes : obect;
//     }
//   return result;
// }

// console.log(watchMathClass(allLessons));

const createReport = (object, person) => {
  let aula = [];
  let students = 0;
  for (index in object) {
    object[index].professor === person ? aula.push(object[index].materia) : object; 
    }
  for (index in object) {
    object[index].professor === person ? students += object[index].numeroEstudantes : object; 
    }
  return {
    professor: person,
    aulas: aula,
    estudantes: students,
  }
}

console.log(createReport(allLessons, 'Maria Clara'));