"use strict";


const buttonCard = document.querySelector(".js-button-card");
const cardCreated = document.querySelector(".js-card-created");




buttonCard.addEventListener("click", (ev) => {
    ev.preventDefault();
    console.log("La usuaria ha hecho click");
    cardCreated.innerHTML = "La tarjeta ha sido creada";
});
