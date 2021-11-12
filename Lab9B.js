var age = prompt("How old are you?");
console.log(age);

var today = new Date();
console.log(today);
var todayYear = today.getFullYear();
console.log(todayYear);
var yearBorn = todayYear - age;
console.log(yearBorn);


document.write(yearBorn);
