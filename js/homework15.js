'use strict';

//1. Напиши скрипт, який об'єднує всі елементи массива в один рядок.
// Елементів може бути довільна кількість. Нехай елементи массива в рядку будут розділені комою.
const arrayElements = ['arina','yulia','adriana','rostyk'];
let string = '';
//👉 Спочатку через for

for(let i = 0; i < arrayElements.length; i++) {
  string += arrayElements[i];
if(i !== arrayElements.length -1) {
    string += ', '
}
}
console.log(string);
//👉 Потім через join()

console.log(arrayElements.join(', '));





//2. Працюємо з колекцією карток в trello.
// Метод splice() (можна використати інші методи)

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5'
]
console.log( 'Всі карточки виведені:',cards.join(', '));
//3
const cardToRemove = cards.splice(2,1);
console.log( 'Карточка-3 видалена:',cards.join(', '));


const cardToInsert = cards.splice(4,0,"Карточка-6")
console.log('Карточка-6 додана:',cards.join(', '));

//4 Оновити  'Карточка-4'
cards[3] = 'Оновлена карточка-4';
console.log('Карточка-4 оновлена:', cards.join(', '));





