
const buttonRef = document.querySelector(".js-button") // Доступ до кнопки 

const handleClick = function (){
   console.log("Клік по кнопці"+ Date.now() );
}

buttonRef.addEventListener('click' , handleClick) // При кліку  визиває функцію 

// const onGetPositionSuccess = function(positiosn) {
// console.log(positiosn);
// }

// const onGetPositionError = function(error) {
//    console.log(error);
// }

// window.navigator.geolocation.getCurrentPosition(onGetPositionSuccess , onGetPositionSuccess)

const callback = function() {
console.log("Колбек через 2 секунди ");
}

setTimeout(callback , 2000) // В setTimeout ми кинули колбек вона виконається через 2 секунди 
 console.log('Другий лог')


const onRequestSuccess = function(users){ // Колбек який повертає масив з бекенду
console.log(users)
}

fetch("https://64046cb280d9c5c7bac775af.mockapi.io/users") //робим запит на бек 
.then(res=>res.json())  // повертаємо 
.then(onRequestSuccess) // повертаємо результата 