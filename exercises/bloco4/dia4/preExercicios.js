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

  //Exercício 6:

  function chessMove (piece) {
    let move = '';
    switch (true) {
      
      case  piece.toLowerCase() === 'rei' :
        move = 'Pode mover-se em qualquer direção, porém apenas uma casa por vez.';
        break;
          
        case  piece.toLowerCase() === 'dama' :
            move = 'Assim como o Rei, pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.';
            break;
              
            case  piece.toLowerCase() === 'torre' :
                move = 'Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.';
                break;

                case  piece.toLowerCase() === 'bispo' :
                    move = 'Move-se na diagonal, quantas casas quiser. O Bispo que iniciar a partida em uma casa branca somente poderá transitar pelas brancas, enquanto o Bispo que inicia em uma casa preta somente poderá transitar pelas casas pretas.';
                    break;

                    case  piece.toLowerCase() === 'cavalo' :
                        move = 'É a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas. O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”. Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante. Quando a casa de saída do Cavalo for escura, a casa de chegada será clara, e vice-versa.';
                        break;

                        case  piece.toLowerCase() === 'peão' :
                            move = 'Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas. O peão é a única peça que não pode retroceder, e também a única que efetua a captura com um movimento diferente do utilizado para avançar no tabuleiro. O peão pode capturar as peças que estejam uma fileira acima, mas nas colunas adjacentes a sua.';
                            break;

    }
    return move;
  };

  console.log (chessMove('Cavalo'));

  