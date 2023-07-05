// Метод filter(callback) використовується для єдиної операції - фільтрації масиву, тобто, коли необхідно вибрати більше одного елемента з колекції за певним критерієм.

const arrays = [
   {id:1 ,name:"sasha", age:32 , online:false},
   {id:2 ,name:"olek", age:22 , online:true},
   {id:3 ,name:"pasha", age:27 , online:true},
   {id:4 ,name:"vasul", age:17 , online:true},
]

const arr = arrays.filter(array=>array.age>21 && array.online) // перебирає масив і повертає новий які підходять по умові(true) , якщо нічого не підходить повертає пустий масив
console.log('arr',arr);

// const arr = [
//    {id:2 ,name:"olek", age:22 , online:true},
//    {id:3 ,name:"pasha", age:27 , online:true},
//   ]



// Якщо метод filter(callback) використовується для пошуку всіх елементів, що задовольняють умову, то метод find(callback) дозволяє знайти і повернути перший відповідний елемент, після чого перебирання масиву припиняється. Тобто він шукає до першого збігу.

const arrFind = arrays.find(array=>array.online) // перебирає масив і повертає перший який знаходить і далі не провіряє
console.log('arrFind',arrFind);

// const arr = [
//    {id:2 ,name:"olek", age:22 , online:true},
//   ]

const arrayFind = (array , id) => {     // функція що повертає масив з обєктом по id
  return array.find(arr=>arr.id===id)
}

console.log(arrayFind(arrays , 1));