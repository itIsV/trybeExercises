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