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

// Inicializa la primera columna "Diseña" como abierta
Desplega.classList.remove("collapsed");
jsbtnadd.classList.add("js-btn-rotate");

// Función para abrir y cerrar "Diseña"
function CollFormu() {
  if (Desplega.classList.contains("collapsed")) {
    Desplega.classList.remove("collapsed");
    jsbtnadd.classList.add("js-btn-rotate");
  } else {
    Desplega.classList.add("collapsed");
    jsbtnadd.classList.remove("js-btn-rotate");
    CollFormuSkill();  // Si "Diseña" se cierra, abre "Skills"
  }
}

jsbtnadd.addEventListener("click", CollFormu);
titleDesign.addEventListener("click", CollFormu);

// Inicializa "Skills" cerrada
Desplegaskill.classList.add("collapsed");

// Función para abrir y cerrar "Skills"
function CollFormuSkill() {
  if (Desplegaskill.classList.contains("collapsed")) {
    Desplegaskill.classList.remove("collapsed");
    jsbnsk.classList.add("js-btn-rotate");
  } else {
    Desplegaskill.classList.add("collapsed");
    jsbnsk.classList.remove("js-btn-rotate");
    CollFormuSh();  // Si "Skills" se cierra, abre "Comparte"
  }
}

jsbnsk.addEventListener("click", CollFormuSkill);
titleSkills.addEventListener("click", CollFormuSkill);

// Inicializa "Compara" cerrada
Desplegash.classList.add("collapsed");

// Función para abrir y cerrar "Comparte"
function CollFormuSh() {
  if (Desplegash.classList.contains("collapsed")) {
    Desplegash.classList.remove("collapsed");
    jsbnsh.classList.add("js-btn-rotate");
  } else {
    Desplegash.classList.add("collapsed");
    jsbnsh.classList.remove("js-btn-rotate");
  }
}

titleShare.addEventListener("click", CollFormuSh);
jsbnsh.addEventListener("click", CollFormuSh);
