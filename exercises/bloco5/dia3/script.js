function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  

//Exercício 1: 
function createACalendarDays () {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysUl = document.querySelector('#days');
  for (let index = 0; index < dezDaysList.length; index += 1) {
    const daysList = document.createElement('li');
    daysList.setAttribute('class', 'day');
    daysList.innerText = dezDaysList[index];
    daysUl.appendChild(daysList);
    if (dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31) {
      daysList.classList.add('holiday');
    }
    if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18 || dezDaysList[index] === 25) {
        daysList.classList.add('friday');
      }
  }
}

createACalendarDays();


//Exercício 2:
function holidayButton(Feriados) {
const button = document.createElement('button');
button.setAttribute('id', 'btn-holiday');
button.innerHTML = 'Feriados'
document.querySelector('.buttons-container').appendChild(button);
}

holidayButton('Feriados')


//Exercício 3:
document.querySelector('#btn-holiday').addEventListener( 'click', function () {
  let holidays = document.querySelectorAll('.holiday');
  if  (holidays[0].getAttribute('style') === 'background-color: midnightblue;') {
    for (let index = 0; index < holidays.length; index += 1){
        holidays[index].style.backgroundColor = 'rgb(238,238,238)';
    }
  } else {
  for (let index = 0; index < holidays.length; index += 1){
  holidays[index].style.backgroundColor = 'midnightblue';
  }}
})


//Exercício 4:
function fridayButton(butonName) {
  let button = document.createElement('button');
  button.innerHTML = butonName;
  button.setAttribute('id', 'btn-friday');
  let buttonDad = document.querySelector('.buttons-container');
  buttonDad.appendChild(button);
}

fridayButton('Sexta-feira');