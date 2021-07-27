import {openModal, closeModal, imagePreviewModalEl} from "./utils.js";
import initialCards from "../scripts/initial-cards.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

// *** Wrappers ***
const editModalEl = document.querySelector(".modal_type_edit");
const editFormModal = document.querySelector(".modal__form_type_edit");
const addModalEl = document.querySelector(".modal_type_add");
const addFormModal = document.querySelector(".modal__form_type_add");
const placesList = document.querySelector(".places__list");


// *** DOM elements ***
const profileName = document.querySelector(".profile__name");
const profileProfession = document.querySelector(".profile__profession");


// *** Buttons ***
const profileEditButton = document.querySelector(".profile__edit-button");
const editModalCloseButton = document.querySelector(".modal__close-button_type_edit");
const cardAddButton = document.querySelector(".profile__add-button");
const addModalCloseButton = document.querySelector(".modal__close-button_type_add");
const imageModalCloseButton = document.querySelector(".modal__close-button_type_image");


// *** Form data ***
const modalInputName = document.querySelector(".modal__input_content_name");
const modalInputProfession = document.querySelector(".modal__input_content_profession");
const modalInputCardName = document.querySelector(".modal__input_content_card-name");
const modalInputCardLink = document.querySelector(".modal__input_content_card-link");


// *** Event handlers ***
const openEditModal = (e) => {
    modalInputName.value = profileName.textContent;
    modalInputProfession.value = profileProfession.textContent;
    editFormValidator.removeValidationErrors();
    editFormValidator.disableSubmitButton();
    openModal(editModalEl);
}

const openAddCardModal = (e) => {
    addFormModal.reset();
    addFormValidator.removeValidationErrors();
    addFormValidator.disableSubmitButton();
    openModal(addModalEl);
}

const submitEditModal = (event) => {
    event.preventDefault();
    profileName.textContent = modalInputName.value;
    profileProfession.textContent = modalInputProfession.value;
    closeModal(editModalEl);
}

const submitAddModal = (event) => {
    event.preventDefault();
    const newCard = {name: modalInputCardName.value, link: modalInputCardLink.value};
    renderCard(createCard(newCard, cardSelector), placesList); 
    closeModal(addModalEl);
}


// *** Event listeners (click) ***
profileEditButton.addEventListener("click", openEditModal);

editModalCloseButton.addEventListener("click", () => {
    closeModal(editModalEl);
});

cardAddButton.addEventListener("click", openAddCardModal);

addModalCloseButton.addEventListener("click", () => {
    closeModal(addModalEl);
});

imageModalCloseButton.addEventListener("click", () => {
    closeModal(imagePreviewModalEl);
});


// *** Event listeners (submit) ***
editFormModal.addEventListener("submit", submitEditModal);

addFormModal.addEventListener("submit", submitAddModal);


// *** FormValidator ***
const settings = {
    _inputSelector: ".modal__input",
    _submitButtonSelector: ".modal__save-button",
    _inputErrorClass: "modal__input-error",
    _errorClass: "modal__input-error_active",
    _inactiveButtonClass: "modal__save-button_inactive"
}

const editFormValidator = new FormValidator(settings, editFormModal);
const addFormValidator = new FormValidator(settings, addFormModal);

editFormValidator.enableValidation();
addFormValidator.enableValidation();


// *** Cards ***
const cardSelector = ".card__template"; 

const createCard = (data, cardSelector) => {
    const card = new Card(data, cardSelector);
    return card._generateCard(data, cardSelector);
}

const renderCard = (card, container) => { 
    container.prepend(card); 
} 

initialCards.forEach((data) => { 
    renderCard(createCard(data, cardSelector), placesList); 
}); 