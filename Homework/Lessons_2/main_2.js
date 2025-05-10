//#67kfznmiMl
// – Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль


let any = [1, 2, 3, 4, 5, `asd`, `rty`, `kjl`, true, false];

console.log(any[0]);
console.log(any[1]);
console.log(any[2]);
console.log(any[3]);
console.log(any[4]);
console.log(any[5]);
console.log(any[6]);
console.log(any[7]);
console.log(any[8]);
console.log(any[9]);

//#LARqoUj5I
// – Створити 3 об’єкти які описують книги. Поля об’єкту : title ,pageCount, genre.

let book1 = {
    title: `Чума`,
    pageCount: 327,
    genre: `роман`
}

let book2 = {
    title: `Злочин і кара`,
    pageCount: 429,
    genre: `роман`
}

let book3 = {
    title: `Тарас Бульба`,
    pageCount: 259,
    genre: `повість`
}

console.log(book1);
console.log(book2);
console.log(book3);

//#sA3Gg1sCp
// – Створити 3 об’єкти, які описують книги. Поля об’єкту : title ,pageCount, genre, authors.
// Поле “автори” – являється  масивом. Кожен автор має поля name та age.

let book11 = {
    title: `Чума`,
    pageCount: 327,
    genre: `роман`,
    authors: {
        name: `Альбер Камю`,
        age: 45
    }
}

let book22 = {
    title: `Злочин і кара`,
    pageCount: 429,
    genre: `роман`,
    authors: {
        name: `Федір Достоєвський`,
        age: 69
    }
}

let book33 = {
    title: `Тарас Бульба`,
    pageCount: 259,
    genre: `повість`,
    authors: {
        name: `Микла Гоголь`,
        age: 48
    }
}

console.log(book11);
console.log(book22);
console.log(book33);

//#jCHFnEbdmFd
// – Створити масив з 10 об’єктами, які описують сутніть “користувач”.
// Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name: `nazar`, username: 'nazar96', password: 4853},
    {name: `oleg`, username: 'oleg78', password: 5423},
    {name: `olga`, username: 'olga71', password: 2145},
    {name: `tom`, username: 'tom74', password: 4178},
    {name: `lion`, username: 'lion69', password: 2169},
    {name: `alan`, username: 'alan23', password: 4178},
    {name: `joy`, username: 'joy85', password: 1287},
    {name: `devid`, username: 'devid65', password: 4523},
    {name: `amanda`, username: 'amanda96', password: 5963},
    {name: `ira`, username: 'ira56', password: 1423}

]

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);


//#coYydZuaeEB
//
// – описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив – вам потрібно подумати. Нормальних варіантів опису – 2.
// Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу


let week = [
    {monday: [6, 15, 9]},
    {tuesday: [5, 17, 10]},
    {wednesday: [4, 10, 9]},
    {thursday: [2, 10, 4]},
    {friday: [4, 17, 8]},
    {saturday: [7, 21, 10]},
    {sunday: [8, 19, 9]}
];


console.log(week[0]);


//#bAUsaq6LI
// – Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть ‘Вірно’, інакше виведіть ‘Невірно’.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3


let x = 1;

if(x!==0){
    console.log(`Вірно`);
} else {
    console.log(`Невірно`);
}

//#3ckURgvs
// – Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю або четверту частину години).

let time = 0;

if (time >= 0 && time < 15){
    console.log(`чверть 1`);

} else if(time >= 15 && time < 30){
    console.log(`чверть 2`);

}else if(time >= 30 && time < 45){
    console.log(`чверть 3`);

}else if(time >= 45 && time < 59) {
    console.log(`чверть 4`);
}

//#UMoNq4biWGe
// – У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину (декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 15;

if (day > 0 && day <= 10){
    console.log(`декада 1`);

} else if(day > 10 && day <= 20){
    console.log(`декада 2`);

}else if(day > 20 && day <= 31){
    console.log(`декада 3`);
}

//#KzrtqyQ
//
// – Скласти розклад на тиждень за домопогою switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа, що заплановано на цей день (можна замість плану на день, назву дня англійською).


let getDay = prompt(`What is day?`);


switch (getDay){
    case `monday`:
        console.log(`monday`);
        break;
    case `tuesday`:
        console.log(`tuesday`);
        break;
    case `wednesday`:
        console.log(`wednesday`);
        break;
    case `thursday`:
        console.log(`thursday`);
        break;
    case `friday`:
        console.log(`friday`);
        break;
    case `saturday`:
        console.log(`saturday`);
        break;
    case `sunday`:
        console.log(`sunday`);
        break;
}

//#uwsz1RnTQJ1
// – Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати, коли введені рівні числа.

let number1 = 1;
let number2 = 2;

if (number1 > number2){
    console.log(number1);
} else if(number1 < number2){
    console.log(number2);
} else if(number1 === number2){
    console.log(`рівні`);
}

//#iBvqtjEm
// – є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код, який
//  буде присвоювати змінній х значення “default”,  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let xx = null;

if (xx === 0 || xx === null || xx === undefined || xx === false || xx === NaN){
    xx = `default`;
}

console.log(xx);

//#awLXL6TBzg
// з файлу arrays.js ( лежить у вкладеннях)  взяти масив coursesAndDurationArray.
// За допомогою іф перевірити кожен його елемент на тривалість навчання.
// У випадку, якщо тривалість довша за 5 місяців, вивести в консоль “Супер”.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

console.log(typeof (coursesAndDurationArray[0].monthDuration))

if (coursesAndDurationArray[0].monthDuration > 5){
    console.log(`Супер`);
}

if (coursesAndDurationArray[1].monthDuration > 5){
    console.log(`Супер`);
}

if (coursesAndDurationArray[3].monthDuration > 5){
    console.log(`Супер`);
}

if (coursesAndDurationArray[4].monthDuration > 5){
    console.log(`Супер`);
}

if (coursesAndDurationArray[5].monthDuration > 5){
    console.log(`Супер`);
}

