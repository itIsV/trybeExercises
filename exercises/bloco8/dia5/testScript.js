// hello code

const pessoas = [
  {
    peso:60,
    altura:2.0,
    codeName:'Palito',
    }
]

const imc = ({peso}, {altura}, {nome}) => {
  const imc = (peso / (altura * altura)).toFixed(2);
  return console.log(`O IMC de ${nome} é: ${imc}`);
}

console.log(Object.entries(...pessoas));