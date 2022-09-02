
var elSiteForm = document.querySelector('.site-form');
var elNameInput = document.querySelector('#name-input');
var elBallInput = document.querySelector('#ball-input');
var elBtn = document.querySelector('.btn-js');
var elMsBox = document.querySelector('.massege-box')
var elMassege = document.querySelector('.massege');
var elMassege2 = document.querySelector('.massege-2')
var elMassege3 = document.querySelector('.massege-3')

elSiteForm.addEventListener('submit', function (e){
  e.preventDefault()
  
  var elNameInput = document.querySelector('#name-input').value.trim().toUpperCase();
  var elBallInput = parseFloat(elSiteForm.querySelector('#ball-input').value.trim(), 10);
  var elBallNum = 106;
  var elBallNan = 57;

  if (elBallInput >= elBallNum) {
    elMsBox.style.backgroundColor = 'rgb(21, 255, 0)'
    elMassege.textContent = `Tabriklaymiz ${elNameInput}`
    elMassege2.textContent = `siz KONTRAKT asosida o'qishga kirdingiz`
    elMassege3.textContent = `Your score ${elBallInput} nice !`
  } else if (elBallInput >= elBallNan) {
    elMsBox.style.backgroundColor = '#ffe600'
    elMassege.textContent = `Tabriklaymiz ${elNameInput}`
    elMassege2.textContent = `siz super KONTRAKT asosida o'qishga kirdingiz`
    elMassege3.textContent = `Your score ( ${elBallInput} ) good !`
  } else {
    elMsBox.style.backgroundColor = 'rgb(255, 36, 36)'
    elMassege.textContent = `Tabriklamaymiz ${elNameInput}`
    elMassege2.textContent = `siz o'qishga kira olmadingiz`
    elMassege3.textContent = `Your score ( ${elBallInput} ) bad !`
  }
})





var bodyElement = document.querySelector("body")
var darkBtn = document.querySelector(".in-btn-js")

darkBtn.addEventListener("click", function () {
  bodyElement.classList.toggle("active")
})