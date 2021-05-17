"use strict";
const h1Text = document.querySelector("h1");
console.log(h1Text);

const myDate = new Date();
const dataString = myDate.toLocaleDateString();
const timeString = myDate.toLocaleTimeString();
// console.log(dataString);

const h4Text = document.createElement("h4");
h4Text.className = "Date and Time";
h4Text.textContent = dataString + " " + timeString;
document.body.append(h4Text);
console.log(h4Text);
