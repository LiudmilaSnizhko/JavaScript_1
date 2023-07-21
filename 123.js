// Напишіть код, який перевіряє, чи користувач має право на знижку
// на товар.Користувач має право на знижку, якщо він є студентом
// або пенсіонером, або вік його між 12 і 18 роками(включно).


// Напишіть код, який перевіряє, чи можна отримати водійські права.
// Користувач може отримати водійські права, якщо йому виповнилося
// 18 років і він має право на працевлаштування.


// Напишіть код, який перевіряє, чи можна відкрити двері.
// Двері можна відкрити, якщо ключ у власника або у його
// друга, або двері не закриті на замок.


// Напишіть код, який перевіряє, чи є введене користувачем значення
// числом, і виводить його квадрат, якщо це число.Якщо значення
// не є числом, виведіть повідомлення про невірний ввід.
// Вводити значення користувач буде за допомогою prompt()


// Напишіть код, який перевіряє, чи введене користувачем значення є рядком
// і не містить символ $. Якщо це так, виведіть кількість символів у рядку.
// Якщо значення не є рядком, виведіть повідомлення про невірний ввід.
// Вводити значення користувач буде за допомогою prompt()



// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     if (this.potions.includes(newPotion)) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };



// function urlGenerator(domain) {
//   return function (url) {
//     return `https://${url}.${domain}`
//   }
// }

// const comeUrl = urlGenerator('com');
// console.log(comeUrl("Google"));

// 1
// Виконайте сортування масиву цін за спаданням та зростанням.
// const prices = [1000, 240, 670, 360, 89, 20];

// 2
// Напишіть функцію sayHi(), яка приймає в якості параметра масив імен,
// перебирає масив і додає до кожного ім'я привітання.
// Функція повертає новий масив  ["Ivan привіт!", "Maria привіт!", "Anna привіт!"]

// const names = ['Ivan', 'Maria', 'Anna'];


// 3
// Напишіть стрілочну функцію, яка буде перевіряти
// чи містить даний масив, хоча б одне число більше 20.

// const numbers = [20, 16, 11, 13, 15];


// 4
// Напишіть стрілочну функцію яка буд перевіряти чи всі студенти
// у нашому масиві старші 18 років.

// const students = [
//   { name: 'Alex', age: 17 },
//   { name: 'Stas', age: 18 },
//   { name: 'Mike', age: 22 },
//   { name: 'Den', age: 20 },
// ];


//5
// Напишіть функцію fruitsCount(), яка буде визначати загальну кількість
// бананів, яблук і інших фруктів у масиві.
// Функція приймає в якості параметра масив фруктів і повертає об'єкт:
// ключ - назва фрукта, значення - кількість цих фруктів у масиві.
// Результат роботи функції: Object { apples: 3, bananas: 1, oranges: 1, kiwi: 1 }

// const fruits = ['apples', 'bananas', 'oranges', 'apples', 'kiwi', 'apples'];


// const fruitsCount = fruits.reduce((acc, fruit) => {
//     if (!acc[fruit]) {
//         acc[fruit] = 1;
//         return acc
//     }
//     acc[fruit] += 1;
//     return acc
// }, {})
// console.log(fruitsCount);


// 6
// Зібрати в allTopics масив всіх предметів всіх курсів.
//Виконати фільтрацію, залишивши в allTopics тільки унікальні елементи.

// const courses = [
//   {
//     name: "Basic HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
//   },
//   {
//     name: "Intermediate HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
//   },
//   {
//     name: "Basic JavaScript",
//     topics: [
//       "VSCode",
//       "Type system",
//       "Loops",
//       "Function",
//       "Git",
//       "Conditions",
//       "Classes",
//       "GitHub",
//       "DOM",
//     ],
//   },
//   {
//     name: "Intermediate JavaScript",
//     topics: [
//       "VSCode",
//       "NPM",
//       "Bundlers",
//       "Transpiling",
//       "Git",
//       "Promises",
//       "AJAX",
//       "GitHub",
//     ],
//   },
// ];

// const allTopics = courses.flatMap(elem => elem.topics)
//     .filter((elem, idx, arr) =>arr.indexOf(elem) ===)
// console.log(allTopics);


// 7
// у нас є масив користувачів, кожен з яких має поля id та name.
//  Давайте знайдемо той де id = 1.

//  let users = [
//   {id: 1, name: "John"},
//   {id: 2, name: "Pete"},
//   {id: 3, name: "Mary"}
// ];

// const idNumber1 = users.find(elem => elem.id === 1)
// console.log(idNumber1.name);




// 8
// const friends = [
//     { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
//     { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
//     { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
//     { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
//     { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
//     { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' }
// ]
// Напишіть функцію getTotalBoysYears() яка порахує загальний вік хлопців.


// const totalAge = friends.filter(elem => elem.age === 'm')
//     .reduce((acc, elem) => acc + elem.age, 0);
// console.log(totalAge);

// Task 9
// Напишіть функцію getGirlsPassports() яка поверне масив номерів паспортів дівчат.

// Task 10

//Напиши клас Rectangle який створює об'єкт
//з ​​властивостями height, width
//і методом calculateArea() для підрахунку прлощі прямокутника.

// class Rectangle {
//     constructor({ height, width }) {
//         this.height = height;
//         this.width = width;
        
//     }
//     calculateArea() {
//       return this.height*this.width
//    }
// }
// const areaRectangle = new Rectangle({ height: 5, width: 8 })
// console.log(areaRectangle.calculateArea());



// Task 11
//Напиши клас Client який створює об'єкт
//з ​​властивостями login, email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email

// class Client {
//     #login;
//     #email;
//     constructor({ login, email }) {
//         this.#login = login;
//         this.#email = email;

//     }
//     get login() {
//         return this.#login
//     }
//     set login(newLogin) {
//         this.#login = newLogin
    
//     }
//     get email() {
//         return this.#email
//     }
//     set email(newEmail) {
//         this.#email = newEmail
    
// }
// }
// const Alex = new Client({ login: 'qwe', email: qwe@gmail.com})
// console.log(Alex.login);
// console.log(Alex.email);

// Alex.login = 'Olex';
// Alex.email = wwe@gmail.com;

// console.log(Olex.login);
// console.log(Olex.email);




// Task 12
// Створи клас Phone який створює об'єкт з ​​властивістю price.
// Додай статичну властивість MAX_PRICE зі значенням 40000 - максимально допустима ціна телефону.
// Оголоси приватну властивість price доступ до якої буде через геттер та сеттер.
// Додай сетеру price перевірку значення параметра newPrice, що передається.Якщо воно більше за MAX_PRICE,
// сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну телефону.

// class Phone {
//     static MAX_PRICE = 40000;
//     #price
//     constructor(price) {
//         this.#price = price;
//     }
//     get price() {
//         return this.#price;
//     }
//     set price(newPrice) {
//         if (newPrice <= Phone.MAX_PRICE)
//             this.#price = newPrice;
//         return
        
       
//     }
// }
// const proMax = new Phone(10000);
// console.log(proMax.price);
// proMax.price = 38000;
// console.log(proMax.price);




// Task 13
// Є об'єкт і функція для підрахунку суми чисел.
// Виведіть у консоль результат виконання функції, якщо a = 3, b = 5.

// var obj = { num: 2 };

// function add(a, b){
//   return this.num + a + b;
// }
// console.log(add.call(obj, 3, 5));
// console.log(add.apply(obj, [3, 5]));
// const qwe = add.bind(obj, 3, 5)
// console.log(qwe());





// Task 14
// Є два об'єкти, які описують деякі характеристики телефонів.
// Потрібно викликати метод showInfo, щоб він логував інформацію про кожний телефон,
// передаючи аргументом країну-виробник телефону.
// "HUAWEI" - "China", "SAMSUNG" - "South Korea".


// const tel = {
//     regNumber: "AE8345FEDAS",
//     brand: "HUAWEI",
//     showInfo(country) {
//         console.log(`${country} ${this.regNumber} ${this.brand}`);
//     }
// }


// const tel_2 = {
//     regNumber: "AO8518FEGHT",
//     brand: "SAMSUNG",

// }
// tel.showInfo("China");

// tel.showInfo.call(tel_2, "South Korea");
// tel.showInfo.apply(tel_2, ["South Korea"]);

// const car = tel.showInfo.bind(tel_2, "Canada");
// car()
   




// Task 15
// 1. Створіть об'єкт car з трьома властивостями
// carBrand: "Audi Q3"
// price: 23000
// метод getData() котрий буде логувати рядок :"Audi Q3 за 23000 $"

// 2. Напишіть функцію makeMessage(callback), котра отримує в якості параметра
// callback-функцію getData() і логує повідомлення "Ви замовили ${callback()}"

// const car = {
//     carBrand: "Audi Q3",
//     price: 23000,

//     getData() {
//     return `${this.carBrand} за ${this.price}$ `
// }
// }

// function makeMessage(callback) {
//   console.log(`Ви замовили ${callback()}`);
// }
// makeMessage(car.getData.bind(car));




// Task 16
// Напишіть код таким чином, щоб об'єкт apples став прототипом для об'єкта fuji.
// Перевірте чи став об'єкт apples  прототипом для об'єкта fuji.
// Додайте об'єкту fuji властивість color: 'pink'  і виведіть його у консоль.
// Виведіть у консоль значення властивості type для об'єкту fuji.
// Перевірте і виведіть у консоль чи є властивість vitamins власною властивістю об'єкту apples.
// Перевірте і виведіть у консоль чи є властивість cookingMethod власною властивістю об'єкту fuji.

// const apples = {
//     type: 'fruit',
//     cookingMethod: ['jam', 'juice', 'baked', 'dried', 'fresh'],
//     vitamins: ['A', 'B1', 'B2', 'E'],
// }
// const fuji = Object.create(apples);
// console.log(apples.isPrototypeOf(fuji));
// fuji.color = 'pink';
// console.log(fuji.type);
// console.log(apples.hasOwnProperty('vitamins'));

const ourArray = [];
let s = 0;
while (i < 5) {
    ourArray.push(i);
    i++;
}









