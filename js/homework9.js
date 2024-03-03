//Напишіть скрипт зміни кольору кнопки при
// натискані на неї.

const btnChange = document.querySelector(".btn__change");

btnChange.addEventListener("click", () => {
  btnChange.style.backgroundColor = "#de7171";
 
});

// const removeChange = document.querySelector(".remove__chage");

// removeChange.removeEventListener("click", () => {
//   btnChange.removeEventListener("click", handleClick);
// });

//Напиши скрипт реалізації додавання класу до заголовка
//при кліку на кнопку ‘Додати стилі’.

const heading = document.querySelector(".title");

const addStyleBtn = document.querySelector(".add__styles");

addStyleBtn.addEventListener("click", () => {
  heading.classList.add("italic");
  heading.style.color = "green";
});

//Написати програму яка буде виводити данні введені
//в інпут в інтерфейс сторінки.


const inputData = document.querySelector(".input");

const submitBtn = document.querySelector(".send");

submitBtn.addEventListener( "click", () => {
    const inputValue = inputData.value;

    alert("Ви ввели : " + inputValue );

    inputData.value = '';
});