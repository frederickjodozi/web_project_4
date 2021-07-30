import {initialCards, editModalEl, editFormModal, addModalEl, addFormModal, placesList,
    profileName, profileProfession, profileEditButton, editModalCloseButton, cardAddButton, addModalCloseButton,
    imageModalCloseButton, modalInputName, modalInputProfession, modalInputCardName, modalInputCardLink, imagePreviewModalEl,
     imagePreviewEl, captionPreviewEl, cardSelector} from "../utils/constants.js";
import handleCardClick from "../utils/utils.js";
import Card from "../components/card.js";
import Popup from "../components/popup.js";
import PopupWithImage from "../components/popup-with-image.js";
import PopupWithForm from "../components/popup-with-form.js";
import FormValidator from "../components/form-validator.js";
import Section from "../components/Section.js";

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
const originalCards = new Section({
    items: initialCards, 
    renderer: (item) => {
        const card = new Card({item, handleCardClick}, cardSelector);
        const cardElement = card.generateCard();
        originalCards.addItem(cardElement);
    }
}, placesList);

originalCards.renderItems(); 
