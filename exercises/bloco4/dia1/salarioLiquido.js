let salarioBruto = 3500.00;
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

  console.log (salarioLiquido);
