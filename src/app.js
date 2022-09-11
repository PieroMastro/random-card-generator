/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const suit = ["♦", "♥", "♠", "♣"];
const numbers = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];

window.onload = () => {
  //write your code here

  let randomSuit = Math.floor(Math.random() * suit.length);
  let randomNumber = Math.floor(Math.random() * numbers.length);

  let suitTop = document.querySelector(".suit-top");
  suitTop.innerHTML = suit[randomSuit];

  let suitBottom = document.querySelector(".suit-bottom");
  suitBottom.innerHTML = suit[randomSuit];

  let number = document.querySelector(".number");
  number.innerHTML = numbers[randomNumber];
};
