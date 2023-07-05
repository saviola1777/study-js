// Оператор (операторная функция) new создаёт экземпляр объекта, встроенного или определённого пользователем, имеющего конструктор.

const Car = function({brand ,model,price}={}) {
   console.log("this", this);
   this.name=brand
   this.brand=model;
   this.price=price;
};  // це функція конструктор тому що починається з великої літери , і this буде силатися но новий створений обєкт new Car() 
Car.prototype.sauHi=function(){   // свойство prototype може бути тільки у функції тобто Сar має силку  на прототип десь в памяті 
   console.log('myCar.sauHi()', "Hello")
}
 
const myCar = new Car({
   brand:"bmw",
   model:'a3',
   price:1500,

})// оператор new создає екземпляр класу Car , якщо функція визивається через new створюється новий обєкт
// тобто коли ми визвали newCar(5) создався пустий обєкт , екземпляр функції Сar де this силається на new Car()  і при визові ми створили обєект з назвою 

 myCar.sauHi() // ми створили в Car прототип функцію sauHi а в myCar нема є методу sauHi але оскільки він є прототипом в Сar воно його знаходить  в памяті і має доступ
 console.log("myCar",myCar);

 const User = function ({email , password }={}){
this.email = email ,
this.password=password
 }

 User.prototype.changeEmail= function (email){
 this.email=email

 }

 const mango = new User ({email:"sasha@mail.ua" , password:129991})

console.log("mango",mango);
// mango.changeEmail( 'olel@mail.ua')

// Функція конструктор це просто функція , все робить оператор new який створює пустий обєкт десь в памяті і функція визивається в контексті створеного обєкта this силається но новий 





 





