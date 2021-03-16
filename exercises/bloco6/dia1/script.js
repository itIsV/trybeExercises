const states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', "Pernambuco", 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
const value = ['AC', 'AL', 'AP', 'AM', 'BA', "CE", 'DF', "ES", 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

function setOptions(states, value) {
  for (let index = 0; index < states.length; index += 1) {
    let options = document.createElement('option');
    options.setAttribute('value', value[index]);
    options.innerHTML = states[index]
    const pai = document.querySelector('#theState');
    pai.appendChild(options);
  }
}

setOptions(states, value);

/* usei como referencia :https://www.youtube.com/watch?v=e57ReoUn6kM */
const data = document.querySelector('#start');
data.addEventListener('input', () => {
  let theVerificador = data.value.length;
  let counter = 0;
  
  if (theVerificador === 2 ) {
    data.value += '/';
  }
  
  if (theVerificador === 5 ) {
    data.value += '/';
  } 
  
  if (data.value.includes('//')) {     
    data.value = '';
  }
  
  let dataValue = data.value;
  let day = dataValue[0] + dataValue[1];
  let month = dataValue[3] + dataValue[4];
  let year = dataValue[6];
  
  if (day < 1 || day > 31 || month < 1 || month > 12 || year < 1) {
    data.value = '';  
    alert('data inválida');
  }
})

function xab() {
    const divData = document.createElement('div');
    const name = document.querySelector('#theName').value;
    const email = document.querySelector('#theEmail').value;
    const cpf = document.querySelector('#theCPF').value;
    const address = document.querySelector('#theAddress').value;
    const city = document.querySelector('#theCity').value;
    const state = document.querySelector('#theState').value;
    //const radio = document.querySelector('#radio').innerHTML.value;
    const curriculum = document.querySelector('#curriculum').value;
    const position = document.querySelector('#position').value;
    const roleDescription = document.querySelector('#roleDescription').value;
    const start = document.querySelector('#start').value;
    divData.classList.add('data');
    divData.innerHTML = name, email;
    return divData.value;
}

const theButton = document.querySelector('#submitButton');
theButton.addEventListener('click', xab())

let vai = xab();