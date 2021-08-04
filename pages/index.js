import {initialCards, cardSelector, placesList, editModalEl, editFormModal, addModalEl, addFormModal, profileEditButton,
       cardAddButton} from "../utils/constants.js";
import {handleCardClick, handleEditFormSubmit, handleAddFormSubmit} from "../utils/utils.js";
import Section from "../components/Section.js";
import Card from "../components/card.js";
import PopupWithForm from "../components/popup-with-form.js";
import FormValidator from "../components/form-validator.js";


// *** Forms ***
const editFormPopup = new PopupWithForm(editModalEl, handleEditFormSubmit);
const addFormPopup = new PopupWithForm(addModalEl, handleAddFormSubmit);

profileEditButton.addEventListener("click", () => {
    editFormPopup.open();
    editFormValidator.removeValidationErrors();
    editFormValidator.disableSubmitButton();
});

cardAddButton.addEventListener("click", () => {
    addFormPopup.open();
    addFormValidator.removeValidationErrors();
    addFormValidator.disableSubmitButton();
});


// *** FormValidator ***
const formSettings = {
    _inputSelector: ".modal__input",
    _submitButtonSelector: ".modal__save-button",
    _inputErrorClass: "modal__input-error",
    _errorClass: "modal__input-error_active",
    _inactiveButtonClass: "modal__save-button_inactive"
}

const editFormValidator = new FormValidator(formSettings, editFormModal);
const addFormValidator = new FormValidator(formSettings, addFormModal);

editFormValidator.enableValidation();
addFormValidator.enableValidation();


// *** User Info ***
/*const userInfo = new userInfo({
    userNameSelector: profileConfig.profileTitle,
    userDescriptionSelector: profileConfig.profileDescription
}); */

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

export {editFormValidator, addFormValidator, formSettings};
