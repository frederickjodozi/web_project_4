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
const modalEl = document.querySelectorAll(".modal");
const editModalEl = document.querySelector(".modal_type_edit");
const editFormModal = document.querySelector(".modal__form_type_edit");
const addModalEl = document.querySelector(".modal_type_add");
const addFormModal = document.querySelector(".modal__form_type_add");
const imagePreviewModalEl = document.querySelector(".modal_type_image-preview");
const imagePreviewEl = imagePreviewModalEl.querySelector(".modal__image");
const captionPreviewEl = imagePreviewModalEl.querySelector(".modal__caption");
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
    if(!editModalEl.classList.contains("modal_open")) {
        modalInputName.value = profileName.textContent;
        modalInputProfession.value = profileProfession.textContent;
    };
    openModal(editModalEl);
});

editModalCloseButton.addEventListener("click", () => {
    closeModal(editModalEl);
});

cardAddButton.addEventListener("click", () => {
    if(!addModalEl.classList.contains("modal_open")) {
        modalInputCardName.value = "";
        modalInputCardLink.value = "";
    };
    openModal(addModalEl)
})

addModalCloseButton.addEventListener("click", () => {
    closeModal(addModalEl);
});

imageModalCloseButton.addEventListener("click", () => {
    closeModal(imagePreviewModalEl);
});

modalEl.forEach((modal) => {
    modal.addEventListener("click", (e) => {
        if(e.target === modal){
            closeModal(modal);
        }
    });
});

document.addEventListener("keydown", (e) => {
    if(e.key === "Escape"){
        closeModal(editModalEl);
        closeModal(addModalEl);
        closeModal(imagePreviewModalEl);
    }
});

// *** Event listeners (submit) ***
editFormModal.addEventListener("submit", submitEditModal);

addFormModal.addEventListener("submit", submitAddModal);


// *** Modal functions ***
function openModal(modal) {
    modal.classList.add("modal_open");
}

function closeModal(modal) {
    modal.classList.remove("modal_open");
}

function submitEditModal(event) {
    event.preventDefault();
    profileName.textContent = modalInputName.value;
    profileProfession.textContent = modalInputProfession.value;
    closeModal(editModalEl);
}

function submitAddModal(event) {
    event.preventDefault();
    const newCard = {name: modalInputCardName.value, link: modalInputCardLink.value};
    renderCard(generateCard(newCard), placesList);
    closeModal(addModalEl);
    }

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
