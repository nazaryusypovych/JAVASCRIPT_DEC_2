//#dFeorS3m7u
// – Знайти та вивести довжину наступних стрінгових значень
//  ‘hello world’
// ‘lorem ipsum’
// ‘javascript is cool’


let q = `hello world`;
console.log(q.length);

let w = `lorem ipsum`;
console.log(w.length);

let e = `javascript is cool`;
console.log(e.length);

//#8lld9HMxXWB
// – Перевести до великого регістру наступні стрінгові значення
// ‘hello world’, ‘lorem ipsum’, ‘javascript is cool’


console.log(q.toUpperCase());
console.log(w.toUpperCase());
console.log(e.toUpperCase());


//#ClDsAm7xba7
// – Перевести до нижнього регістру наступні стрінгові значення
// ‘HELLO WORLD’, ‘LOREM IPSUM’, ‘JAVASCRIPT IS COOL’

let r = `HELLO WORLD`;
console.log(r.toLowerCase());

let t = `LOREM IPSUM`;
console.log(t.toLowerCase());

let y = `JAVASCRIPT IS COOL`;
console.log(y.toLowerCase());

//#0b89BkYZwu
// – Є “брудна” стрінга let str = ‘dirty string‘ . Почистити її від зайвих пробілів.

let str = `dirty string`;

let cleanStr = str.replace(` `, ``);
console.log(cleanStr);

//#bfoJuse4ZzP
// – Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = ‘Ревуть воли як ясла повні’;
// let arr = stringToarray(str); [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’]


let string = `Ревуть воли як ясла повні`;


function stringToarray(str){
    let result = str.split(` `);


    return result;
}

let arr = stringToarray(string);
console.log(arr);







//#Rbr5kEQ
// – є масив чисел [10,8,-7,55,987,-1011,0,1050,0]. За допомоги map  перетворити всі об’єкти в масиві на стрінгові.

let numbers = [10,8,-7,55,987,-1011,0,1050,0];



let stringNumbers = numbers.map(value => value + ``);

console.log(stringNumbers);
console.log(numbers);


//#5hqyKTfmc
// – створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки  – залежно від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,’ascending’) // [3,11,21]
// sortNums(nums,’descending’) // [21,11,3]

let nums = [11,21,3];


function sortNums(array,direction){
        if (direction === `ascending`){
            return array.sort((a, b) => a-b)
        } else if (direction === `descending`){
            return array.sort((a, b) => b-a)
        }

}

console.log(sortNums(nums, `ascending`));
console.log(sortNums(nums, `descending`));



//#yo06d74c1C
// – є масив
// let coursesAndDurationArray = [
//     {title: ‘JavaScript Complex’, monthDuration: 5},
//     {title: ‘Java Complex’, monthDuration: 6},
//     {title: ‘Python Complex’, monthDuration: 6},
//     {title: ‘QA Complex’, monthDuration: 4},
//     {title: ‘FullStack’, monthDuration: 7},
//     {title: ‘Frontend’, monthDuration: 4}
// ];
//
//  — відсортувати його за спаданням за monthDuration
//  — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
//  — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}



let coursesAndDurationArray = [
    {title: `JavaScript Complex`, monthDuration: 5},
    {title: `Java Complex`, monthDuration: 6},
    {title: `Python Complex`, monthDuration: 6},
    {title: `QA Complex`, monthDuration: 4},
    {title: `FullStack`, monthDuration: 7},
    {title: `Frontend`, monthDuration: 4}
];

//  — відсортувати його за спаданням за monthDuration
let filtermonthDuration = coursesAndDurationArray.sort((a, b) =>{
    return b.monthDuration - a.monthDuration;
});
console.log(filtermonthDuration);


// — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
let onlyMore5Month = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(onlyMore5Month);

// — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let newCoursesAndDurationArray = coursesAndDurationArray.map((value, index) =>{
    return {id: index+1, title: value.title, monthDuration: value.monthDuration}
});
console.log(newCoursesAndDurationArray);


//#4LJn7zBx
// взяти з arrays.js масив coursesArray
// –написати пошук всіх об’єктів, в яких в modules є sass
// –написати пошук всіх об’єктів, в яких в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

//–написати пошук всіх об’єктів, в яких в modules є sass

let findSass = coursesArray.filter(value =>{
    return value.modules.includes(`sass`);
});
console.log(findSass);

// –написати пошук всіх об’єктів, в яких в modules є docker

let findDocker = coursesArray.filter(value =>{
    return value.modules.includes(`docker`);
});
console.log(findDocker);


//#bolvdlhP
//  описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
// Після опису, використовуючи функції масивів:
//  – знайти піковий туз
//  – всі шістки
//  – всі червоні карти
//  – всі буби
//  – всі трефи від 9 та більше
//
// Приклад моделі об’єкту карти:
//
// {
//
//    cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
//     value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
//     color:”, // ‘red’,’black’
//
// }


let arrCards = {
    cardSuit: [`spade`, `diamond`, `heart`, `clubs`],
    cardValue: [`6`, `7`, `8`, `9`, `10`, `ace`, `jack`, `queen`, `king`],
    cardColor: [`red`, `black`]
};

function cards (arr) {
    let cards = [];
    for (const suit of arr.cardSuit) {
        for (const value of arr.cardValue) {
            let color;
            if (suit === 'diamond' || suit === 'heart'){
                color = `red`;
            } else{
                color = `black`;
            }

            let card = {
                suit: suit,
                value: value,
                color: color
            };
            cards.push(card);


        }
    }
    return cards
}

let cards36 = cards(arrCards);
console.log(cards36);

//  – знайти піковий туз
let diamondAce = cards36.filter(value => value.suit === `diamond` && value.value === `ace`);
console.log(diamondAce);

//  – всі шістки
let allSix = cards36.filter(value => value.value === `6`);
console.log(allSix);

//  – всі червоні карти
let allRed = cards36.filter(value => value.color === `red`);
console.log(allRed);

//  – всі буби
let allDiamond = cards36.filter(value => value.suit === `diamond`);
console.log(allDiamond);

//  – всі трефи від 9 та більше
let allspadeMoreNine = cards36.filter(value => value.suit === `spade` && (value.value > `9` || value.value > 9));
console.log(allspadeMoreNine);



//#EP5I1UUzAX
// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
// Приклад моделі кінцевого об’єкту
// {
//
//     spades:[],
//
//     diamonds:[],
//
//     hearts:[],
//
//     clubs:[]
//
// }


console.log(cards36.reduce((accumulator, card) => {
    if (card.suit === `spade`) {
        accumulator.spades.push(card);
    } else if (card.suit === `diamond`) {
        accumulator.diamonds.push(card);
    } else if (card.suit === `heart`) {
        accumulator.hearts.push(card);
    } else if (card.suit === `club`) {
        accumulator.clubs.push(card);
    }
    return accumulator;
}, {spades: [], diamonds: [], hearts: [], clubs: []}));
