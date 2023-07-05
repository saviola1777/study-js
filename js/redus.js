
const students = [
   { name: "Манго", score: 83 },
   { name: "Полі", score: 59 },
   { name: "Аякс", score: 37 },
 ];
 
 // Назва акумулятора може бути довільною, це просто параметр функції
 const totalScore = students.reduce((total, student) => {
   return total + student.score;
 }, 0);
 console.log(totalScore);

 const tweets = [
   { id: "000", likes: 5, tags: ["js", "nodejs"] },
   { id: "001", likes: 2, tags: ["html", "css"] },
   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
   { id: "003", likes: 8, tags: ["css", "react"] },
   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
 ];
 
 // Пройдемо по всіх елементах колекції і додамо значення властивості likes
 // до акумулятора, початкове значення якого вкажемо 0.
 const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
 
 console.log(likes); // 32

 