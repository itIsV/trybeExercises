const states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', "Pernambuco", 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
const value = ['AC', 'AL', 'AP', 'AM', 'BA', "CE", 'DF', "ES", 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

function setOptions(states, value) {
 
  for (let index = 0; index < states.length; index += 1) {
    let options = document.createElement('option');
    
    if (value[index] === 'RJ') {
      options.setAttribute('selected', 'selected');
    }

    options.setAttribute('value', value[index]);
    options.innerHTML = states[index]
   
    const pai = document.querySelector('#theState');
   
    pai.appendChild(options);
  }
}

setOptions(states, value);

/* usei como referencia :https://www.youtube.com/watch?v=e57ReoUn6kM */
const data = document.querySelector('#start');

/* data.addEventListener('input', () => {

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
}) */


const theButton = document.querySelector('#submitButton');

theButton.addEventListener('click', (evt) => { evt.preventDefault();


  const divData = document.createElement('div');
  const name = document.querySelector('#theName').value;
  const email = document.querySelector('#theEmail').value;
  const cpf = document.querySelector('#theCPF').value;
  const address = document.querySelector('#theAddress').value;
  const city = document.querySelector('#theCity').value;
  const state = document.querySelector('#theState').value;
  const radio = document.querySelector('#radio');
  const curriculum = document.querySelector('#curriculum').value;
  const position = document.querySelector('#position').value;
  const roleDescription = document.querySelector('#roleDescription').value;
  const start = document.querySelector('#start').value;


  divData.classList.add('data');


  let radioCheck = radio.firstElementChild.nextSibling.nextSibling.checked;
  let radioValue = '';

  if (radioCheck === true) {
    radioValue = 'House';
  } else {
    radioValue = 'apartment';
  }


  divData.innerText = 'Curriculum:';

  let allKeys = ['name', 'email', 'cpf', 'address', 'city', 'state', 'residence', 'curriculum', 'position', 'roleDescription', 'start']
  let allData = [name, email, cpf, address, city, state, radioValue, curriculum, position, roleDescription, start];
  
  for (let index = 0; index < allData.length; index += 1) {
    divData.innerText += ` ${allKeys[index]}: ${allData[index]};
    `;
  }


  localStorage.divData = divData.innerHTML;

});


const clearMan = document.querySelector('#clear');

clearMan.addEventListener('click', () => {
  
  localStorage.clear();


  document.querySelector('#theName').value = '';
  document.querySelector('#theEmail').value = '';
  document.querySelector('#theCPF').value = '';
  document.querySelector('#theAddress').value = '';
  document.querySelector('#theCity').value = '';
  document.querySelector('#theState').value = '';


  const radio = document.querySelector('#radio').innerHTML;
  const radioClear = document.querySelector('#radio');
  radioClear.innerHTML = '';
  radioClear.innerHTML = radio;
  
  
  document.querySelector('#curriculum').value = '';
  document.querySelector('#position').value = '';
  document.querySelector('#roleDescription').value = '';
  document.querySelector('#start').value = '';



})

var picker = new Pikaday(
  {
    field: document.querySelector('.datepicker'),
    firstDay: 1,
    minDate: new Date(),
    maxDate: new Date(2021,12,31),
    yearRange: [2000,2021],
    format: 'D/M/YYYY',
    toString(date, format) {
      // you should do formatting based on the passed format,
      // but we will just return 'D/M/YYYY' for simplicity
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
      // dateString is the result of `toString` method
      const parts = dateString.split('/');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
  }
  }
);
