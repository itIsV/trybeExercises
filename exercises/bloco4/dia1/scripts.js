/*const name = 'Vinicios Fraga', birthCity = 'Rio de Janeiro';

let birthYear = 1995;

birthYear = 2020;

//birthCity = 'RJ'; não é permitido e causa erro na hora de correr o codigo.

console.log(name, birthYear, birthCity);

let patientId = 50, isEnrolled = true;

const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};

const patientEmail = 'ana@gmail.com';

console.log(typeof patientId, isEnrolled, patientInfo, patientEmail);

console.log(typeof patientAge);

patientId = '50';

console.log (typeof patientId);

let base = 5, altura = 8;

let area = base * altura;

console.log(area);

let perimetro = 2 * base + 2 * altura;

console.log (perimetro);*/

/*let notaDesafio = 100;

if (notaDesafio >= 80) {
  console.log ('Parabéns você foi aprovado(a)!')
}
  else if (notaDesafio >= 60 && notaDesafio < 80) {
      console.log ('Você está na lista de espera')
  }
  else {
      console.log('Você está reprovado(a)')
  };
*/

let resultadoDesafio = 'Aprovado(a)';

switch (resultadoDesafio) {
  case 'Aprovado(a)' :
    console.log ('Parabéns você foi aprovado(a)!');
    break;
  
  case 'lista' :
    console.log ('Você está na lista de espera.');
    break;

  case 'Reprovado(a)' :
    console.log ('Você está reprovado(a).');
    break;

  default :
    console.log ('Não se aplica.');
    break;
}







