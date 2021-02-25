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