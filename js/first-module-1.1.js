console.log(Number.parseInt("5px")); // 5
console.log(Number.parseInt("12qwe74")); // 12
console.log(Number.parseInt("12.46qwe79")); // 12
console.log(Number.parseInt("qweqwe")); // NaN не номнр не число
// Math.floor(num) - повертає найменше ціле число,
// менше, або яке дорівнює зазначеному числу
console.log(Math.floor(1.7)); // 1

// Math.ceil(num) - повертає найбільше ціле число,
// більше, або яке дорівнює зазначеному числу.
console.log(Math.ceil(1.2)); // 2

// Math.round(num) - повертає значення числа,
// округленого до найближчого цілого
console.log(Math.round(1.2)); // 1
console.log(Math.round(1.5)); // 2

// Math.max(num1, num2, ...) - повертає найбільше ціле число з набору
console.log(Math.max(20, 10, 50, 40)); // 50

// Math.min(num1, num2, ...) - повертає найменше ціле число з набору
console.log(Math.min(20, 10, 50, 40)); // 10

// Math.pow(base, exponent) - піднесення до степеня
console.log(Math.pow(2, 4)); // 16

// Math.random() - повертає псевдовипадкове число в діапазоні [0, 1)
console.log(Math.random()); // випадкове число між 0 і 1
console.log(Math.random() * (10 - 1) + 1); // псевдовипадкове число від 1 до 10

//  let base = Number(prompt('Веди число')) 
//  let powe = Number(prompt("Веди степінь"))
//  const result = Math.pow(base, powe)
//  console.log(result)

const guestName = "Манго";
const roomNumber = 207;
const greeting = `Привіт ${guestName} твоя кімнати ${roomNumber}`
console.log(greeting)

const message = "Welcome to Bahamas!";
console.log(message.toLowerCase()); // "welcome to bahamas!"
console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"

// Метод includes()​

// Перевіряє, чи міститься підрядок в рядку, повертає буль - true, якщо міститься, і false - в іншому випадку. Регістр символів в рядку і підрядку має значення, оскільки, наприклад, літера "a" не дорівнює літері "А".
 
const words1 = "Jon"
const words2 = "Sem"

const string1 ="jon fine job"
const string2 ="sem find job"

console.log(string1.toLowerCase().includes(words1.toLowerCase()))

console.log("10" > 5 , true===1 , true==1) // оператор порівнння переводить строку в число , далі є строге і не строге порівняння === строге , == не строге

// Оператор && приводить всі операнди до буля і повертає значення одного з них. Лівий операнд - якщо його можна привести до false, і правий - в інших випадках.
//Тобто, логічне «&&» зупиняється на хибному і повертає те, на чому зупинилось, або останній операнд.

const age = 50;
console.log(age > 10 && age < 30); // true && false -> false
console.log(age > 80 && age < 120); // false && true -> false

console.log(1 && 5); // true && true -> 5
console.log(5 && 1); // true && true -> 1
console.log(0 && 2); // false && true -> 0
console.log(2 && 0); // true && false -> 0
console.log("" && "Mango"); // false && true -> ""
console.log("Mango" && ""); // true && false -> ""
console.log("Mango" && "Poly"); // true && true -> "Poly"
console.log("Poly" && "Mango"); // true && true -> "Mango"

//Логічне «АБО»​ Оператор || приводить всі операнди до буля і повертає значення одного з них. Лівий операнд - якщо його можна привести до true, і правий - в інших випадках.

const age1 = 40;
console.log(age1 < 10 || age1 > 30); // false || true -> true

console.log(true || false); // true
console.log(false || true); // true
console.log(true || true); // true

console.log(3 || false); // 3
console.log(false || 3); // 3
console.log(3 || true); // 3
console.log(true || 3); // true

//Логічне «НЕ»​ Всі оператори, які ми розглядали до цього, були бінарними - містять два операнди: лівий і правий. Логічне «НЕ»! - це унарний оператор, який виконує операцію над одним операндом з правої сторони.

console.log(!true); // false
console.log(!false); // true

const x1 =10
const x2=30 
const number=50
console.log(number<x1 && number>x2) // повертає false тому що перша умова приводить до false && - це оператор і де дві умови повині бути true
console.log(number>x1 && number>x2) // повертає true

console.log("оператор порівняння ||", number<x1 || number>x2) // повертає true тому що підходить друга умова || це оператор або де повино підійти хотяб одна умова








 




