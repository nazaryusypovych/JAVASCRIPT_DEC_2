//#I2XsG6f
// – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами  а і б

let areaRectangle = (a, b) => a * b;

console.log(areaRectangle(2,2));

//#ETGAxbEn8l
// – створити функцію, яка обчислює та повертає площу кола з радіусом r

let areaCircle = (r) => 3.14 * r**2;

console.log(areaCircle(2));

//#Mbiz5K4yFe7
// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r

let areaCylinder = (h, r) => 3.14 * r**2 * h;

console.log(areaCylinder(2, 2));

//#SIdMd0hQ
// – створити функцію, яка приймає масив та виводить кожен його елемент

let array = [1, 2, `jdjgjhej`, true];

let getArray = (array) => {
    for (let arrayElement of array) {
        console.log(arrayElement);
    }
}

getArray(array);

//#59g0IsA
// – створити функцію, яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

let createTitle = (text) => document.write(`<p>${text}</p>`);

createTitle(`Nazar`);
createTitle(`Vasya`);


//#hOL6126
// – створити функцію, яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

let createLi = (text) => {
    document.write(`
<ul>
<li>${text}</li>
<li>${text}</li>
<li>${text}</li>
</ul>
`)
};

createLi(`Good morning!`);

//#0Kxco1edSN
//
// – створити функцію, яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

 let createLis = (text, number) =>{
     document.write(`<ul>`);
     for (let i = 0; i < number; i++) {
         document.write(`<li>${text}</li>`);
     }
     document.write(`</ul>`);
 }

 createLis(`Have a good day!`, 4);


//#gEFoxMMO
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write

let createLiArray = (array) =>{
    document.write(`<ul>`);
    for (const arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`);
    }
    document.write(`</ul>`);
}

createLiArray(array);

//#bovDJDTIjt
// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об’єкту окремий блок.


let users = [
    {id: 1, name: `vasya`, age: 31},
    {id: 2, name: `petya`, age: 30},
    {id: 3, name: `kolya`, age: 29},
];

let getUsers = (users) =>{
    for (let user of users) {
        document.write(`<div>${user.id}, ${user.name} - ${user.age}</div>`);
    }
}

getUsers(users);


//#pghbnSB
// – створити функцію, яка повертає найменше число з масиву

let numbers = [1, 2, -5, 4];

let getMinNumber =(numbers) =>{
    let minNumber = numbers[0];
    for (let number of numbers) {
        if (number < minNumber){
            minNumber = number;
        }
    }
    return minNumber;
}

console.log(getMinNumber(numbers));

//#EKRNVPM
// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

let numbers2 = [1,2,10];

let sum = (arr) =>{
    let basket = 0;
    for (let arrElement of arr) {
        basket = basket + arrElement;
    }

    return basket;
}

console.log(sum(numbers2));

//#kpsbSQCt2Lf
// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let arr = [11,22,33,44];

let swap = (arr,index1,index2) =>{
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

swap(arr,0,1);
console.log(arr);

//#mkGDenYnNjn
// – Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:’USD’,value:40},{currency:’EUR’,value:42}],’USD’) // => 250

let exchange = (sumUAH,currencyValues,exchangeCurrency) =>{
    for (let currencyValue of currencyValues) {
        if (exchangeCurrency === currencyValue.currency){
            result = sumUAH / currencyValue.value
        }
    }
    return result
}

console.log(exchange(10000, [{currency: `USD`, value: 40}, {currency: `EUR`, value: 42}], `USD`));