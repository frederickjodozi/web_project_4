// *** Wrappers ***
const modals = document.querySelectorAll(".modal");
const editModalEl = document.querySelector(".modal_type_edit");
const editFormModal = document.querySelector(".modal__form_type_edit");
const addModalEl = document.querySelector(".modal_type_add");
const addFormModal = document.querySelector(".modal__form_type_add");
const imagePreviewModalEl = document.querySelector(".modal_type_image-preview");
const imagePreviewEl = imagePreviewModalEl.querySelector(".modal__image");
const captionPreviewEl = imagePreviewModalEl.querySelector(".modal__caption");
const placesList = document.querySelector(".places__list");


// *** DOM elements ***
const profileName = document.querySelector(".profile__name");
const profileProfession = document.querySelector(".profile__profession");


// *** Buttons ***
const profileEditButton = document.querySelector(".profile__edit-button");
const editModalCloseButton = document.querySelector(".modal__close-button_type_edit");
const cardAddButton = document.querySelector(".profile__add-button");
const cardAddSaveButton = document.querySelector(".modal__save-button_type_add");
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
const openEditModal = (e) => {
    modalInputName.value = profileName.textContent;
    modalInputName.classList.remove("modal__input-error_active");
    editInputNameError.textContent = "";
    modalInputProfession.value = profileProfession.textContent;
    modalInputProfession.classList.remove("modal__input-error_active");
    editInputProfessionError.textContent = "";
    openModal(editModalEl);
};

const openAddCardModal = (e) => {
    modalInputCardName.value = "";
    modalInputCardName.classList.remove("modal__input-error_active");
    addInputNameError.textContent = "";
    modalInputCardLink.value = "";
    /* I need to change the next two lines and put their function in validate.js. Without these
    lines the submit button shows active if I enter valid input and then close and reopen the modal,
    which I believe it shouldnt */
    cardAddSaveButton.disabled = true;
    cardAddSaveButton.classList.add("modal__save-button_inactive");
    modalInputCardLink.classList.remove("modal__input-error_active");
    addInputLinkError.textContent = "";
    openModal(addModalEl);
};

const closeModalByClick = (e) => {
    const modalOpen = document.querySelector(".modal_open");
    if(e.target === modalOpen) {
        closeModal(modalOpen);
    };
};

const closeModalByEscapeKey = (e) => {
    const modalOpen = document.querySelector(".modal_open");
    if(e.key === "Escape") {
        closeModal(modalOpen);
    };
};

const openModal = (modal) => {
    modal.classList.add("modal_open");
    modal.addEventListener("click", closeModalByClick);
    document.addEventListener("keydown", closeModalByEscapeKey);
};

const closeModal = (modal) => {
    modal.classList.remove("modal_open");
    modal.removeEventListener("click", closeModalByClick);
    document.removeEventListener("keydown", closeModalByEscapeKey);
};

const submitEditModal = (event) => {
    event.preventDefault();
    profileName.textContent = modalInputName.value;
    profileProfession.textContent = modalInputProfession.value;
    closeModal(editModalEl);
};

const submitAddModal = (event) => {
    event.preventDefault();
    const newCard = {name: modalInputCardName.value, link: modalInputCardLink.value};
    renderCard(generateCard(newCard), placesList);
    closeModal(addModalEl);
};


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


// *** Templates ***
const cardTemplateContent = document.querySelector(".card__template").content;


// *** Card functions ***
function generateCard(card) {
    const cardTemplateClone = cardTemplateContent.cloneNode(true);
    const cardEl = cardTemplateClone.querySelector(".card");
    const nameEl = cardTemplateClone.querySelector(".card__title");
    const imageEl = cardTemplateClone.querySelector(".card__image");
    const likeEl = cardTemplateClone.querySelector(".card__like-button");
    const cardDeleteButton = cardTemplateClone.querySelector(".card__delete-button");

    nameEl.textContent = card.name;
    imageEl.style.backgroundImage = `url(${card.link})`;

    imageEl.addEventListener("click", () => {
        openModal(imagePreviewModalEl);
        imagePreviewEl.src= card.link;
        imagePreviewEl.alt= card.name;
        captionPreviewEl.textContent = card.name;
        });

    likeEl.addEventListener("click", () => {
        likeEl.classList.toggle("card__like-button_active");
    });

    cardDeleteButton.addEventListener("click", () => {
        cardEl.remove();
    });

    return cardEl;
};

function renderCard(card, container) {
    container.prepend(card);
}

initialCards.forEach((card) => {
    renderCard(generateCard(card), placesList);
});
