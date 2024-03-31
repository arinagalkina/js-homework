let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}


for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

const number = 7;
for (let i = 1; i <= 10; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
}

const array = [1, 2, 3, 4, 5];
let index = 0;
while (index < array.length) {
    console.log(array[index]);
    index++;
}


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 7) {
        break;
    }
    console.log(arr[i]);
}

const n = 10;
let j = 1;
while (j < n) {
    console.log(j);
    j++;
    if (j >= n) {
        break;
    }
}


let g = 1;
while (g <= 20) {
    if (g % 3 === 0) {
        g++;
        continue;
    }
    console.log(g);
    g++;
}