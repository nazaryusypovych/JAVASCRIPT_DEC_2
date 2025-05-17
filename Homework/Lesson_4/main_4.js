//#I2XsG6f
// – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами  а і б


function areaRectangle (a, b){
    return a * b;
}

console.log(areaRectangle(2, 2));

//#ETGAxbEn8l
// – створити функцію, яка обчислює та повертає площу кола з радіусом r

function areaCircle(r) {
    return 3.14 * r * r;
}

console.log(areaCircle(2));

//#Mbiz5K4yFe7
// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r

function areaCylinder(r, h) {
    return 3.14 * h * r * r;
}

console.log(areaCylinder(2, 2));

//#SIdMd0hQ
// – створити функцію, яка приймає масив та виводить кожен його елемент

let array = [1, 2, `jdjgjhej`, true];

function getArray(array) {
    for (let arrayElement of array) {
        console.log(arrayElement);
    }
}

getArray(array);

//#59g0IsA
// – створити функцію, яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент


function createTitle(text) {
    document.write(`<p>${text}</p>`);
}

createTitle(`Nazar`);
createTitle(`Vova`);


//#hOL6126
// – створити функцію, яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

function createLi(text) {

    document.write(`
<ul>
<li>${text}</li>
<li>${text}</li>
<li>${text}</li>
</ul>
`);
}

createLi(`bike`);

//#0Kxco1edSN
//
// – створити функцію, яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

function createLi2(text, numberLi) {
    document.write(`<ul>`);

    for (let i = 0; i < numberLi; i++) {
        document.write(`<li>${text}</li>`);
    }

    document.write(`</ul>`);
}

createLi2(`cat`, 5);

//#gEFoxMMO
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

function createLi3(array) {
    document.write(`<ul>`);

    for (let elementArray of array) {
        document.write(`<li>${elementArray}</li>`);
    }

    document.write(`</ul>`);
}

createLi3(array);

//#bovDJDTIjt
//
// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об’єкту окремий блок.


let users = [
    {id: 1, name: `vasya`, age: 31},
    {id: 2, name: `petya`, age: 30},
    {id: 3, name: `kolya`, age: 29},
];

function getUsers(users) {
    for (const user of users) {
        document.write(`<div>${user.id}, ${user.name} - ${user.age}</div>`);
    }
}

getUsers(users);


//#pghbnSB
// – створити функцію яка повертає найменьше число з масиву

let numbers = [1, 2, -5, 4];

function getMinNumber(numbers) {
    let min = numbers[0];
    for (let number of numbers) {
        if (number < min){
            min = number;
        }
    }
    return min;
}

console.log(getMinNumber(numbers));

//#EKRNVPM
// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

function sumNumbers(numbers) {
    let basket = 0;
    for (let number of numbers) {
        basket = basket + number;
    }
    return basket;
}

console.log(sumNumbers(numbers));

//#kpsbSQCt2Lf
// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]


let arr = [11,22,33,44];


function swap(arr,index1,index2){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;

    return arr;

}


console.log(swap(arr, 1, 0));

// #mkGDenYnNjn
//  Написати функцію обміну валюти exchange(sumUAH,currencyValues,currencyValues)
// Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400

function exchange(sumUAH,currencyValues, exchangeValues){
    for (const currencyValue of currencyValues) {
        if (exchangeValues === currencyValue.currency){

            return sumUAH / currencyValue.value;
    }

    }

}

console.log(exchange(10000, [{currency: `USD`, value: 25}, {currency: `EUR`, value: 42}], `USD`));

