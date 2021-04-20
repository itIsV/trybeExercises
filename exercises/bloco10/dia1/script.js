const sum = (numberUãn, namberTu) => {
  const isTypeOfValid = typeof(numberUãn) !== 'number' || typeof(numberUãn) !== 'number'; 
  if (isTypeOfValid) throw new Error('arro erro urro');
  return numberUãn + namberTu;
}


module.exports = (sum)