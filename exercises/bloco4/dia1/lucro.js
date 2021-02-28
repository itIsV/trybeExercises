let valorCusto = 5, valoVenda = 15;
let valorTotalDeCusto =  ((20/100) * valorCusto) + valorCusto;

if (valoVenda < 0 || valorCusto < 0) {
  console.log ('erro');
}
 else {
     let lucro = (valoVenda - valorTotalDeCusto) * 1000;
    console.log (lucro);
 };
 
