"use strict";

const data = {
    "field1": 0,
    "field2": "",
    "field3": "",
    "field4": "",
    "field5": "",
    "photo": ""
};

//NOMBRE
const nameUser = document.querySelector(".js-name");
const title = document.querySelector(".js-preview");


nameUser.addEventListener("input", (event) => {
    title.innerHTML = event.target.value;
    data.field2 = event.target.value;

});

//PALETAS DE COLORES

const palette1 = document.querySelector(".js-p-one");
const palette2 = document.querySelector(".js-p-two");
const palette3 = document.querySelector(".js-p-three");

const handlePalette = (event) => {
    data.field5 = event.target.id;

};

palette1.addEventListener("input", handlePalette);
palette2.addEventListener("input", handlePalette);
palette3.addEventListener("input", handlePalette);

//MANA
const inputSpecial = document.querySelector(".js-special-input");
const title2 = document.querySelector(".js-special");

inputSpecial.addEventListener("input", (event) => {
    title2.innerHTML = event.target.value;
    data.field1 = event.target.value;

});
//ROL
const tank = document.querySelector(".js-tank");
const heal = document.querySelector(".js-heal");
const dps = document.querySelector(".js-dps");
const title3 = document.querySelector(".js-skill");

const handleRoleClick = (event) => {
    title3.innerHTML = event.target.value;
    data.field3 = event.target.value;

};

tank.addEventListener("input", handleRoleClick);
heal.addEventListener("input", handleRoleClick);
dps.addEventListener("input", handleRoleClick);

//CRIATURAS

const title4 = document.querySelector(".js-creature");
const creature = document.querySelector(".js-list-creature");

creature.addEventListener("input", (event) => {
    title4.innerHTML = event.target.value;
    data.field4 = event.target.value;

});

//CLASES
const title5 = document.querySelector(".js-class");
const listClass = document.querySelector(".js-list-class");

listClass.addEventListener("input", (event) => {
    title5.innerHTML = event.target.value;
    data.field6 = event.target.value;
});

//AVATAR
const fr = new FileReader();
const fileField = document.querySelector(".js__profile-upload-btn");
const profileImage = document.querySelector(".js__profile-image");
const profilePreview = document.querySelector(".js__profile-preview");

/**
 * Recoge el archivo añadido al campo de tipo "file"
 * y lo carga en nuestro objeto FileReader para que
 * lo convierta a algo con lo que podamos trabajar.
 * Añade un listener al FR para que ejecute una función
 * al tener los datos listos
 * @param {evento} e
 */
function getImage(e) {
    const myFile = e.currentTarget.files[0];
    fr.addEventListener("load", writeImage);
    fr.readAsDataURL(myFile);
}

/**
 * Una vez tenemos los datos listos en el FR podemos
 * trabajar con ellos ;)
 */
function writeImage() {
    /* En la propiedad `result` de nuestro FR se almacena
     * el resultado. Ese resultado de procesar el fichero que hemos cargado
     * podemos pasarlo como background a la imagen de perfil y a la vista previa
     * de nuestro componente.
     */
    profileImage.style.backgroundImage = `url(${fr.result})`;
    profilePreview.style.backgroundImage = `url(${fr.result})`;
    data.photo = fr.result;
    data.photo = fr.result.slice(0, 100); // añadimso esto porqe sino el servidor no deja enviar la foto, nos lo ha dicho el grupo de Kris/Kendal/Raquel/Belen.. el servidor daba error de que era demasiado largo


}

/**
 * Añadimos los listeners necesarios:
 * - al botón visible para generar el click automático
 * - al campo oculto para cuando cambie su value
 */
fileField.addEventListener("change", getImage);



//pruebas servidor -- carmen
/* probes----
const Objectdata = {
    data.field1 = 
    data.field2 =
    data.field3 =
    data.field4 =
    data.field5 =
    data.photo =
    data.photo = fr.result;

};*/

//fusiono el share.js de angela aqui porqe es todo evento de ese boton y cambio lo de ''tarjeta ha sido creada'' quito su js del form


const buttonCard = document.querySelector(".js-button-card");
const cardCreated = document.querySelector(".js-card-created");
const shareX = document.querySelector(".js-share-x");
const linkCard = document.querySelector(".js-link");
const link = document.querySelector(".js-linkApi")



const createCardButton = document.querySelector(".js-button-card");

const handleCreateCard = (ev) => {
    ev.preventDefault();
    shareX.classList.toggle("collapsed");
    console.log("click en crear tajeta")
    fetch("https://dev.adalab.es/api/info/data", {
        method: "POST", //es un post proqe enviamos los datos
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json" }
    })
        .then(response => response.json())
        .then(data => {
            const idCard = data.infoID;

            linkCard.classList.remove("collapsed");
            linkCard.href = `./card.html?id=${idCard}`
            shareX.innerHTML = `<a href="https://twitter.com/intent/tweet?text=My%20character%20sheet%20by%20PURR~SKILLS%20 ฅ•ω•ฅ &hashtags=purrskills,rol,fichapersonaje,sheet,fy😻 
            https://dev.adalab.es/api/info/${idCard}"
                    target="_blank">
                    <button class="button_twitter twitter-share-button">
                        Compartir en
                        <img class="button_twitter_icon2" src="/images/square-x-twitter-brands-solid.svg"
                            alt="twitter icon">
                    </button>
                </a>`
            link.classList.remove("collapsed");
            link.href = `./card.html?id=${idCard}`;
            link.innerHTML = `https://dev.adalab.es/api/info/${idCard}`
        })


}

createCardButton.addEventListener("click", handleCreateCard);









