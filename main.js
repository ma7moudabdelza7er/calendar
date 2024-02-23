const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const weekDays = [
  "saturday",
  "sunday",
  "Monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
];
const today = new Date();

console.log(today.getMonth());
date.innerHTML = (today.getDate()<10?"0":"") + today.getDate();
year.innerHTML = today.getFullYear();
month.innerHTML = today.getMonth() + 1;
day.innerHTML = weekDays[today.getDay()];