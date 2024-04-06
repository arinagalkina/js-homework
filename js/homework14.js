//Створити масив з трьох чисел.
//Змінити значення другого елемента масиву на 10.

"use strict";

const arrayNum = [1, 2, 3];

arrayNum[1] = 10;

console.log(arrayNum);

//Створити масив із трьох рядків. Додати
// до масиву ще одну рядків.

const arrayStr = ["hello!", "how are you?", "what is your plan for today?"];

arrayStr[3] = "what is your mood today?";
console.log(arrayStr);

//Створити скрипт який поверне
// суму всіх чисел в масиві.

const arrSum = [1, 2, 3, 4, 5];

let sum = 0;
for (let i = 0; i < arrSum.length; i++) {
  sum += arrSum[i];
}

console.log(sum);

//Створити масив з 5-ти чисел. Вивести на екран
//всі елементи масиву за допомогою циклу for.

const arrNum2 = [1, 2, 3, 4, 5];
for (let i = 0; i < arrNum2.length; i++) {
  console.log(arrNum2[i]);
  break;
}

//Створити масив із 5-ти рядків. Вивести на екран
// кожен рядокз масиву, який містить більше 5-ти символів.

const arrayString = ["hi", "yulia", "javascript", "arina"];

for (let i = 0; i < arrayString.length; i++) {
  if (arrayString[i].length >= 5) {
    console.log(arrayString[i]);
  }
}

//Створити масив з 10-ти чисел. Знайти та вивести
//на екран максимальне значення з масиву.

let arrNumbers = [1, 26, 723, 3, 52, 99, 12, 5, 16];
let maxNumber = [0];

for (let i = 0; i < arrNumbers.length; i++) {
  if (arrNumbers[i] > maxNumber) {
    maxNumber = arrNumbers[i];
  }
}
console.log("максимальним значенням масиву : " + maxNumber);

//Створити масив з 10-ти чисел. Знайти всі парні числа
// в масиві та вивести їх на екран.

let arrPairNumbers = [2, 6, 5, 54, 64, 245, 77, 88, 66, 9];


for( let i = 0; i < arrPairNumbers.length; i++) {
    if(arrPairNumbers[i] % 2 === 0) {
        console.log(arrPairNumbers[i]);
    }
}
