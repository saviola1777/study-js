// Трапляються ситуації, коли функцію потрібно викликати в контексті об'єкта, при цьому функція не є його методом. Для цього у функцій є методи call, apply і bind.

//Метод call викличе функцію foo таким чином, що в this буде посилання на об'єкт obj, а також передасть аргументи arg1, arg2 тощо.

function greetGuest(greeting) {
   console.log(`${greeting}, ${this.username}.`);
 }
 
 const mango = {
   username: "Манго",
 };

 const poly = {
   username: "Полі",
 };
 
 greetGuest.call(mango, "Ласкаво просимо"); // Ласкаво просимо, Манго. До функції визиваємо метод сall  де першим аргументом є обєкт який визивається в контексті
 greetGuest.call(poly, "З прибуттям"); // З прибуттям, Полі. 

// Метод apply викличе функцію foo таким чином, що в this буде посилання на об'єкт obj, а також передасть елементи масиву як окремі аргументи arg1, arg2 тощо.

greetGuest.apply(mango, ["Ласкаво просимо"]); // Ласкаво просимо, Манго.
greetGuest.apply(poly, ["З прибуттям"]); // З прибуттям, Полі.


 const metodCall = function () {
   console.log("this" , this);
 }

 metodCall.call(mango) // визвали функцію яка слилається а обєкт манго і  всередині функції metodCall this буде силатися на обєкт mango і матиме доступ до неї

// Метод bind створює і повертає копію функції foo з прив'язаним контекстом obj і аргументами arg1, arg2 тощо. Утворюється копія функції, яку можна передати куди завгодно і викликати коли завгодно.

const customer = {
  firstName: "Jacob",
  lastName: "Mercer",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function makeMessage(callback) {
  // callback() - це виклик методу getFullName без об'єкта
  console.log(`Обробляємо заявку від ${callback()}.`);
}

makeMessage(customer.getFullName); // Виникне помилка на момент виклику функції
makeMessage(customer.getFullName.bind(customer)); // Обробляємо заявку від Jacob Mercer.