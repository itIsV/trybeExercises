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

// Pré exercício 2:

let cars = ["Saab", "Volvo", "BMW"];

for (let v in cars) {
  console.log(cars[v]);
}

let car = {
    type: "Fiat",
    model: "500",
    color: "white",
  };
  
  for (let v in car) {
    console.log(v, car[v]);
  };

  let fruits = ["Apple", "Banana", "Orange"];
  for (let x in fruits) {
    console.log(x, fruits[x]);
  };
  

// Exercício 1:

function som (firistNumber, secondNumber) {
  return firistNumber + secondNumber;
};

console.log (som (0,2));


function subtraction (firistNumber, secondNumber) {
    return firistNumber - secondNumber;
  };
  
  console.log (subtraction (5,3));

  function multiplication (firistNumber, secondNumber) {
    return firistNumber * secondNumber;
  };
  
  console.log (multiplication (2,11));

function module (theNumber) {
 return (theNumber ** 2) ** (1/2)
};

console.log (module (-22));

// Exercício 2:

function whatIsTheHigherNumber (numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne;
  }
    else {
      return numberTwo;
    };
};

console.log (whatIsTheHigherNumber(2, 22));


// Exercício 3:

function whatIsTheHigherNumber (numberOne, numberTwo, numberThree) {
    if (numberOne > numberTwo && numberOne > numberThree) {
      return numberOne;
    }
      else if (numberTwo > numberOne && numberTwo > numberThree) {
        return numberTwo;
      }
        else {
          return numberThree;
        }
  };
  
  console.log (whatIsTheHigherNumber(0, 22, 02));

  // Exercício 4:

  function positiveNegativeOrZero (theNumber) {
    if (theNumber > 0) {
      return 'Positive';
    }
      else if (theNumber === 0) {
        return 'ZERO';
      }
        else {
          return 'Negative';
        };
  };

  console.log(positiveNegativeOrZero(2));

  // Exercício 5:
  
  function isTheTriangleAngle(angle1, angle2, angle3) {
    if (angle1 + angle2 + angle3 === 180) {
      return true;
    }
      else if (angle1 === 0 || angle2 === 0 || angle3 === 0) {
        return 'Erro!!!\nÂngulo inválido!';
      }
        else {
          return false;
        };
  };

  console.log (isTheTriangleAngle(2, 22, 156));
