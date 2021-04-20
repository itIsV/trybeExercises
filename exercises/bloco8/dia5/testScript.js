// hello code

// const specialFruit = ['Banana', 'Manga', 'maça'];

// const additionalItens = ['Mel', 'Cereja picada'];

// const fruitSalad = (specialFruit, additionalItens) => [...specialFruit, ...additionalItens];

// console.log(fruitSalad(specialFruit, additionalItens));

const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

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

const source = [1,2,3,4,5,6,7,8,9,10];
const removeFirstTwo = (list) => { const [,, ...arr] = list; // O numero de vírgulas determina os elementos a serem pulados.
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);

const pessoas = [
  {
    peso:60,
    altura:2.0,
    codeName:'Palito',
    },
  {
    peso:60,
    altura:2.0,
    codeName:'Palito',
    }
]

const imc = (element) => {
  element.forEach(({peso}, {altura}, {nome}) => 
  const imc = (peso / (altura * altura)).toFixed(2);
  )
  return console.log(`O IMC de ${nome} é: ${imc}`);
}

imc(...pessoas);

