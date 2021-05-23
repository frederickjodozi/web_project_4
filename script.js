const profileEditButton = document.querySelector(".profile__edit-button");

const modalEL = document.querySelector(".modal");
const modalCloseButton = document.querySelector(".modal__close-button");

const modalInputName = document.querySelector(".js-modal__input-name");
const modalInputProfession = document.querySelector(".js-modal__input-profession");
const profileName = document.querySelector(".profile__name")
const profileProfession = document.querySelector(".profile__profession");
const saveButton = document.querySelector(".modal__save-button");



function openModal () {
    modalEL.classList.add("modal__open");
}

function closeModal () {
    modalEL.classList.remove("modal__open");  
}

profileEditButton.addEventListener("click", openModal);

modalCloseButton.addEventListener("click", closeModal);



modalInputName.value = profileName.textContent;
modalInputProfession.value = profileProfession.textContent;



function saveAndCloseModal(event) {
    event.preventDefault();
    profileName.textContent = modalInputName.value;
    profileProfession.textContent = modalInputProfession.value;
    closeModal();
}

saveButton.addEventListener("click", saveAndCloseModal);



const placesLikeButton = document.querySelectorAll(".places__like-button");

for (const element of placesLikeButton) {
element.addEventListener("click", function () {
    element.classList.toggle("places__like-button_active");
})};



