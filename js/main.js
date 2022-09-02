
var elSiteForm = document.querySelector('.site-form');
var elNameInput = document.querySelector('#name-input')
var elBallInput = document.querySelector('#ball-input')
var elBtnjs = document.querySelector('.btn-js')
var elMassege = document.querySelector('.massege');
var ball = 106;

elSiteForm.addEventListener('submit', function (evt){
  evt.preventDefault()

  var elNameInput = elSiteForm.querySelector('#name-input').Value.trim();
  var elBallInput =parseFloat(elSiteForm.querySelector('#ball-input').value.trim(), 10);

  if (elBallInput >= ball) {
    elMassege.textContent = `Oq yo'l, ${elNameInput}`
  } else {

  }
});











var bodyElement = document.querySelector("body")
var darkBtn = document.querySelector(".in-btn-js")

darkBtn.addEventListener("click", function () {
  bodyElement.classList.toggle("active")
})