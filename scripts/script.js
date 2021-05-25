const profileEditButton = document.querySelector(".profile__edit-button");

const modalEL = document.querySelector(".modal");
const modalCloseButton = document.querySelector(".modal__close-button");

const modalInputName = document.querySelector(".modal__input_content_name");
const modalInputProfession = document.querySelector(".modal__input_content_profession");
const profileName = document.querySelector(".profile__name")
const profileProfession = document.querySelector(".profile__profession");
const saveButton = document.querySelector(".modal__save-button");



function openModal () {
    modalEL.classList.add("modal_open");
}

function closeModal () {
    modalEL.classList.remove("modal_open");  
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



const cardLikeButton = document.querySelectorAll(".card__like-button");

for (const element of cardLikeButton) {
element.addEventListener("click", function () {
    element.classList.toggle("card__like-button_active");
})};



