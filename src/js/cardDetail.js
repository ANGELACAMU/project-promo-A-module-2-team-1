'use strict';


const urlParm = new URLSearchParams(window.location.search);
const id = urlParm.get("id");
const titleCard = document.querySelector(".js-preview");


fetch(`https://dev.adalab.es/api/info/${id}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const cardData = data.data;
        titleCard.innerHTML = cardData.field2;


    })


//continuar minuto 55 del video, falta pintar los datos, solo esta pintado el nombre


