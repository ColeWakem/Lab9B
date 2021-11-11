var age = prompt("How old are you?");
console.log(age);

var today = new Date();
var todayYear = today.getYear();
var yearBorn = todayYear - age;

console.log(todayYear);
console.log(yearBorn);

document.getElementById("output").innerHTML = yearBorn;
