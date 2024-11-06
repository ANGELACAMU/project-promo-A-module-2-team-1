"use strict";

const jsbtnadd = document.querySelector(".js-btn-add");
const jsbnsk = document.querySelector(".js-btn-add-skill");
const Desplega = document.querySelector(".js-collapsed");
const Desplegaskill = document.querySelector(".js-collapsed-skill");
const Desplegash = document.querySelector(".js-collapsed-sh");
const jsbnsh = document.querySelector(".js-btn-add-sh");
const titleDesign = document.querySelector(".js-container");
const titleSkills = document.querySelector(".js-title-skills");
const titleShare = document.querySelector(".js-title-sh");

jsbtnadd.classList.toggle("js-btn-rotate");

function CollFormu() {
  Desplega.classList.toggle("collapsed");
  jsbtnadd.classList.toggle("js-btn-rotate");
}

jsbtnadd.addEventListener("click", CollFormu);
titleDesign.addEventListener("click", CollFormu);

Desplegaskill.classList.add('collapsed');

function CollFormuSkill() {
  Desplegaskill.classList.toggle('collapsed');
  jsbnsk.classList.toggle('js-btn-rotate');


};

jsbnsk.addEventListener("click", CollFormuSkill);
titleSkills.addEventListener("click", CollFormuSkill);

Desplegash.classList.add("collapsed");
function CollFormuSh() {
  Desplegash.classList.toggle('collapsed');
  jsbnsh.classList.toggle('js-btn-rotate');

};
titleShare.addEventListener("click", CollFormuSh);
jsbnsh.addEventListener("click", CollFormuSh);







let lastScrollTop = 0;
const btnAdd = document.querySelector(".js-btn-add");
