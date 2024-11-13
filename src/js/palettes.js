"use strict";

const paletteOnePreview = document.querySelector(".palette-preview-one");
const paletteTwoPreview = document.querySelector(".palette-preview-two");
const paletteThreePreview = document.querySelector(".palette-preview-three");
const buttonPaletteOne = document.querySelector(".one");
const buttonPaletteTwo = document.querySelector(".two");
const buttonPaletteThree = document.querySelector(".three");
const containerPreview = document.querySelector(".container-preview");

function clearPalettes() {
  containerPreview.classList.remove("palette-preview-one");
  containerPreview.classList.remove("palette-preview-two");
  containerPreview.classList.remove("palette-preview-three");
}

//Paleta uno
function addColorPaletteOne() {
  clearPalettes();
  containerPreview.classList.add("palette-preview-one");
}

buttonPaletteOne.addEventListener("click", addColorPaletteOne);

//Paleta dos
function addColorPaletteTwo() {
  clearPalettes();
  containerPreview.classList.add("palette-preview-two");
}

buttonPaletteTwo.addEventListener("click", addColorPaletteTwo);

//Paleta tres
function addColorPaletteThree() {
  clearPalettes();
  containerPreview.classList.add("palette-preview-three");
}

buttonPaletteThree.addEventListener("click", addColorPaletteThree);
