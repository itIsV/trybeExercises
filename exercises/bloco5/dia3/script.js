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
document.querySelector('#btn-holiday').addEventListener( 'click', function() {
  let holidays = document.querySelectorAll('.holiday');
  if  (holidays[0].style.backgroundColor === 'lawngreen') {
    for (let index = 0; index < holidays.length; index += 1){
        holidays[index].style.backgroundColor = 'rgb(238,238,238)';
    }
  } else {
  for (let index = 0; index < holidays.length; index += 1){
  holidays[index].style.backgroundColor = 'LawnGreen';
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


//Exercício 5:
let fridayNumbers = [];
document.querySelector('#btn-friday').addEventListener('click', function() {
  let fridays = document.querySelectorAll('.friday');
  if (fridays[0].innerHTML === 'Xabalabalau!!') {
    for (let index = 0; index < fridays.length; index += 1) {
      fridays[index].innerHTML = fridayNumbers[index];
    }
  } else{ 
      for (let index = 0; index < fridays.length; index += 1) {
        fridayNumbers.push(fridays[index].innerHTML)
        fridays[index].innerHTML = 'Xabalabalau!!';
      }
    }
})


//Exercício 6
document.querySelector('#days').addEventListener('mouseover', function(element) {
  let selected = element.target;
  selected.style.cssText += 'font-size: 260%';
});

document.querySelector('#days').addEventListener('mouseout', function(element) {
    let selected = element.target;
    selected.style.removeProperty('font-size');
  });


//Exercício 7:
function task(element) {
  let span = document.createElement('span');
  span.innerHTML = element;
  document.querySelector('.my-tasks').appendChild(span);
}

task('Focar na Trybe');


//Exercício 8:
function subtitleNeverDie(element) {
  let taskColor = document.createElement('div');
  taskColor.setAttribute('class', 'task');
  taskColor.style.backgroundColor = element;
  document.querySelector('.my-tasks').appendChild(taskColor);
}

subtitleNeverDie('cyan');


//Exercício 9
document.querySelector('.task').addEventListener('click', function() {
  let taskColor = document.querySelector('.task');
  if (taskColor.getAttribute('class') === 'task') {
    taskColor.classList.add('selected');
  } else {
    taskColor.classList.remove('selected');
  }
})


//Exercício 10:
let daysToFor = document.querySelectorAll('.day');
for (let index = 0; index < daysToFor.length; index += 1) {
  daysToFor[index].addEventListener('click', function() {
    if (daysToFor[index].style.color === 'cyan') {
      daysToFor[index].style.removeProperty('color');
    } else {
      daysToFor[index].style.cssText += 'color: ' + document.querySelector('.selected').style.backgroundColor;
      }
  })
}
