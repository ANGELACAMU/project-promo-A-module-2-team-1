"use strict";


const buttonCard = document.querySelector(".js-button-card");
const cardCreated = document.querySelector(".js-card-created");
const shareX = document.querySelector(".js-share-x");




buttonCard.addEventListener("click", (ev) => {
    ev.preventDefault();
    shareX.classList.toggle("collapsed");
    cardCreated.innerHTML = "La tarjeta ha sido creada";
});

/* GUARDO LOS DATOS QUE ESCRIBE LA USUARIA EN EL SERVIDOR
Cuando la usuaria haga click en Crear Tarjeta,
   -Enviar los datos del formulario al servidor (POST)
    Recoger el id que me devuelve el servidor
    Mostrar el enlace de la nueva página
    Modificar la dirección de ese enlace con el id*/

/* OBTENGO LOS DATOS DEL SERVIDOR PARA PINTAR LA TARJETA 
- Crear una página nueva de html para mostrar la tarjeta
       Recoger el id de la url para saber que tarjeta pintar
       Pedir al servidor los datos de esa tarjeta
       Pinto los datos en mi html*/


const dataForm = {
    field1: 0,
    field2: "",
    field3: "",
    field4: "",
    field5: "",
    photo: "",
};