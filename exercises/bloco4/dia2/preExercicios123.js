//Obtenha o valor 'Serviços' do array menu:

let menu = ['Home','Serviços','Portigólio','Links'], menuServices = menu[1];

console.log (menuServices);

//Procure o índice do valor 'Portifólio' do array menu:

menu = ['Home', 'Serviços', 'Portifólio', 'Links'];
let indexOfPortifolio = menu.indexOf('Portifólio');

console.log(indexOfPortifolio);

//Adicione o valor 'Contato' no final do array menu:

menu.push('Contato');

console.log (menu);

//Utilize o for para imprimir os elementos da lista groceryList com o console.log()

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let indice = 0; indice < groceryList.length; indice += 1) {
  console.log (groceryList[indice]);
};

