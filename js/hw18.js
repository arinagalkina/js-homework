const user = {
    name: 'John',
    age: 30,
    hobby: 'tennis',
    premium: true,
  };
  
  user.mood = 'happy';
  user.hobby = 'skydiving';
  user.premium = false;
  
  const keys = Object.keys(user);
  
  for (const key of keys) {
    console.log(`${key}: ${user[key]}`);
  }


  const countProps = function(obj) {
    return Object.keys(obj).length;
  };
  
  console.log(countProps({})); // 0
  console.log(countProps({ name: 'John', age: 30 })); // 2
  console.log(countProps({ a: 1, b: 2, c: 3, d: 4 })); // 4

  const findBestEmployee = function(employees) {
    let maxTasks = 0;
    let bestEmployee;
  
    for (const [name, tasks] of Object.entries(employees)) {
      if (tasks > maxTasks) {
        maxTasks = tasks;
        bestEmployee = name;
      }
    }
  
    return bestEmployee;
  };
  
  console.log(
    findBestEmployee({ ann: 29, david: 35, helen: 1, lorence: 99 }),
  ); // lorence
  const countTotalSalary = function(employees) {
    let totalSalary = 0;
  
    for (const salary of Object.values(employees)) {
      totalSalary += salary;
    }
  
    return totalSalary;
  };
  
  console.log(
    countTotalSalary({ mango: 100, poly: 150, alfred: 80 }),
  ); // 330
  
  const getAllPropValues = function(arr, prop) {
    const values = [];
  
    for (const obj of arr) {
      if (prop in obj) {
        values.push(obj[prop]);
      }
    }
  
    return values;
  };
  
  const productss = [
    { name: 'apple', price: 10 },
    { name: 'banana', price: 15 },
    { name: 'pineapple', price: 25 },
  ];


  const calculateTotalPrice = function(allProdcuts, productName) {
    for (const product of allProdcuts) {
      if (product.name === productName) {
        return product.price * product.quantity;
      }
    }
    return 0;
  };
  
  const products = [
    { name: 'apple', price: 10, quantity: 2 },
    { name: 'banana', price: 15, quantity: 3 },
    { name: 'pineapple', price: 25, quantity: 1 },
  ];
  
  
  
  console.log(calculateTotalPrice(products, 'banana')); // 45
  console.log(countProps({})); // 0
console.log(countProps({ name: 'John', age: 30 })); // 2
console.log(countProps({ a: 1, b: 2, c: 3, d: 4 })); // 4

console.log(
  findBestEmployee({ ann: 29, david: 35, helen: 1, lorence: 99 }),
); // lorence

console.log(
  countTotalSalary({ mango: 100, poly: 150, alfred: 80 }),
); // 330

console.log(getAllPropValues(products, 'name')); // ['apple', 'banana', 'pineapple']

console.log(calculateTotalPrice(products, 'banana')); // 45
  