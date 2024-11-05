"use strict";



//NOMBRE
const nameUser = document.querySelector(".js-name");
const title = document.querySelector(".js-preview");


nameUser.addEventListener("input", (event) => {
    title.innerHTML = event.target.value;

})

//ESPECIAL FINISHER
const inputSpecial = document.querySelector(".js-special-input");
const title2 = document.querySelector(".js-special");

inputSpecial.addEventListener("input", (event) => {
    title2.innerHTML = event.target.value;

})
//ROL
const tank = document.querySelector(".js-tank");
const heal = document.querySelector(".js-heal");
const dps = document.querySelector(".js-dps");
const title3 = document.querySelector(".js-skill");


tank.addEventListener("input", (event) => {
    title3.innerHTML = event.target.value;

})

heal.addEventListener("input", (event) => {
    title3.innerHTML = event.target.value;

})

dps.addEventListener("input", (event) => {
    title3.innerHTML = event.target.value;

})
//CRIATURAS

const title4 = document.querySelector(".js-creature");
const creature = document.querySelector(".js-list-creature");

creature.addEventListener("input", (event) => {
    title4.innerHTML = event.target.value;

})

//CLASES
const title5 = document.querySelector(".js-class");
const listClass = document.querySelector(".js-list-class");

listClass.addEventListener("input", (event) => {
    title5.innerHTML = event.target.value;

})




