import "../pages/index.css";
import {headerLogo, profileName, profileProfession, profileImage, placesList,
       editModalEl, editFormModal, addModalEl, addFormModal, profileEditButton,
       cardAddButton, modalInputName, modalInputProfession, formSettings}
       from "../utils/constants.js";
import {renderItem} from "../utils/utils.js";
import Section from "../components/section.js";
import PopupWithForm from "../components/popup-with-form.js";
import UserInfo from "../components/user-info.js";
import FormValidator from "../components/form-validator.js";
import Api from "../components/api.js";
import headerImage from "../images/header__logo.svg";

// *** Api ***
const api = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/group-13",
    authToken: "487d57fd-0c04-4caf-a7fc-6016fd47c784"
});


// *** Profile ***
headerLogo.src = headerImage;

const userInfo = new UserInfo(profileName, profileProfession, profileImage);

api.getUserInfo().then(data => {
    userInfo.setUserInfo(data);
})

// *** Original Cards ***
api.getCards().then(data => {
    const originalCards = new Section({
        items: data, 
        renderer: (items) => {
            originalCards.addItem(renderItem(items));
        }
    }, placesList); 
    originalCards.renderItems(renderItem(data));
});


// *** Forms ***
const editFormPopup = new PopupWithForm(editModalEl, (data) => {
    api.editUserInfo(data).then(data => {
        userInfo.setUserInfo(data);
    })
    editFormPopup.close();
});

const addFormPopup = new PopupWithForm(addModalEl, (data) => {
    api.addCard(data).then(data => {
        console.log(data)
        const originalCards = new Section({
            items: data, 
            renderer: (items) => {
                originalCards.addItem(renderItem(items));
            }
        }, placesList); 
    });
    addFormPopup.close();
});

profileEditButton.addEventListener("click", () => {
    editFormPopup.open();
    editFormPopup.setEventListeners();
    modalInputName.value = userInfo.getUserInfo().name;
    modalInputProfession.value = userInfo.getUserInfo().profession;
    editFormValidator.removeValidationErrors();
    editFormValidator.disableSubmitButton();
});

cardAddButton.addEventListener("click", () => {
    addFormPopup.open();
    addFormPopup.setEventListeners();
    addFormValidator.removeValidationErrors();
    addFormValidator.disableSubmitButton();
});


// *** FormValidator *** 
const editFormValidator = new FormValidator(formSettings, editFormModal);
const addFormValidator = new FormValidator(formSettings, addFormModal);

editFormValidator.enableValidation();
addFormValidator.enableValidation();