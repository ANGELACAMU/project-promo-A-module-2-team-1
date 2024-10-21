"user strict";


const jsbtnadd = document.querySelector(".js-btn-add");
const Desplega =document.querySelector(".js-collapsed");

function CollFormu( ) {
  Desplega.classList.toggle('collapsed');
  console.log("apretar boton");
};

 jsbtnadd.addEventListener("click", CollFormu);
 

