const profileEditButton = document.querySelector(".profile__edit-button");

const modalEL = document.querySelector(".modal");
const modalCloseButton = document.querySelector(".modal__close-button");

const modalInputName = document.querySelector(".js-modal__input-name");
const modalInputProfession = document.querySelector(".js-modal__input-profession");
const profileName = document.querySelector(".profile__name")
const profileProfession = document.querySelector(".profile__profession");
const saveButton = document.querySelector(".modal__save-button");

profileEditButton.addEventListener("click", function() {
    modalEL.classList.add("modal__open");
});

function closeModal () {
    modalEL.classList.remove("modal__open");  
}

modalCloseButton.addEventListener("click", function() {
    closeModal();
});

modalInputName.value = profileName.textContent;
modalInputProfession.value = profileProfession.textContent;

saveButton.addEventListener("click", function(event) {
    event.preventDefault();
    profileName.textContent = modalInputName.value;
    profileProfession.textContent = modalInputProfession.value;
    closeModal();
});



