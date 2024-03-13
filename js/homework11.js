function checkFields() {
  const field1Value = document.getElementById("field1").value.trim();
  const field2Value = document.getElementById("field2").value.trim();

  if (field1Value && field2Value) {
    alert("Обидва поля заповнені");
  } else {
    alert("Не всі поля заповнені");
  }
}

document.getElementById("checkButton").addEventListener("click", checkSum);

function checkSum() {
  const number1 = parseFloat(document.getElementById("number1").value);
  const number2 = parseFloat(document.getElementById("number2").value);
  const sum = number1 + number2;

  if (sum > 10) {
    alert("Сума більша за 10");
  } else {
    alert("Сума менша або дорівнює 10");
  }
}

document.getElementById("checkButton2").addEventListener("click", checkText);

function checkText() {
  const text = document.getElementById("textField").value.trim();

  if (text.toLowerCase().includes("javascript")) {
    alert("Текст містить слово JavaScript");
  } else {
    alert("Текст не містить слово JavaScript");
  }
}



document.getElementById("checkButton3").addEventListener("click", function() {
   const number = parseInt(document.getElementById("numberField").value);

    if (number > 10 && number < 20) {
      alert("Число входить в діапазон від 10 до 20");
    } else {
      alert("Число не входить в діапазон від 10 до 20");
    }
  });


  document.getElementById("submitButton").addEventListener("click", function() {
    const name = document.getElementById("nameField").value;
    const email = document.getElementById("emailField").value;
    const password = document.getElementById("passwordField").value;

    if (name.length >= 3 && email.includes("@") && email.includes(".") && password.length >= 6) {
    
      window.location.href = "https://www.youtube.com/";
    } else {
    
      alert("Помилка. Перевірте правильність введених даних.");
    }
  });