const select = document.getElementById("drinks");
const message = document.getElementById("message");

select.addEventListener("change", function () {
  message.textContent = "Ви обрали: " + this.value;
});

document.getElementById("checkButton").addEventListener("click", function () {
  const input = document.getElementById("dayInput").value.toLowerCase();
  const messageDay = document.getElementById("dayMessage");
  const weekdays = ["понеділок", "вівторок", "середа", "четвер", 'п"ятниця'];
  const weekends = ["субота", "неділя"];

  if (weekdays.includes(input)) {
    messageDay.textContent = "Це робочий день.";
  } else if (weekends.includes(input)) {
    messageDay.textContent = "Це вихідний день.";
  } else {
    messageDay.textContent = "Невірний день тижня.";
  }
});

document
  .getElementById("checkSeasonButton")
  .addEventListener("click", function () {
    const month = parseInt(document.getElementById("monthInput").value);
    const messageMonth = document.getElementById("seasonMessage");
    if (month >= 1 && month <= 12) {
      if (month >= 3 && month <= 5) {
        messageMonth.textContent = "Весна";
      } else if (month >= 6 && month <= 8) {
        messageMonth.textContent = "Літо";
      } else if (month >= 9 && month <= 11) {
        messageMonth.textContent = "Осінь";
      } else {
        messageMonth.textContent = "Зима";
      }
    } else {
      messageMonth.textContent = "Невірний номер місяця";
    }
  });




  document.getElementById('checkDaysButton').addEventListener('click', function() {
    const month = parseInt(document.getElementById('monthInputDay').value);
    const message4 = document.getElementById('daysMessage');
    if (month >= 1 && month <= 12) {
        const daysInMonth = new Date(2022, month, 0).getDate();
        message4.textContent = 'У цьому місяці ' + daysInMonth + ' днів';
    } else {
        message4.textContent = 'Невірний номер місяця';
    }
});

document.getElementById('checkActionBtn').addEventListener('click', function() {
    const color = document.getElementById('colorInput').value.toLowerCase();
    const message5 = document.getElementById('actionMessage');
    switch (color) {
        case 'червоний':
            message5.textContent = 'Стоп';
            break;
        case 'зелений':
            message5.textContent = 'Йти';
            break;
        case 'жовтий':
            message5.textContent = 'Чекати';
            break;
        default:
            message5.textContent = 'Невідома дія';
    }
});



document.getElementById('calculateBtn').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    const resultDiv = document.getElementById('result');
    
    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.textContent = 'Будь ласка, введіть обидва числа';
    } else {
        let result;
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 === 0) {
                    resultDiv.textContent = 'Помилка: ділення на нуль';
                    return;
                } else {
                    result = num1 / num2;
                }
                break;
            default:
                resultDiv.textContent = 'Невідома операція';
                return;
        }
        resultDiv.textContent = 'Результат: ' + result;
    }
});
