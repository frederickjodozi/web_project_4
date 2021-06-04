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
const modalEl = document.querySelector(".modal");
const formModal = document.querySelector(".modal__form");
const placesList = document.querySelector(".places__list");

// *** DOM elements ***
const profileName = document.querySelector(".profile__name")
const profileProfession = document.querySelector(".profile__profession");

// *** Buttons ***
const profileEditButton = document.querySelector(".profile__edit-button");
const modalCloseButton = document.querySelector(".modal__close-button");

// *** Form Data ***
const modalInputName = document.querySelector(".modal__input_content_name");
const modalInputProfession = document.querySelector(".modal__input_content_profession");

// *** Templates ***
const cardTemplate = document.querySelector(".card__template").content;

// *** Event listeners ***
profileEditButton.addEventListener("click", toggleModal);
modalCloseButton.addEventListener("click", toggleModal);
formModal.addEventListener("submit", saveAndCloseModal);

// *** Modal functions ***
function toggleModal () {
    if(modalEl.classList.contains("modal_open")) {
        modalInputName.value = profileName.textContent;
        modalInputProfession.value = profileProfession.textContent;
    }
    modalEl.classList.toggle("modal_open");
}

function saveAndCloseModal(event) {
    event.preventDefault();
    profileName.textContent = modalInputName.value;
    profileProfession.textContent = modalInputProfession.value;
    toggleModal();
}

// *** Card functions ***
function generateCard (card) {
    const cardEl = cardTemplate.cloneNode(true);
    const nameEl = cardEl.querySelector(".card__title");
    const imageEl = cardEl.querySelector(".card__image");

    nameEl.textContent = card.name
    imageEl.style.backgroundImage = `url(${card.link})`;
    return cardEl;
}

function renderCard(card, cardEl) {
    cardEl.appendChild(card);
}

initialCards.forEach((card) => {
    renderCard(generateCard(card), placesList);
});


/*
const cardLikeButton = document.querySelectorAll(".card__like-button");

for (const element of cardLikeButton) {
element.addEventListener("click", function () {
    element.classList.toggle("card__like-button_active");
})};
*/


