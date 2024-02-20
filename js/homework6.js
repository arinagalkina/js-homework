//Створіть змінну email з вашою електронною адресою. Напишіть скрипт, 
//який перевіряє чи містить змінна email символ @ і рахує 
//загальну кількість символів. Результат виведіть в консоль.
const email = 'arina.galkina1708@icloud.com';

console.log(email.includes( '@' ));

console.log(email.length + ' символів');

//Записати в окремих змінних кожне слово: My, name, is. 
//Поєднати всі слова в змінну fullName. До змінної fullName 
//додати ‘Viktor’. fullName вивести в консоль

const my =  'My';

const name = ' name';

const is = ' is ';

const fullName = ` ${my} ${name} ${is} Victor`;

console.log(fullName);

//Створіть змінну userName з ім’ям користувача і змінну payment
// з сумою до оплати. За допомогою шаблонного рядка виведіть на
// екран через alert повідомлення на прикладі цього: «Дякуємо,
// Олександро! До сплати 300 гривень»


const userName = prompt('Як вас звати ?', '');

const payment = prompt('сумма покупки ?', '300');

const answer = alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);







