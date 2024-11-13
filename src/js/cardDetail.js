'use strict';


const urlParm = new URLSearchParams(window.location.search);
const id = urlParm.get("id");
const titleCard = document.querySelector(".js-preview");
const creaturaCard = document.querySelector(".js-creature");
const rolCard = document.querySelector(".js-skill");
const claseCard = document.querySelector(".js-class");
const colorCard = document.querySelector(".paletteThree-three");
const profilePreview = document.querySelector(".js__profile-image");
const manaCard = document.querySelector(".js-special");


fetch(`https://dev.adalab.es/api/info/${id}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const cardData = data.data;
        manaCard.innerHTML = cardData.field1;
        titleCard.innerHTML = cardData.field2;
        rolCard.innerHTML = cardData.field3;
        creaturaCard.innerHTML = cardData.field4;
        //colorCard.add("palette-preview-one") = cardData.field5;
        claseCard.innerHTML = cardData.field6;
        //profilePreview.style.backgroundImage = `url(${cardData.photo})`;




    })





