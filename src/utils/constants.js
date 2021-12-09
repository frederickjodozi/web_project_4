// *** Wrappers ***
const editModalEl = "modal_type_edit";
const editFormModal = document.querySelector(".modal__form_type_edit");
const editAvatarEl = "modal_type_edit-avatar";
const editAvatarFormModal = document.querySelector(".modal__form_type_edit-avatar");
const addModalEl = "modal_type_add";
const addFormModal = document.querySelector(".modal__form_type_add");
const deleteModalEl = "modal_type_delete";
const deleteFormModal = document.querySelector(".modal__form_type_delete");

const placesList = document.querySelector(".places__list");


// *** Buttons ***
const profileEditButton = document.querySelector(".profile__edit-button");
const cardAddButton = document.querySelector(".profile__add-button");
const cardDeleteButton = document.querySelectorAll(".card__delete-button");


// *** Form data ***
const modalInputName = document.querySelector(".modal__input_content_name");
const modalInputProfession = document.querySelector(".modal__input_content_profession");
const modalInputAvatar = document.querySelector(".modal__input_content_avatar-link");

const formSettings = {
    _inputSelector: ".modal__input",
    _submitButtonSelector: ".modal__save-button",
    _inputErrorClass: "modal__input-error",
    _errorClass: "modal__input-error_active",
    _inactiveButtonClass: "modal__save-button_inactive"
}


// *** Image Preview Modal ***
const imageCloseupPreviewEl = "modal_type_image-preview";
const imagePreviewEl = document.querySelector(".modal__image");
const captionPreviewEl = document.querySelector(".modal__caption");


// *** Cards ***
const cardSelector = ".card__template"; 

// *** Profile ***
const headerLogo = document.querySelector(".header__logo");
const profileName = ".profile__name";
const profileProfession = ".profile__profession";
const avatarButton = document.querySelector(".profile__avatar-button");
const profileAvatar = document.querySelector(".profile__avatar");


export {headerLogo, profileName, profileProfession, profileAvatar, profileEditButton, avatarButton, 
       editModalEl, editFormModal, editAvatarEl, editAvatarFormModal, modalInputName, modalInputProfession, modalInputAvatar,
       cardAddButton, addModalEl, addFormModal, cardSelector, placesList, imageCloseupPreviewEl,
       imagePreviewEl, captionPreviewEl, cardDeleteButton, deleteModalEl, deleteFormModal, formSettings}

