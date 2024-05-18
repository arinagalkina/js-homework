const bankAccount = {
  ownerName: "John Doe",
  accountNumber: "123456789",
  balance: 1000,
  deposit: function () {
    const amount = parseFloat(prompt("Введіть суму для поповнення:"));
    if (!isNaN(amount) && amount > 0) {
      this.balance += amount;
      alert(`Баланс поповнено. Поточний баланс: ${this.balance}`);
    } else {
      alert("Введіть коректну суму для поповнення.");
    }
  },
  withdraw: function () {
    const amount = parseFloat(prompt("Введіть суму для зняття:"));
    if (!isNaN(amount) && amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      alert(`Гроші знято. Поточний баланс: ${this.balance}`);
    } else {
      alert("Введіть коректну суму для зняття.");
    }
  },
  showBalance: function () {
    alert(`Поточний баланс: ${this.balance}`);
  },
};


let actionn;
do {
  actionn = prompt( "Оберіть дію: 1 - Поповнити рахунок, 2 - Зняти гроші, 3 - Переглянути баланс, 4 - Вийти" );
  switch (actionn) {
    case "1":
      bankAccount.deposit();
      break;
    case "2":
      bankAccount.withdraw();
      break;
    case "3":
      bankAccount.showBalance();
      break;
    case "4":
      alert("Вихід");
      break;
    default:
      alert("Невірний вибір, спробуйте ще раз");
  }
} while (actionn !== "4");

const weather = {
  temperature: 0,
  humidity: 50,
  windSpeed: 10,
  isBelowZero: function () {
    return this.temperature < 0;
  },
  checkTemperature: function () {
    const tempInput = parseFloat(
      prompt("Введіть температуру в градусах Цельсія:")
    );
    if (!isNaN(tempInput)) {
      this.temperature = tempInput;
      if (this.isBelowZero()) {
        alert("Температура нижче 0 градусів Цельсія");
      } else {
        alert("Температура вище або рівна 0 градусів Цельсія");
      }
    } else {
      alert("Введіть коректне значення температури.");
    }
  },
};

weather.checkTemperature();

const user = {
  name: "John Doe",
  email: "john@example.com",
  password: "securepassword",
  login: function () {
    const enteredEmail = prompt("Введіть ваш email:");
    const enteredPassword = prompt("Введіть ваш пароль:");

    if (enteredEmail === this.email && enteredPassword === this.password) {
      alert("Вхід успішний");
    } else {
      alert("Невірний email або пароль");
    }
  },
  updateUserInfo: function () {
    this.name = prompt("Введіть ваше ім*я:");
    this.email = prompt("Введіть ваш email:");
    this.password = prompt("Введіть ваш пароль:");
  },
};

user.updateUserInfo();

user.login();





const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    rating: 8.8,
    isHighlyRated: function() {
        return this.rating > 8;
    },
    displayInfo: function() {
        let info = `Title: ${this.title}Director: ${this.director}Year: ${this.year}Rating: ${this.rating}`;
        if (this.isHighlyRated()) {
            alert(info + "Цей фільм має високий рейтинг.");
        } else {
            alert(info + "Цей фільм має середній або низький рейтинг.");
        }
    }
};


movie.displayInfo();