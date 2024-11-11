"use strict";
const btnAdd = document.querySelector(".js-btn-add");
const btnAddSkill = document.querySelector(".js-btn-add-skill");
const collapsibleSection = document.querySelector(".js-collapsed");
const collapsibleSkill = document.querySelector(".js-collapsed-skill");
const collapsibleShare = document.querySelector(".js-collapsed-sh");
const btnAddSH = document.querySelector(".js-btn-add-sh");
const titleDesign = document.querySelector(".js-container");
const titleSkills = document.querySelector(".js-title-skills");
const titleShare = document.querySelector(".js-title-sh");

// Agregar o quitar clase para animación en el primer botón
btnAdd.classList.toggle("js-btn-rotate");

function toggleCollapse() {
  if (collapsibleSection.classList.contains("collapsed") === false) {
    collapsibleSection.classList.add("collapsed");
    btnAdd.classList.remove("js-btn-rotate");
  } else {
    collapsibleSection.classList.remove("collapsed");
    btnAdd.classList.add("js-btn-rotate");
  }
}

btnAdd.addEventListener("click", toggleCollapse);
titleDesign.addEventListener("click", toggleCollapse);

// Establecer el estado inicial del segundo contenedor
collapsibleSkill.classList.add("collapsed");

function toggleSkillCollapse() {
  if (collapsibleSkill.classList.contains("collapsed") === false) {
    collapsibleSkill.classList.add("collapsed");
    btnAddSkill.classList.remove("js-btn-rotate");
  } else {
    collapsibleSkill.classList.remove("collapsed");
    btnAddSkill.classList.add("js-btn-rotate");
  }
}

btnAddSkill.addEventListener("click", toggleSkillCollapse);
titleSkills.addEventListener("click", toggleSkillCollapse);

// Configuración inicial del tercer contenedor
collapsibleShare.classList.add("collapsed");

function toggleShareCollapse() {
  if (collapsibleShare.classList.contains("collapsed") === false) {
    collapsibleShare.classList.add("collapsed");
    btnAddSH.classList.remove("js-btn-rotate");
  } else {
    collapsibleShare.classList.remove("collapsed");
    btnAddSH.classList.add("js-btn-rotate");
  }
}

btnAddSH.addEventListener("click", toggleShareCollapse);
titleShare.addEventListener("click", toggleShareCollapse);