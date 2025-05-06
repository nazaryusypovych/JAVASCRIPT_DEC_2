//#dYQNrBV
// Створити змінні. Присвоїти кожному з них значення: ‘hello’,’owu’,’com’, ‘ua’, 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log

let q = `hello`;
let w = `owu`;
let e = `com`;
let r = `ua`;
let t = 1;
let y = 10;
let u = -999;
let i = 123;
let o = 3.14;
let p = 2.7;
let a = 16;
let s = true;
let d = false;


console.log(q);
console.log(w);
console.log(e);
console.log(r);
console.log(t);
console.log(y);
console.log(u);
console.log(i);
console.log(o);
console.log(p);
console.log(a);
console.log(s);
console.log(d);



//#6Qb97gsv
// – Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З’єднати їх в одну змінну person (Не об’єкт, просто за допомогою конкатенації)

let firstName = `Nazar`;
let middleName = `Volodymirovich`;
let lastName = `Yusypovych`;

let person1 = firstName + ` ` + middleName + ` ` + lastName;
console.log(person1);

let person2 = `${firstName} ${middleName} ${lastName}`;
console.log(person2);

//#4N0y5tufA
//
// – За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = ‘100’; let c = true;

let n = 100;
let b = `100`;
let c = true;

console.log(typeof n, n);
console.log(typeof b, b);
console.log(typeof c, c);


//#ruUtWDUI
// Додаткове для тих, хто цікавився prompt`oм
// – За допомогою 3-х різних prompt() отримати 3 слова які являються вашими Імʼям, По-батькові та роками. Та вивести в консоль

let firstNamePrompt = prompt(`What is yor name?`)
console.log(firstNamePrompt);

let middleNamePrompt = prompt(`What is yor middle name?`);
console.log(middleNamePrompt);

let yearPrompt = +prompt(`How old are you?`);
console.log(yearPrompt);

