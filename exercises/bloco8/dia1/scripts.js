const employedPerson = (nomeCompleto) => ({nomeCompleto, email:`${nomeCompleto.split(' ')[0]}_${nomeCompleto.split(' ')[1]}@trybe.com`});

const newEmployees = () => {
  const employees = {
      id1: employedPerson('Pedro Guerra'),
      id2: employedPerson('Luiza Drumond'),
      id3: employedPerson('Carla Paiva')
    };
  return employees;
};

console.log(newEmployees());