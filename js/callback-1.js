// Колбек функція-  це функція, яка передається іншій функції як аргумент, а та, в свою чергу, викликає передану функцію.
// Це функція яку ми кидаємо в іншу функцію 

const fnA = function ( message , callback) {  // другий парамтр це колбек функція callback
  console.log(message);
  callback()                                 // тут ми його визиваємо 
}

const fnB = function () {
  console.log("Колбек функція ");
}

fnA("Hello" , fnB )  // Другим аргументом передаємо колбек Функцію

const doMath = function(a, b , callback) {
  const result = callback(a , b)
  console.log(result);
}

const add = function ( a , b ) {
  return a +b  
}

const sub =function (a , b) {
  return a - b
}

doMath(2,3 , add)
doMath(10,7 , sub)

// Анонімна функція (inline)  маленька, і потрібна тільки для передачі аргументом, її можна оголосити безпосередньо на момент виклику функції, в яку передаємо колбек. Така функція буде доступна тільки у якості значення параметра і більше ніде в коді. тут ми передали 3 аргументом функцію і виконання її  -це інлайн
doMath(2,3 , function(a,b){
  return a + b + a 
})