// *** Wrappers ***
const editModalEl = document.querySelector(".modal_type_edit");
const editFormModal = document.querySelector(".modal__form_type_edit");
const addModalEl = document.querySelector(".modal_type_add");
const addFormModal = document.querySelector(".modal__form_type_add");
const imagePreviewModalEl = document.querySelector(".modal_type_image-preview");
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


// *** Input errors ***
const editInputNameError = document.querySelector("#modal__name-error");
const editInputProfessionError = document.querySelector("#modal__profession-error");
const addInputNameError = document.querySelector("#modal__card-name-error");
const addInputLinkError = document.querySelector("#modal__card-link-error");


// *** Event handlers ***
const openModal = (modal) => {
    modal.classList.add("modal_open");
    modal.addEventListener("click", closeModalByClick);
    document.addEventListener("keydown", closeModalByEscapeKey);
}

const openEditModal = (e) => {
    modalInputName.value = profileName.textContent;
    editInputNameError.textContent = "";
    modalInputProfession.value = profileProfession.textContent;
    editInputProfessionError.textContent = "";
    editFormValidator.removeValidationErrors()
    editFormValidator.disableSubmitButton()
    openModal(editModalEl);
}

const openAddCardModal = (e) => {
    modalInputCardName.value = "";
    addInputNameError.textContent = "";
    modalInputCardLink.value = "";
    addInputLinkError.textContent = "";
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
    renderCard(newCard, placesList);
    closeModal(addModalEl);
}

const closeModal = (modal) => {
    modal.classList.remove("modal_open");
    modal.removeEventListener("click", closeModalByClick);
    document.removeEventListener("keydown", closeModalByEscapeKey);
}

const closeModalByClick = (e) => {
    const modalOpen = document.querySelector(".modal_open");
    if(e.target === modalOpen) {
        closeModal(modalOpen);
    };
}

const closeModalByEscapeKey = (e) => {
    const modalOpen = document.querySelector(".modal_open");
    if(e.key === "Escape") {
        closeModal(modalOpen);
    };
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
import FormValidator from "./FormValidator.js";

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
import Card from "./Card.js";
import initialCards from "./initial-cards.js";

const cardSelector = ".card__template";

const renderCard = (data, container) => {
    const card = new Card(data, cardSelector);
    container.prepend(card._generateCard(data, cardSelector));
}

initialCards.forEach((data) => {
    renderCard(data, placesList);
});