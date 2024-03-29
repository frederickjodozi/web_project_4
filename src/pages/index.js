import 'regenerator-runtime/runtime';
import "../pages/index.css";
import {headerLogo, profileName, profileProfession, profileAvatar, profileEditButton,
       avatarButton, editModalEl, editFormModal, editAvatarEl, editAvatarFormModal, modalInputName,
       modalInputProfession, cardAddButton, addModalEl, addFormModal, cardSelector, placesList,
       imageCloseupPreviewEl, imagePreviewEl, captionPreviewEl, deleteModalEl, formSettings}
       from "../utils/constants.js";
import headerImage from "../images/header__logo.svg";
import avatarButtonImage from "../images/profile__edit-button-sign.svg";
import Api from "../components/api.js";
import UserInfo from "../components/user-info.js";
import Section from "../components/section.js";
import PopupWithImage from "../components/popup-with-image";
import PopupWithForm from "../components/popup-with-form.js";
import PopupWithVerification from '../components/popup-with-verification';
import FormValidator from "../components/form-validator.js";
import {renderCard} from "../utils/utils.js";


// *** Api ***
const api = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/group-13",
    authToken: "487d57fd-0c04-4caf-a7fc-6016fd47c784"
});


// *** Profile ***
headerLogo.src = headerImage;
avatarButton.src = avatarButtonImage;


const userInfo = new UserInfo(profileName, profileProfession, profileAvatar);

api.getUserInfo().then(data => {
    userInfo.setUserInfo(data);
})
.catch(err => console.log(`Error: ${err}`));


// *** Original Cards ***
const imagePopup = new PopupWithImage(imageCloseupPreviewEl);


const deleteFormPopup = new PopupWithVerification(deleteModalEl, (cardId, cardElement) => {
    api.deleteCard(cardId)
    .then(() => cardElement.remove())
    .then(() => deleteFormPopup.close())
    .catch(err => console.log(`Error: ${err}`))
    .finally(() => deleteFormPopup.toggleSaveButton());
});


const originalCards = new Section({
    renderer: (item) => renderCard({
            data: item, 
            currentUserId: userInfo.getId(),
            handleCardClick: function handleCardClick() {
                imagePopup.open(this._link, this._name);
                imagePreviewEl.src = this._link;
                imagePreviewEl.alt = this._name;
                captionPreviewEl.textContent = this._name;
            }, 
            handleLikeButton: function handleLikeButton() {
                if(!this._cardLikeButton.classList.contains("card__like-button_active")) {
                    api.addLike(this._id)
                    .then((data) => this.updateLikes(data))
                    .catch(err => console.log(`Error: ${err}`))
                } else {
                    api.deleteLike(this._id)
                    .then((data) => this.updateLikes(data))
                    .catch(err => console.log(`Error: ${err}`))
                }
            },
            handleDeleteButton: function handleDeleteButton() {
                deleteFormPopup.open(item._id, this._element);
            },
            cardSelector: cardSelector
        })
}, placesList);


api.getCards().then(data => {
    originalCards.renderItems(data)
})
.catch(err => console.log(`Error: ${err}`));


// *** Forms ***
const editFormPopup = new PopupWithForm(editModalEl, (data) => {
    api.editUserInfo(data).then(data => {
        userInfo.setUserInfo(data);
        editFormPopup.close();
    })
    .catch(err => console.log(`Error: ${err}`))
    .finally(() => editFormPopup.toggleSaveButton());
});


const editAvatarFormPopup = new PopupWithForm(editAvatarEl, (data) => {
    api.editUserAvatar(data).then(data => {
        userInfo.setUserAvatar(data);
        editAvatarFormPopup.close();
    })
    .catch(err => console.log(`Error: ${err}`))
    .finally(() => editAvatarFormPopup.toggleSaveButton());
});


const addFormPopup = new PopupWithForm(addModalEl, (data) => {
    api.addCard(data).then(data => {
        originalCards.addItem(data);
        addFormPopup.close();
    })
    .catch(err => console.log(`Error: ${err}`))
    .finally(() => addFormPopup.toggleSaveButton());
});


// *** Buttons ***
profileEditButton.addEventListener("click", () => {
    editFormPopup.open();
    editFormPopup.setEventListeners();
    editFormValidator.removeValidationErrors();
    editFormValidator.disableSubmitButton();

    const getUserInfo = userInfo.getUserInfo();
    modalInputName.value = getUserInfo.name,
    modalInputProfession.value = getUserInfo.profession;
});


profileAvatar.addEventListener("click", () => {
    editAvatarFormPopup.open();
    editAvatarFormPopup.setEventListeners();
    editAvatarFormValidator.removeValidationErrors();
    editAvatarFormValidator.disableSubmitButton();
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
const editAvatarFormValidator = new FormValidator(formSettings, editAvatarFormModal);



editFormValidator.enableValidation();
addFormValidator.enableValidation();
editAvatarFormValidator.enableValidation();