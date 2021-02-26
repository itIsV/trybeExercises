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