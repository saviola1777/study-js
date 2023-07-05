                 //!Методи класу також можуть бути приватними, тобто доступні тільки у тілі класу. Для цього, перед їхнім ім'ям необхідно поставити символ #.

class User {   //ОГОЛОШЕННЯ КЛАСУ
   // Необов'язкове оголошення публічних властивостей
   name;
   // Обов'язкове оголошення приватних властивостей
   #email;  //це приватна властивість оголошенна в класі 
 
   constructor({ name, email }) {
     this.name = name;
     this.#email = email;
   }
 
   getEmail() {
     return this.#email;
   }
 
   changeEmail(newEmail) {
     this.#email = newEmail;
   }
 }
 
 const mango = new User({
   name: "Манго",
   email: "mango@mail.com",
 });
 mango.changeEmail("mango@supermail.com");
 console.log(mango.getEmail()); // mango@supermail.com
// console.log(mango.#email); // Виникне помилка, це приватна властивість



                                                                       //! ГЕТЕРИ І СЕТЕРИ

//Геттери і сеттери - це коротший синтаксис оголошення методів для взаємодії з властивостями. Геттер і сеттер імітують звичайну публічну властивість класу, але дозволяють змінювати інші властивості зручнішим способом. Геттер виконується при спробі отримати значення властивості, а сеттер - при спробі його змінити.

//Геттери і сеттери доречно використовувати для простих операцій читання і зміни значення властивостей, особливо приватних, як їх публічний інтерфейс. Для роботи з властивістю, яка зберігає масив або об'єкт, вони не підійдуть.

class Users {
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  // Геттер email
  get email() {
    return this.#email;
  }

  // Сеттер email
  set email(newEmail) {
   if(newEmail === "") {
     console.error("Помилка! Пошта не може бути порожнім рядком!");
     return;
   }
 
   this.#email = newEmail;
 }
}

//Ми оголосили геттер і сеттер email, поставивши перед ім'ям властивості ключові слова get і set. Всередині цих методів ми або повертаємо значення приватної властивості #email, або змінюємо її значення. Геттер і сеттер застосовуються в парі і повинні називатися однаково.

const poly = new Users({ name: "Манго", email: "mango@mail.com" });
console.log(poly.email); // mango@mail.com
poly.email = "poly@supermail.com";
console.log(poly.email); // mango@supermail.com

//Звертаючись до mango.email, викликається геттер get email() {...} і виконується його код. При спробі запису mango.email = "mango@supermail.com" викликається сеттер set email(newEmail) {...} і рядок "mango@supermail.com" буде значенням параметра newEmail.

// Перевага в тому, що це методи, а значить, під час запису можна виконати додатковий код, наприклад, з будь-якими перевірками, на відміну від виконання цієї ж операції безпосередньо з властивістю.

//! Наслідування класів Ключове слово extends дозволяє реалізувати наслідування класів, коли один клас (дочірній, похідний) наслідує властивості і методи іншого класу (батьківського).

class Herro{
   constructor(name="hero", xp=0 , email=''){
this.name=name,
this.xp=xp
this._email=email
   }
   set email(names) {
       this._email=names;
    }
}
class Warrior extends Herro {
   constructor(name , xp , email ,warrior){
super(name ,xp ,email ) // super це конструктор Herro тобто Warrior super(аргументи) - це псевдонім конструктора батьківського класу. 
this.warrior=warrior
   }


}
const newWarrior =new Warrior("Sasha" , 5000 ,"poly" ,'sad')
console.log('newWarrior: ', newWarrior);


