// Стрілочна функція замість function ми пищемо ()=>
//В стрілочних немає ...arguments аале є ...rest

const add = (a , b ) => {
   if( a === 4 ){ 
return a + b
   }
   return console.log("Ти офігел");
}

 const sum =(a , b)=> a + b // неявний возврат коли не потрібно тіло функції , а зразу щось повернути 
 const suma = ()=>({num:5}) ; // Якщо нам зразу повернути обєкт то ми обгортаємо в круглі дужки
 const addSuma=(...rest)=>console.log(rest);

 console.log("add",add(4,170))
 console.log("sum",sum(7,7));
 console.log("suma", suma());
addSuma(5,"sasha " ,{name:"Olel"})

