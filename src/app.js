/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let suits = ["♣", "♦", "♥", "♠"];
  let cardDeck = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  let randomSuits = suits[Math.floor(Math.random() * suits.length)];
  let randomCardDeck = cardDeck[Math.floor(Math.random() * cardDeck.length)];

  let colorDiamond = randomSuits == suits[1] ? "text-danger" : " ";
  let colorHeart = randomSuits == suits[2] ? "text-danger" : " ";

  const randomCardFather = document.getElementById("app");
  const randomCard = document.createElement("div");
  randomCard.innerHTML = `
  <div
        class="card col-auto p-0"
        style="min-width: 20rem; min-height: 20rem;"
      >
        <div class="card-header bg-transparent border-0 text-start ${colorDiamond} ${colorHeart}">${randomSuits}</div>
        <div class="card-body">
          <h1 class="card-title text-center">${randomCardDeck}</h1>
        </div>
        <div
          class="card-footer bg-transparent border-0 text-end ${colorDiamond} ${colorHeart}"
        >${randomSuits}</div>
      </div>
  `;
  randomCardFather.appendChild(randomCard);
};
