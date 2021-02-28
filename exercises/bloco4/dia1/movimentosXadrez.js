let peça = 'cAvAlO';

switch (peça.toLowerCase()) {
  
  case 'peão' :
    console.log ('Se move apenas uma casa para frente, captura apenas na diagonal e possui possui\n movimentos especiais de poder mover-se duas casas em seu primeiro movimento, e\n capturar en passant.');
    break;

  case 'bispo' :
    console.log ('Move-se e captura peças em diagonal.\nO unico limite de casas é se houver uma peça aliada impedindo o prosseguimento.');
    break;

  case 'cavalo' :
    console.log ('Move-se duas casas em horizontal OU vertical MAIS uma casa\n para linha oposta a escolhida anteriormente.\n Pula qualquer peça no cominho e só captura onde para.');
    break;

  case 'torre' :
    console.log ('Move-se e captura peças na vertical OU horizontal.\nO unico limite de casas é se houver uma peça aliada impedindo o prosseguimento.');
    break;

  case 'rainha' :
    console.log ('Move-se e captura peças em diagonal, vertical OU horizontal.\nO unico limite de casas é se houver uma peça aliada impedindo o prosseguimento.');
    break;

  case 'rei' :
    console.log ('Move-se e captura a uma casa de distância em qualquer diração.');
    break;

  default :
    console.log ('Erro!\n Essa peça não é válida!');
};
