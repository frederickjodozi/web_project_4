import "./styles/index.css";
import {initialCards, cardSelector, placesList, editModalEl, editFormModal, addModalEl, addFormModal, profileEditButton,
       cardAddButton, profileName, profileProfession} from "./utils/constants.js";
import {handleCardClick} from "./utils/utils.js";
import Section from "./components/Section.js";
import Card from "./components/card.js";
import PopupWithForm from "./components/popup-with-form.js";
import FormValidator from "./components/form-validator.js";

import headerImage from "./images/header__logo.svg";
import profileImage from "./images/profile__image.jpg";



// *** Images ***
const headerLogo = document.querySelector(".header__logo");
headerLogo.src = headerImage;

const profilePicture = document.querySelector(".profile__image");
profilePicture.src = profileImage;


/*function handleAddFormSubmit (event) {
    event.preventDefault();
    const newCard = {name: modalInputCardName.value, link: modalInputCardLink.value};
    renderCard(createCard(newCard, cardSelector), placesList); 
} */
// *** User Info ***
/*const userInfo = new userInfo({
    userNameSelector: profileConfig.profileTitle,
    userDescriptionSelector: profileConfig.profileDescription
}); */


// *** Forms ***
const editFormPopup = new PopupWithForm(editModalEl);
const addFormPopup = new PopupWithForm(addModalEl);

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

export {editFormValidator, addFormValidator, formSettings};//
