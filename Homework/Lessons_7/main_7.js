//#XjJuucOMR0
// – Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об’єктами new User(….)


function User (id, name, surname , email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;

}

let user1 = new User(1, `nazar`, `jelet`, `nazar@gmail.com`, 120487);
let user2 = new User(2, `vova`, `kir`, `vova@gmail.com`, 485298);
let user3 = new User(3, `ken`, `limo`, `ken@gmail.com`, 489365);
let user4 = new User(4, `san`, `hit`, `san@gmail.com`, 782145);
let user5 = new User(5, `alan`, `big`, `alan@gmail.com`, 2587966);
let user6 = new User(6, `yan`, `man`, `jan@gmail.com`, 122556);
let user7 = new User(7, `tina`, `leg`, `tina@gmail.com`, 287171);
let user8 = new User(8, `ted`, `kio`, `ted@gmail.com`, 251479);
let user9 = new User(9, `fan`, `lpo`, `fan@gmail.com`, 878985);
let user10 = new User(10, `nana`, `vio`, `nana@gmail.com`, 665544);


let users = [];

users.push(user1);
users.push(user2);
users.push(user3);
users.push(user4);
users.push(user5);
users.push(user6);
users.push(user7);
users.push(user8);
users.push(user9);
users.push(user10);


console.log(user1);
console.log(user2);
console.log(users);




//#2ikXsE2WiKZ
// – Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)



let parniUser = users.filter(value => value.id % 2 === 0);

console.log(parniUser);

//#pOeHKct
// – Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortIdUser = users.sort((a, b) => b.id - a.id);
console.log(sortIdUser)



//#nkMXISv
// – створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об’єктами Client


function Client(id, name, surname , email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

let client1 = new Client(1, `nazar`, `jelet`, `nazar@gmail.com`, 120487, [{title: `ttt`, prise: 45000}, {title: `aaa`, prise: 12000}]);
let client2 = new Client(2, `vova`, `kir`, `vova@gmail.com`, 485298, [{title: `ddd`, prise: 4589}]);
let client3 = new Client(3, `ken`, `limo`, `ken@gmail.com`, 489365, [{title: `nnn`, prise: 87569}, {title: `ddd`, prise: 4589}]);
let client4 = new Client(4, `san`, `hit`, `san@gmail.com`, 782145, [{title: `hhh`, prise: 7800}]);
let client5 = new Client(5, `alan`, `big`, `alan@gmail.com`, 2587966, [{title: `aaa`, prise: 12000}, {title: `ggg`, prise: 96300}, {title: `nnn`, prise: 87569}]);
let client6 = new Client(6, `yan`, `man`, `jan@gmail.com`, 122556, [{title: `qqq`, prise: 32500}]);
let client7 = new Client(7, `tina`, `leg`, `tina@gmail.com`, 287171, [{title: `mmm`, prise: 63000}, {title: `kkk`, prise: 65220}]);
let client8 = new Client(8, `ted`, `kio`, `ted@gmail.com`, 251479, [{title: `jjj`, prise: 98520}]);
let client9 = new Client(9, `fan`, `lpo`, `fan@gmail.com`, 878985, [{title: `kkk`, prise: 65220}]);
let client10 = new Client(10, `nana`, `vio`, `nana@gmail.com`, 665544, [{title: `ggg`, prise: 96300}, {title: `jjj`, prise: 98520}, {title: `mmm`, prise: 63000}, {title: `jjj`, prise: 98520}]);


let clients = [];

clients.push(client1);
clients.push(client2);
clients.push(client3);
clients.push(client4);
clients.push(client5);
clients.push(client6);
clients.push(client7);
clients.push(client8);
clients.push(client9);
clients.push(client10);


console.log(clients);

//#8abtVjRv
// – Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню. (sort)

let sortClient = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sortClient);


//– Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//     — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car

// function Car(model, producer, year, maxSpeed, engineVolume) {
//
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     this.info = function (){
//         for (const key in this) {
//             console.log(key, this[key]);
//         }
//     }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         return this.maxSpeed = this.maxSpeed + newSpeed;
//     }
//
//     this.changeYear = function (newValue) {
//         return this.year = newValue;
//     }
//
//     this.addDriver = function (driver){
//         this.driver = driver;
//     }
//
// }
//
// let car = new Car(`bmw`, `gm`, 2010, 124, 4);
// console.log(car);
//
// car.drive();
//
// car.info();
//
// car.increaseMaxSpeed(100);
// console.log(car);
//
// car.changeYear(2012)
// console.log(car);
//
// car.addDriver({name: 'nazar', status: true});
// console.log(car);

//#5kla3yMpgp
// – (Те саме, тільки через клас)
// Створити клас, який дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
// — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//     — addDriver (driver) – приймає об’єкт, який “водій” з довільним набором полів, і додає його в поточний об’єкт car




class Car {



    constructor(model, producer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info = function () {
        for (const key in this) {
            console.log(key, this[key]);
        }
    }

    increaseMaxSpeed = function (newSpeed) {
        return this.maxSpeed = this.maxSpeed + newSpeed;
    }

    changeYear = function (newValue) {
        return this.year = newValue;
    }

    addDriver = function (driver) {
        this.driver = driver;
    }



}


let car = new Car(`bmw`, `gm`, 2010, 124, 4);

console.log(car);

car.drive();

car.info();

console.log(car.increaseMaxSpeed(100));

console.log(car.changeYear(2020));

car.addDriver({nazar: `nazar`, age: 12});

console.log(car);




//#zg6Fifnqig
// – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку


class Popelyshka{


    constructor(name, age, sizeLeg) {
        this.name = name;
        this.age = age;
        this.sizeLeg = sizeLeg;
    }

}


let popelyshka1 = new Popelyshka(`ira`, 22, 29);
let popelyshka2 = new Popelyshka(`tina`, 29, 30);
let popelyshka3 = new Popelyshka(`fiona`, 26, 31);
let popelyshka4 = new Popelyshka(`kira`, 27, 32);
let popelyshka5 = new Popelyshka(`alla`, 21, 33);
let popelyshka6 = new Popelyshka(`ena`, 26, 34);
let popelyshka7 = new Popelyshka(`zina`, 24, 35);
let popelyshka8 = new Popelyshka(`nana`, 29, 36);
let popelyshka9 = new Popelyshka(`lilia`, 25, 37);
let popelyshka10 = new Popelyshka(`mana`, 26, 38);


let girls = [];

girls.push(popelyshka1);
girls.push(popelyshka2);
girls.push(popelyshka3);
girls.push(popelyshka4);
girls.push(popelyshka5);
girls.push(popelyshka6);
girls.push(popelyshka7);
girls.push(popelyshka8);
girls.push(popelyshka9);
girls.push(popelyshka10);


console.log(girls)

class Prins{


    constructor(name, age, faindSize) {
        this.name = name;
        this.age = age;
        this.faindSize = faindSize;
    }
}

let prins1 = new Prins(`oleg`, 23, 35);
console.log(prins1);



for (const girl of girls) {
        if (girl.sizeLeg === prins1.faindSize) {
            prins1.wife = girl;
        }
}

console.log(prins1);


let findGirl = girls.find(value => value.sizeLeg === prins1.faindSize);
console.log(findGirl);



