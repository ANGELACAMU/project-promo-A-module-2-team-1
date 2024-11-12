"use strict";

//boton share
const buttonCard = document.querySelector(".js-button-card");
const cardCreated = document.querySelector(".js-card-created");
const shareX = document.querySelector(".js-share-x");
const linkCard = document.querySelector(".link-card");
const title = document.querySelector(".js-preview");

buttonCard.addEventListener("click", (ev) => {
  //   ev.preventDefault();
  shareX.classList.toggle("collapsed");
  cardCreated.innerHTML = "La tarjeta ha sido creada";
});

const dataForm = {
  field1: 0,
  field2: "",
  field3: "",
  field4: "",
  field5: "",
  field6: "",
  photo: "",
};
console.log(dataForm);
//llamada al servidor para la tarjeta

function handleCreateCard(event) {
  event.preventDefault();
  fetch("https://dev.adalab.es/api/info/data", {
    method: "POST",
    body: JSON.stringify(dataForm),
    headers: { "content-type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      const idCard = data.infoID;
      const createdAt = data.createdAt;
      linkCard.classList.remove("collapsed");
      linkCard.href = `../card.html?id=${idCard}`;
      shareX.innerHTML = `<a href="https://twitter.com/intent/tweet?text=My%20character%20sheet%20by%20PURR~SKILLS%20 ฅ•ω•ฅ &hashtags=purrskills,rol,fichapersonaje,sheet,fy:heart_eyes_cat:
      https://dev.adalab.es/api/info/${idCard}"
              target="_blank">
              <button class="button_twitter twitter-share-button">
                  Compartir en
                  <img class="button_twitter_icon2" src="/images/square-x-twitter-brands-solid.svg"
                      alt="twitter icon">
              </button>
          </a>`;
      fetch(`https://dev.adalab.es/api/info/${idCard}`)
        .then((response) => response.json())
        .then((data) => {
          const cardData = data.data;
          console.log(cardData);
          nameUser.innerHTML = cardData.field2;
          inputSpecial.innerHTML = cardData.field1;
          title3.innerHTML = cardData.field3;
          creature.innerHTML = cardData.field4;
          listClass.innerHTML = cardData.field5;
        });
    });
}
const urlParam = new URLSearchParams(window.location.search);
const id = urlParam.get("id");

linkCard.addEventListener("click", handleCreateCard);

//NOMBRE
const nameUser = document.querySelector(".js-name");

nameUser.addEventListener("input", (event) => {
  title.innerHTML = event.target.value;
  dataForm.field2 = event.target.value;
  console.log();
});

//PALETAS DE COLORES

const palette1 = document.querySelector(".js-p-one");
const palette2 = document.querySelector(".js-p-two");
const palette3 = document.querySelector(".js-p-three");

const handlePalette = (event) => {
  dataForm.field6 = event.target.id;
};

palette1.addEventListener("input", handlePalette);
palette2.addEventListener("input", handlePalette);
palette3.addEventListener("input", handlePalette);

//MANA
const inputSpecial = document.querySelector(".js-special-input");
const title2 = document.querySelector(".js-special");

inputSpecial.addEventListener("input", (event) => {
  title2.innerHTML = event.target.value;
  dataForm.field1 = event.target.value;
});
//ROL
const tank = document.querySelector(".js-tank");
const heal = document.querySelector(".js-heal");
const dps = document.querySelector(".js-dps");
const title3 = document.querySelector(".js-skill");

const handleRoleClick = (event) => {
  title3.innerHTML = event.target.value;
  dataForm.field3 = event.target.value;
};

tank.addEventListener("input", handleRoleClick);
heal.addEventListener("input", handleRoleClick);
dps.addEventListener("input", handleRoleClick);

//CRIATURAS

const title4 = document.querySelector(".js-creature");
const creature = document.querySelector(".js-list-creature");

creature.addEventListener("input", (event) => {
  title4.innerHTML = event.target.value;
  dataForm.field4 = event.target.value;
});

//CLASES
const title5 = document.querySelector(".js-class");
const listClass = document.querySelector(".js-list-class");

listClass.addEventListener("input", (event) => {
  title5.innerHTML = event.target.value;
  dataForm.field5 = event.target.value;
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
  dataForm.photo = fr.result;
}

/**
 * Añadimos los listeners necesarios:
 * - al botón visible para generar el click automático
 * - al campo oculto para cuando cambie su value
 */
fileField.addEventListener("change", getImage);
