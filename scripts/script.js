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
const editFormModal = document.querySelector(".modal__form_type_edit");
const addFormModal = document.querySelector(".modal__form_type_add");
const placesList = document.querySelector(".places__list");

// *** DOM elements ***
const profileName = document.querySelector(".profile__name")
const profileProfession = document.querySelector(".profile__profession");

// *** Buttons ***
const profileEditButton = document.querySelector(".profile__edit-button");
const editModalCloseButton = document.querySelector(".modal__close-button_type_edit");
const cardAddButton = document.querySelector(".profile__add-button")
const addModalCloseButton = document.querySelector(".modal__close-button_type_add");

// *** Form Data ***
const modalInputName = document.querySelector(".modal__input_content_name");
const modalInputProfession = document.querySelector(".modal__input_content_profession");
const modalInputCardName = document.querySelector(".modal__input_content_card-name");
const modalInputCardLink = document.querySelector(".modal__input_content_card-link");

// *** Event listeners (click) ***
profileEditButton.addEventListener("click", () => {
    toggleModal(editModalEl);
});

editModalCloseButton.addEventListener("click", () => {
    toggleModal(editModalEl);
});

cardAddButton.addEventListener("click", () => {
    toggleModal(addModalEl)
})

addModalCloseButton.addEventListener("click", () => {
    toggleModal(addModalEl);
});

// *** Event listeners (submit) ***
editFormModal.addEventListener("submit", submitEditModal);

addFormModal.addEventListener("submit", submitAddModal);

// *** Modal functions ***
function toggleModal(modal) {
    if(modal.classList.contains("modal_type_edit")) {
        modalInputName.value = profileName.textContent;
        modalInputProfession.value = profileProfession.textContent;
    }
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
    initialCards.appendChild({name: `${modalInputCardName.value}`, link: `${modalInputCardLink.value}`});
    
    toggleModal(addModalEl);
    }

// *** Templates ***
const cardTemplate = document.querySelector(".card__template").content;

// *** Card functions ***
function generateCard(card) {
    const cardEl = cardTemplate.cloneNode(true);
    const nameEl = cardEl.querySelector(".card__title");
    const imageEl = cardEl.querySelector(".card__image");

    nameEl.textContent = card.name;
    imageEl.style.backgroundImage = `url(${card.link})`;
    return cardEl;
}

function renderCard(card, cardEl) {
    cardEl.appendChild(card);
}

initialCards.forEach((card) => {
    renderCard(generateCard(card), placesList);
});

document.querySelectorAll(".card__like-button").forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("card__like-button_active");
    });
});



