// Pré Exercício 1:

let individuo = {
  name:'Marta', lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2, silver: 3
  }
};
console.log ('A jogadora ' + individuo.name + ' ' + 
individuo.lastName + ' tem ' + individuo.age + ' anos de idade.' );

individuo.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

console.log ('A jogadora ' + individuo.name
+ ' ' + individuo.lastName + ' foi eleita a melhor do mundo por 6 vezes:'
 + individuo.bestInTheWorld + '.');

 console.log ('A jogadora possui ' + individuo.medals.golden +
 ' medalhas de ouro e ' + individuo.medals.silver + ' medalhas de prata.' );


