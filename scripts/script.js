// *** Wrappers ***
const modalEl = document.querySelector(".modal");
const formModal = document.querySelector(".modal__form");

// *** DOM elements ***
const profileName = document.querySelector(".profile__name")
const profileProfession = document.querySelector(".profile__profession");

// *** Buttons ***
const profileEditButton = document.querySelector(".profile__edit-button");
const modalCloseButton = document.querySelector(".modal__close-button");

// *** Form Data ***
const modalInputName = document.querySelector(".modal__input_content_name");
const modalInputProfession = document.querySelector(".modal__input_content_profession");

// *** Event listeners ***
profileEditButton.addEventListener("click", toggleModal);
modalCloseButton.addEventListener("click", toggleModal);
formModal.addEventListener("submit", saveAndCloseModal);


function toggleModal () {
    if(modalEl.classList.contains("modal_open")) {
        modalInputName.value = profileName.textContent;
        modalInputProfession.value = profileProfession.textContent;
    }

    modalEl.classList.toggle("modal_open");
}

function saveAndCloseModal(event) {
    event.preventDefault();
    profileName.textContent = modalInputName.value;
    profileProfession.textContent = modalInputProfession.value;
    toggleModal();
}

/*
const cardLikeButton = document.querySelectorAll(".card__like-button");

for (const element of cardLikeButton) {
element.addEventListener("click", function () {
    element.classList.toggle("card__like-button_active");
})};
*/


