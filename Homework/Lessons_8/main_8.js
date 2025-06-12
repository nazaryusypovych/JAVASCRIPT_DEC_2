//#iz6emEsP2BA
// – є масив
// let coursesAndDurationArray = [
//
//     {title: ‘JavaScript Complex’, monthDuration: 5},
//
//     {title: ‘Java Complex’, monthDuration: 6},
//
//     {title: ‘Python Complex’, monthDuration: 6},
//
//     {title: ‘QA Complex’, monthDuration: 4},
//
//     {title: ‘FullStack’, monthDuration: 7},
//
//     {title: ‘Frontend’, monthDuration: 4}
//
// ];
// за допомогою map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// Зробити все ВИКЛЮЧНО за допомогою інлайн конструкції


let coursesAndDurationArray = [
    {title: `JavaScript Complex`, monthDuration: 5},
    {title: `Java Complex`, monthDuration: 6},
    {title: `Python Complex`, monthDuration: 6},
    {title: `QA Complex`, monthDuration: 4},
    {title: `FullStack`, monthDuration: 7},
    {title: `Frontend`, monthDuration: 4}

];

let newCoursesAndDurationArray = coursesAndDurationArray.map((value, index) => {
    return {id: index+1, title: value.title, monthDuration: value.monthDuration};
});

console.log(newCoursesAndDurationArray);


//#AiN5CoUQ
// Створити функцію, яка робить глибоку копію об’єкта.
// Додати перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції, які в нього були до цього моменту.



let user1 = {
    name: 'nazar',
    age: 25,

    greeting(){},

    foo(){}
};


// let user2 = user1;
//
// console.log(user2);
// user2.status = true;
// console.log(user2);
// console.log(user1);
//
//
// console.log(user1 === user2); // true
// console.log(user1.name === user2.name); // true
//
// let copy = JSON.stringify(user2);
// console.log(copy);
//
// let copyUser = JSON.parse(copy);
// console.log(copyUser);
//
// console.log(user1 === copyUser); // false
// console.log(user1.name === copyUser.name); // true


function deepCopy(obj) {
    if (obj){
        let functions = [];

        for (const key in obj) {
            if (typeof obj[key] === `function`){
                let functionClon = obj[key].bind({});
                functions.push({functionClon, key});
            }
        }


        let copyStr = JSON.stringify(obj);
        let copyObj = JSON.parse(copyStr);

        for (const func of functions) {
            copyObj[func.key] = func.functionClon;
        }



        return copyObj;
    }



    throw Error (`!!!!!!`);

}

console.log(user1);

let copyUser = deepCopy(user1);
console.log(copyUser);