// *** Card array ***
const initialCards = [ 
    {
        name: "Yosemite Valley",
        link: "images/card__yosemite-valley.jpg"
    },
    {
        name: "Lake Louise",
        link: "images/card__lake-louise.jpg"
    },
    {
        name: "Bald Mountains",
        link: "images/card__bald-mountains.jpg"
    },
    {
        name: "Latemar",
        link: "images/card__latemar.jpg"
    },
    {
        name: "Vanoise Park",
        link: "images/card__vanoise-national-park.jpg"
    },
    {
        name: "Lago di Braies",
        link: "images/card__lago-di-braies.jpg"
    },
];


// *** Wrappers ***
const editModalEl = document.querySelector(".modal_type_edit");
const addModalEl = document.querySelector(".modal_type_add");
const imagePreviewModalEl = document.querySelector(".modal_type_image-preview");
const imagePreviewEl = imagePreviewModalEl.querySelector(".modal__image")
const captionPreviewEl = imagePreviewModalEl.querySelector(".modal__caption")
const editFormModal = document.querySelector(".modal__form_type_edit");
const addFormModal = document.querySelector(".modal__form_type_add");
const placesList = document.querySelector(".places__list");

// *** DOM elements ***
const profileName = document.querySelector(".profile__name")
const profileProfession = document.querySelector(".profile__profession");

// *** Buttons ***
const profileEditButton = document.querySelector(".profile__edit-button");
const editModalCloseButton = document.querySelector(".modal__close-button_type_edit");
const cardAddButton = document.querySelector(".profile__add-button");
const addModalCloseButton = document.querySelector(".modal__close-button_type_add");
const imageModalCloseButton = document.querySelector(".modal__close-button_type_image");

// *** Form Data ***
const modalInputName = document.querySelector(".modal__input_content_name");
const modalInputProfession = document.querySelector(".modal__input_content_profession");
const modalInputCardName = document.querySelector(".modal__input_content_card-name");
const modalInputCardLink = document.querySelector(".modal__input_content_card-link");


// *** Event listeners (click) ***
profileEditButton.addEventListener("click", () => {
    if(!editModalEl.classList.contains(".modal_open")) {
        modalInputName.value = profileName.textContent;
        modalInputProfession.value = profileProfession.textContent;
    };
    toggleModal(editModalEl);
});

editModalCloseButton.addEventListener("click", () => {
    toggleModal(editModalEl);
});

cardAddButton.addEventListener("click", () => {
    if(!addModalEl.classList.contains(".modal_open")) {
        modalInputCardName.value = "";
        modalInputCardLink.value = "";
    };
    toggleModal(addModalEl)
})

addModalCloseButton.addEventListener("click", () => {
    toggleModal(addModalEl);
});

imageModalCloseButton.addEventListener("click", () => {
    toggleModal(imagePreviewModalEl);
});



// *** Event listeners (submit) ***
editFormModal.addEventListener("submit", submitEditModal);

addFormModal.addEventListener("submit", submitAddModal);


// *** Modal functions ***
function toggleModal(modal) {
    modal.classList.toggle("modal_open");
}

function submitEditModal(event) {
    event.preventDefault();
    profileName.textContent = modalInputName.value;
    profileProfession.textContent = modalInputProfession.value;
    toggleModal(editModalEl);
}

function submitAddModal(event) {
    event.preventDefault();
    const newCard = {name: modalInputCardName.value, link: modalInputCardLink.value};
    renderCard(generateCard(newCard), placesList);
    toggleModal(addModalEl);
    }

// *** Templates ***
const cardTemplate = document.querySelector(".card__template").content;

// *** Card functions ***
function generateCard(card) {
    const cardEl = cardTemplate.cloneNode(true);
    const nameEl = cardEl.querySelector(".card__title");
    const imageEl = cardEl.querySelector(".card__image");
    const likeEl = cardEl.querySelector(".card__like-button");
    const cardDeleteButton = cardEl.querySelector(".card__delete-button");
    const cardGet = cardEl.querySelector(".card");

    nameEl.textContent = card.name;
    imageEl.style.backgroundImage = `url(${card.link})`;

    imageEl.addEventListener("click", () => {
        toggleModal(imagePreviewModalEl);
        imagePreviewEl.src= card.link;
        imagePreviewEl.alt= card.name;
        captionPreviewEl.textContent = card.name;
        });

    likeEl.addEventListener("click", () => {
        likeEl.classList.toggle("card__like-button_active");
    });

    cardDeleteButton.addEventListener("click", () => {
        placesList.removeChild(cardGet);
    });

    return cardEl;
};

function renderCard(card, container) {
    container.prepend(card);
}

initialCards.forEach((card) => {
    renderCard(generateCard(card), placesList);
});
