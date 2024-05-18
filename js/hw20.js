const users = [
    { name: 'John', age: 30, eyeColor: 'blue', gender: 'male', isActive: true, email: 'john@example.com' },
    { name: 'Jane', age: 25, eyeColor: 'brown', gender: 'female', isActive: false, email: 'jane@example.com' },
];

const getUserNames = users => users.map(user => user.name);

console.log(getUserNames(users));


console.log(getUserNames(users));


const getUsersByEyeColor = (users, eyeColor) =>
  users.filter(user => user.eyeColor === eyeColor);

console.log(getUsersByEyeColor(users, 'blue'));


const getUsersByGender = (users, gender) =>
  users.filter(user => user.gender === gender).map(user => user.name);

console.log(getUsersByGender(users, 'male'));


const getInactiveUsers = users => users.filter(user => !user.isActive);

console.log(getInactiveUsers(users));


const getUserByEmail = (users, email) =>
  users.find(user => user.email === email);

console.log(getUserByEmail(users, 'user@example.com'));


const getUsersByAgeRange = (users, minAge, maxAge) =>
  users.filter(user => user.age >= minAge && user.age <= maxAge);

console.log(getUsersByAgeRange(users, 20, 30));



