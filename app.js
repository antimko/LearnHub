"use strict";
const h1Text = document.querySelector("h1");
console.log(h1Text);

const myDate = new Date();
myDate.toLocaleDateString();
myDate.toLocaleTimeString();
console.log(myDate);
const h4Text = document.createElement("h4");
h4Text.className = "Date and Time";
h4Text.textContent = myDate;
console.log(h4Text);
