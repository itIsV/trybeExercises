// Pré Exercício 1:
/*
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


// Exercício 7
  function conversorDeNota (nota) {
if (nota >= 0 && nota <= 100) {
  switch (true) {
    case (nota >= 90) :
      nota ='Sua nota é A!';
      break;

      case (nota >= 80) :
        nota = 'Sua nota é B!';
        break;
  
        case (nota >= 70) :
            nota = 'Sua nota é C!';
            break;
      
            case (nota >= 60) :
                nota = 'Sua nota é D!';
                break;
          
                case (nota >= 50) :
                    nota = 'Sua nota é E!';
                    break;
              
                    case (nota < 50) :
                        nota = 'Sua nota é F!';
                        break;                                                  
  }
}
   else {
      nota = ' Erro!! Nota invalida.';
    };
      return nota;
}

console.log(conversorDeNota(100));


// Exercício 8:

function seraQueTemUmPar (numberOne, two, three) {
  return numberOne % 2 === 0 || two % 2 === 0 || three % 2 === 0;
};

console.log (seraQueTemUmPar(0,1,2));

// Exercício 9:

function seraQueTemUmImpar (numberOne, two, three) {
  return numberOne % 2 != 0 || two % 2 != 0 || three % 2 != 0;
};

console.log (seraQueTemUmImpar(0,2,22));

// Exercício 10:

function lucro (valorCusto, valoVenda){
let valorTotalDeCusto =  ((20/100) * valorCusto) + valorCusto;
if (valoVenda < 0 || valorCusto < 0) {
  return 'erro';
}
 else {
     let lucroReal = (valoVenda - valorTotalDeCusto) * 1000;
     return lucroReal;
 };
};

console.log(lucro(5, 20));

//Exercício 11:

function salario(salarioBruto) {
let inss = 0;

switch (true) {
  
  case salarioBruto <= 1556.94 :
  inss += (8/100) * salarioBruto;
    break;
      case salarioBruto <= 2594.92 :
      inss += (9/100) * salarioBruto;
        break;
          case salarioBruto <= 5189.82 :
          inss += (11/100) * salarioBruto;
            break;
              case salarioBruto > 5189.82 :
              inss += 570.88;
                break;
}


let salarioBase = salarioBruto - inss;


let ir = 0;

switch (true) {
  
    case salarioBase <= 1903.98 :
    console.log (salarioBase);
      break;
        case salarioBase <= 2826.65 :
        ir += (7.5/100) * salarioBase - 142.80;
          break;
            case salarioBase <= 3751.05 :
            ir += (15/100) * salarioBase - 354.80;
              break;
                case salarioBase <= 4664.68 :
                ir += (22.5/100) * salarioBase - 636.13;
                  break;
                  case salarioBase > 4664.68 :
                    ir += (27.5/100) * salarioBase - 869.36;
                      break;
  };

  let salarioLiquido = salarioBase - ir;
  return salarioLiquido;
}

  console.log (salario(3500));*/


//Parte I - Objetos e For/In:

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

console.log ('Bem-vinda, ' + info.personagem);

info.recorrente = 'Sim';

console.log (info);

for (let v in info) {
  console.log (v);
};

for (let v in info) {
  console.log (info[v]);
};


let infoTwo = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Montain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: 'Sim',
};

for (let index in infoTwo) {
  if (info[index] === 'Sim') {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[index] + ' e ' + infoTwo[index]);
    }
}


//Parte II - Funções:

function palindrono(string) {
  let auxiliar = '';
  for (let index = string.length - 1; index >= 0; index -= 1) {
    auxiliar += string[index];
  }
  return auxiliar === string;
}

console.log(palindrono('ata'));


//Exercício 2:
function indiceDoMaior(numeros) {
  let indiceMaior = 0;
  for (let indice in numeros) {
    if (numeros[indiceMaior] < numeros[indice]) {
      indiceMaior = indice;
    }
  }
  return indiceMaior;
}

console.log(indiceDoMaior([2, 3, 6, 7, 10, 1])); //Solução do gabarito.


//Exercício 3:
function lowerByIndex(array) {
  numberIndex = 0;
  for (let index in array) {
    if (array[0] > array[index]) {
      array[0] = array[index];
      numberIndex = index;
    }
  }
  return numberIndex;
}

console.log(lowerByIndex([2,4,6,7,10,0,-3]));


//Exercício 4:
function largeString(array) {
  numberIndex = '';
  for (let index in array) {
    if (array[0].length < array[index].length) {
      array[0] = array[index];
    }
  }
  return array[0];
}

console.log(largeString(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));


//Exercício 5:
function numberMoreRepeated(array) {
  let indexNumber = 0;
  let compare = 0;
  for (let index in array) {
    let repeatedX = 0; 
    for (let indexToo in array) {
      if (array[index] === array[indexToo]) {
        repeatedX += 1;
      }
    }
    if (repeatedX > compare) {
      compare = repeatedX
      indexNumber = index
    }
  }
  return array[indexNumber];
}

console.log(numberMoreRepeated([2, 3, 2, 5, 8, 2, 3]));