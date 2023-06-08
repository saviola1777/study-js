// Замикання результатом своєї роботи може  повертати іншу функцію під час визову вона буде мати доступ до всіх локальних зміних
// Якщо ви одну функції повертаємо з іншої функції то при визові возврощоної функції вона получає доступ до всіх внунтрішнії зміних батьківської функції

const fnA = function(params) {
const para = "Значення"

const innerVariable = function(){
console.log(params);
 console.log(para);
   }
   return  innerVariable
   
}
const fnB = fnA(555)
console.log(fnB());

const makeShef = function(name) {
   const makeDish = function(dish) {
      console.log(`${name} готовить ${dish}`);
   }
   return makeDish
}

const mango = makeShef("Mango")
console.log(mango("суп"))





