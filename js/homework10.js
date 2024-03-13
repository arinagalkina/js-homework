const openModalBtn = document.querySelector('[data-action="open-modal"]');
const closeModalBtn = document.querySelector('[data-action="close-modal"]');
const backdrop = document.querySelector(".js-backdrop");

openModalBtn.addEventListener("click", function () {
  document.body.classList.add("show-modal");
});

closeModalBtn.addEventListener("click", function () {
  document.body.classList.remove("show-modal");
});

backdrop.addEventListener("click", function (event) {
  if (event.target === backdrop) {
    document.body.classList.remove("show-modal");
  }
});

const nameInput = document.getElementById("name-input");

const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", function () {
  const inputValue = nameInput.value.trim();
  if (inputValue === "") {
    nameOutput.textContent = "незнайомець";
  } else {
    nameOutput.textContent = inputValue;
  }
});
//Напиши скрипт, який би при втраті фокуса на інпут, 
//перевіряв його вміст на правильну кількість символів.
//Скільки символів має бути в інпут, вказується в його 
//атрибуті data-length.
//Якщо введена відповідна кількість, то border інпут
//стає зеленим,   якщо неправильне - червоним.
//Для додавання стилів, використовуй CSS-класи 
//valid і invalid.

const validationInput = document.getElementById('validation-input');

validationInput.addEventListener('blur', function () {
    const dataLength = parseInt(validationInput.getAttribute('data-length'));
    const inputValue = validationInput.value.trim().length;

    if (inputValue === dataLength) {
        validationInput.style.borderColor = 'green';
    } else {
        validationInput.style.borderColor = 'red';
    }
});

//Створити форму, після сабміту виводити на
// екран повідомлення 
//‘Ви зареєструвалися успішно! Дякую!’

const btnSubmit = document.querySelector('.submit');
 const modal = document.querySelector('.modal');


 const textControl = document.getElementById('font-size-control');

 const changeText = document.getElementById('text');

 textControl.addEventListener('input', function () {
   changeText.style.fontSize = textControl.value + 'px' 
 })



