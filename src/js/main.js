"use strict";

const nameUser = document.querySelector(".js-name");
const title = document.querySelector(".js-preview");

nameUser.addEventListener("input", (event) => {
    title.innerHTML = event.target.value;
})


const inputSpecial = document.querySelector(".js-special-input");
const title2 = document.querySelector(".js-special");

inputSpecial.addEventListener("input", (event) => {
    title2.innerHTML = event.target.value;
})

