'use strict';



//que solo salga el desplegable cuando elija una clase con un rol equivocado





/*Que cuando le de al boton de cerrar se me cierre el pop up

    -seleccionar el boton de cerrar
    -cuando la usuaria clicke ocultarlo
*/


const popup = document.querySelector(".js-pop-up");
const button = document.querySelector(".js-close-button");

function handleClosePopuop() {
    console.log("ha hecho click en cerrar");
    popup.classList.add("hidden")

}

button.addEventListener("click", handleClosePopuop); /* no le pongo los () a handleClosePopuop porque no soy yo quein la ejecuta, sino el navegador */













