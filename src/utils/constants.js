// *** Wrappers ***
const editModalEl = "modal_type_edit";
const editFormModal = document.querySelector(".modal__form_type_edit");
const addModalEl = "modal_type_add";
const addFormModal = document.querySelector(".modal__form_type_add");
const placesList = document.querySelector(".places__list");


// *** Buttons ***
const profileEditButton = document.querySelector(".profile__edit-button");
const cardAddButton = document.querySelector(".profile__add-button");


// *** DOM elements ***
const profileName = ".profile__name";
const profileProfession = ".profile__profession";
const profileImage = ".profile__image";


// *** Form data ***
const modalInputName = document.querySelector(".modal__input_content_name");
const modalInputProfession = document.querySelector(".modal__input_content_profession");

const formSettings = {
    _inputSelector: ".modal__input",
    _submitButtonSelector: ".modal__save-button",
    _inputErrorClass: "modal__input-error",
    _errorClass: "modal__input-error_active",
    _inactiveButtonClass: "modal__save-button_inactive"
}


// *** Image Preview Modal ***
const imagePreviewModalEl = "modal_type_image-preview";
const imagePreviewEl = document.querySelector(".modal__image");
const captionPreviewEl = document.querySelector(".modal__caption");

// *** Cards ***
const cardSelector = ".card__template"; 

// *** Profile ***
const headerLogo = document.querySelector(".header__logo");


export {cardSelector, placesList, profileEditButton, cardAddButton, editModalEl, 
       editFormModal, addModalEl, addFormModal, profileName, profileProfession, 
       imagePreviewEl, imagePreviewModalEl, captionPreviewEl, modalInputName,
       modalInputProfession, formSettings, headerLogo, profileImage}

