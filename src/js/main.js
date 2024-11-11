"use strict";

const dataForm = {
  field1: 0,
  field2: "",
  field3: "",
  field4: "",
  field5: "",
  field6: "",
  photo: "",
};

//NOMBRE
const nameUser = document.querySelector(".js-name");
const title = document.querySelector(".js-preview");

nameUser.addEventListener("input", (event) => {
  title.innerHTML = event.target.value;
  dataForm.field2 = event.target.value;
  console.log(dataForm);
});

//PALETAS DE COLORES

const palette1 = document.querySelector(".js-p-one");
const palette2 = document.querySelector(".js-p-two");
const palette3 = document.querySelector(".js-p-three");

const handlePalette = (event) => {
  dataForm.field6 = event.target.id;
  console.log(dataForm);
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
  console.log(dataForm);
});
//ROL
const tank = document.querySelector(".js-tank");
const heal = document.querySelector(".js-heal");
const dps = document.querySelector(".js-dps");
const title3 = document.querySelector(".js-skill");

const handleRoleClick = (event) => {
  title3.innerHTML = event.target.value;
  dataForm.field3 = event.target.value;
  console.log(dataForm);
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
  console.log(dataForm);
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
  console.log(dataForm);
}

/**
 * Añadimos los listeners necesarios:
 * - al botón visible para generar el click automático
 * - al campo oculto para cuando cambie su value
 */
fileField.addEventListener("change", getImage);
