//Requisito 1:

let numbers = [5,9,3,19,70,8,100,2,35,27];

for (let numerosPercorridos = 0; numerosPercorridos < numbers.length; numerosPercorridos +=1) {
  console.log (numbers[numerosPercorridos]);
};

//Requisito 2:

let somaDosNumeros = 0;
for (let numerosPercorridos = 0; numerosPercorridos < numbers.length; numerosPercorridos +=1) {
  somaDosNumeros += numbers[numerosPercorridos];
  if (numerosPercorridos === numbers.length -1) {
    console.log (somaDosNumeros);
  }
};

//Requisito 3:

for (let numerosPercorridos = 0; numerosPercorridos < numbers.length; numerosPercorridos +=1) {
  somaDosNumeros += numbers[numerosPercorridos];
  if (numerosPercorridos === numbers.length -1) {
    console.log (somaDosNumeros/numbers.length);
  }
};

//Requisito 4:

for (let numerosPercorridos = 0; numerosPercorridos < numbers.length; numerosPercorridos +=1) {
    somaDosNumeros += numbers[numerosPercorridos];
    if (numerosPercorridos === numbers.length -1) {
      let media = (somaDosNumeros/numbers.length);
         if (media > 20) {
           console.log ('Valor maior que 20.');
         }
          else {
            console.log ('Valor menor ou igual a 20.')
          }
    }
  };

  //Requisito 5:

  let maiorValorDoArray = 0;
  for (let numerosPercorridos = 0; numerosPercorridos < numbers.length; numerosPercorridos +=1) {
      if (numbers[numerosPercorridos] > maiorValorDoArray) {
        maiorValorDoArray = numbers[numerosPercorridos];
        }
          else if (numerosPercorridos >= numbers.length - 1) {
            console.log (maiorValorDoArray);
          };
  };

  //Requisito 6:

let numerosImpares = 0;
for (let numerosPercorridos = 0; numerosPercorridos < numbers.length; numerosPercorridos +=1) {
  if (numbers[numerosPercorridos] % 2 != 0 ) {
    numerosImpares += 1;
  };
  if (numerosImpares === 0 && numerosPercorridos === numbers.length - 1) {
    console.log ('Nenhum valor impar encontrado');
  }
    else if (numerosPercorridos === numbers.length - 1) {
      console.log (numerosImpares);
    };
};

//Requisito 7:

let menorValorDoArray = numbers[0];
  for (let numerosPercorridos = 0; numerosPercorridos < numbers.length; numerosPercorridos +=1) {
      if ( numbers[numerosPercorridos] < menorValorDoArray) {
        menorValorDoArray = numbers[numerosPercorridos];
        }
          else if (numerosPercorridos >= numbers.length - 1) {
            console.log (menorValorDoArray);
          };
  };

  //Requisito 8:

  let de1A25 = [];
  for (let seraQueE25 = 1; seraQueE25 <= 25; seraQueE25 +=1) {
    de1A25.push(seraQueE25);
     if (seraQueE25 === 25) {
        console.log (de1A25);
     };
  };

  //Requisito 9:

  for (let seraQueE25 = 0; seraQueE25 < 25; seraQueE25 +=1) {
    console.log (de1A25[seraQueE25] / 2);
  };

  //Bônus 1:

  for (let index = 1; index < numbers.length; index++) {
    for (let contador = 0; contador < index; contador++) {
      if (numbers[index] < numbers[contador]) {
        let position = numbers[index];
  
        numbers[index] = numbers[contador];
        numbers[contador] = position;
      };
    };
  };
  
  console.log (numbers);

  //Bônus 2:

  for (let index = 1; index < numbers.length; index += 1) {
    for (let contador = 0; contador < index; contador += 1) {
      if (numbers[index] > numbers[contador]) {
        let position = numbers[index];
  
        numbers[index] = numbers[contador];
        numbers[contador] = position;
      };
    };
  };
  
  console.log (numbers);

//Bônus 3:

numbers = [5,9,3,19,70,8,100,2,35,27];

for (let index = 1; index <= numbers.length; index += 1) {
  for (let contador = index - 1; contador < index; contador += 1) {
    if (index === numbers.length) {
      let position = numbers[contador] * 2;
      numbers[contador] = position;
    }
    else {
    let position = numbers[contador] * numbers[index];
      numbers[contador] = position;
    };
  };
};

console.log (numbers);
