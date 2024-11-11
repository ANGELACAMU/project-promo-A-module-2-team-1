'use strict'
console.log("konichiwa sekai");


const rolHeal = document.querySelector(".js-heal");
const creatureSelect = document.querySelector(".js-list-creature");
const popup = document.querySelector(".js-pop-up");
const button = document.querySelector(".js-close-button");

// Verificar si se cumplen las condiciones para mostrar el pop-up
function showPopup() {
    // Obtenemos el valor de la criatura seleccionada
    const selectedCreature = creatureSelect.value;

    //
    if (
        rolHeal.checked &&  //  'Heal' esté seleccionado con .cheked y las dos barras son este o este o este o este
        (selectedCreature === 'Zombie' ||
            selectedCreature === 'Vampiro' ||
            selectedCreature === 'Orco' ||
            selectedCreature === 'No-muerto')
    ) {
        popup.classList.remove("hidden");
    }
}


rolHeal.addEventListener("change", showPopup);
creatureSelect.addEventListener("change", showPopup);


function closePopup() {
    popup.classList.add("hidden");
}


button.addEventListener("click", closePopup);

