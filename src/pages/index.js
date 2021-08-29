import "../pages/index.css";
import {initialCards, cardSelector, placesList, editModalEl, editFormModal,
       addModalEl, addFormModal, profileEditButton, cardAddButton, profileName,
       profileProfession, modalInputName, modalInputProfession, formSettings,
       headerLogo, profilePicture} from "../utils/constants.js";
import {renderItem, handleCardClick} from "../utils/utils.js";
import Section from "../components/Section.js";
import Card from "../components/card.js";
import PopupWithForm from "../components/popup-with-form.js";
import UserInfo from "../components/user-info.js";
import FormValidator from "../components/form-validator.js";

import headerImage from "../images/header__logo.svg";
import profileImage from "../images/profile__image.jpg";


// *** Profile ***
headerLogo.src = headerImage;
profilePicture.src = profileImage;

const userInfo = new UserInfo(profileName, profileProfession);


// *** Forms ***
const editFormPopup = new PopupWithForm(editModalEl, (data) => {
    userInfo.setUserInfo(data);
    editFormPopup.close();
    });

const addFormPopup = new PopupWithForm(addModalEl, (item) => {
        originalCards.addItem(renderItem(item));
});

profileEditButton.addEventListener("click", () => {
    editFormPopup.open();
    modalInputName.value = userInfo.getUserInfo().name.textContent;
    modalInputProfession.value = userInfo.getUserInfo().profession.textContent;
    editFormValidator.removeValidationErrors();
    editFormValidator.disableSubmitButton();
});

cardAddButton.addEventListener("click", () => {
    addFormPopup.open();
    addFormValidator.removeValidationErrors();
    addFormValidator.disableSubmitButton();
});


// *** FormValidator ***
const editFormValidator = new FormValidator(formSettings, editFormModal);
const addFormValidator = new FormValidator(formSettings, addFormModal);

editFormValidator.enableValidation();
addFormValidator.enableValidation();


// *** Original Cards ***
const originalCards = new Section({
    items: initialCards, 
    renderer: (item) => {
        originalCards.addItem(renderItem(item));
    }
}, placesList);

originalCards.renderItems(); 
