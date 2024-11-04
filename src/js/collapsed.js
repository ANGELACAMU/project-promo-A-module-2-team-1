"use strict";


const jsbtnadd = document.querySelector(".js-btn-add");
const jsbnsk = document.querySelector(".js-btn-add-skill")
const Desplega = document.querySelector(".js-collapsed");
const Desplegaskill = document.querySelector(".js-collapsed-skill");
const Desplegash = document.querySelector(".js-collapsed-sh");
const jsbnsh = document.querySelector(".js-btn-add-sh");
const container = document.querySelector(".js-container");

container.addEventListener("click", CollFormu);

jsbtnadd.classList.toggle('js-btn-rotate');

function CollFormu() {
  Desplega.classList.toggle('collapsed');
  jsbtnadd.classList.toggle('js-btn-rotate');
  console.log("apretar boton");

};


jsbtnadd.addEventListener("click", CollFormu);


Desplegaskill.classList.add('collapsed');

function CollFormuSkill() {
  Desplegaskill.classList.toggle('collapsed');
  jsbnsk.classList.toggle('js-btn-rotate');
  console.log("apretar boton");

};


jsbnsk.addEventListener("click", CollFormuSkill);

Desplegash.classList.add('collapsed');
function CollFormuSh() {
  Desplegash.classList.toggle('collapsed');
  jsbnsh.classList.toggle('js-btn-rotate');
  console.log("apretar boton");
};

jsbnsh.addEventListener("click", CollFormuSh);

let lastScrollTop = 0;
const btnAdd = document.querySelector('.js-btn-add');

