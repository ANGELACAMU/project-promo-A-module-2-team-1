"use strict";

const nameUser = document.querySelector(".js-name");
const title = document.querySelector(".js-preview");

nameUser.addEventListener("input", (event) => {
    title.innerHTML = event.target.value;
})
