 // Напишіть скрипт для створення випадкового числа 
 //з плаваючою крапкою від min до max (не враховуючи max).
 //Створіть функцію яка генерує випадкове ціле числовід min до max включно.
 //Напишіть скрипт, який просить відвідувача ввести
 // два числа, і в результаті показує їх суму.


 console.log((Math.random() * (100 - 1) / 1).toFixed(2) );
 console.log(Math.random() * (100 - 1) + 1 );




 //  Створити змінні для зберігання температури за Цельсієм та Фаренгейтом.
 // Перевести температуру з Цельсія у Фаренгейти за допомогою формули та вивести
  // результат в консоль.

  const celc =  20;

  const faranheit = (celc * 9/5 + 32);

  console.log('faranfeit = ' + faranheit + 'F' );
  



  //  Створити змінну для зберігання кількості днів 
  //у місяці. Обчислити кількість годин та хвилин у цьому
 // місяці за допомогою оператора множення та вивести результат
  // в консоль.

  const day = 31;

  const hours = (day * 24);

  const minutes = (day * 60 * 24); 

  console.log(minutes +  'min', hours +  'hours');



 //Створити змінні для зберігання рівня здоров'я та
//енергії гравця в грі. Зменшити рівень здоров'я та
// енергії гравця за допомогою операторів віднімання
//та вивести результат в консоль.



const health = 7500;

const energy = 300;

console.log((health - 3000 + 'px  of health'   ),(energy - 150  + ' px of energy') );


// Створити змінну для зберігання суми покупки #
//в магазині. Застосувати знижку в розмірі 10% до
// цієї суми за допомогою оператора множення та
// вивести результат в консоль.



const totalPrice = 3000;

const discount = 0.1;

console.log( totalPrice - ( totalPrice * discount));


// Створити змінну для зберігання
// числа з плаваючою комою. Використати 
// метод Math.floor() для округлення
 // числа до меншого та вивести результат
 // в консоль.

 const number = 15.5;

 console.log(Math.floor(number));


 //Створити змінну для зберігання рядка, який 
//містить числа з плаваючою комою. Використати
// метод parseFloat() для перетворення рядка у
// десяткове число та вивести результат в консоль.

const numberParse = '15.564643num';

console.log (parseFloat(numberParse));



// Створити змінну для зберігання рядка, який
// містить ціле число. Використати метод parseInt(
// ) для перетворення рядка у ціле число та вивести
 // результат в консоль.

 const wholeNumber = '567';

 console.log(parseInt(wholeNumber));


 //  Створити змінну для зберігання числа
 //. Використати метод Math.sqrt() для обчислення
 // квадратного кореня числа та вивести результат в консоль.


 const rootNumber = 9801;

 console.log(Math.sqrt(rootNumber));


 //  Створити змінні для зберігання цілочисельного значення та рядка з числом
 // у вигляді рядка. Використати метод parseInt() для перетворення 
 // рядка у ціле число та вивести результат
 // в консоль. Потім використати метод toString() 
 // для перетворення цілочисельного значення у рядок 
 // та вивести результат в консоль.

 const fullNumber = 12345;

 const textNumber = '54321';

 console.log(parseInt( textNumber));

 console.log(toString( fullNumber));
