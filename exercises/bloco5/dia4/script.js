let bkColor = document.querySelector('#bkColor');
let paragraph = document.querySelector('#theParagraph')
bkColor.addEventListener('keypress',function (element) {
  if (element.keyCode === 13) {
      console.log(bkColor.value);
  document.body.style.backgroundColor = bkColor.value;
  }
} )