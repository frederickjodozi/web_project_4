import PopupWithImage from "../components/popup-with-image.js";
import {imagePreviewModalEl, imagePreviewEl, captionPreviewEl} from "./constants.js";

function handleCardClick () {
    this._image.addEventListener("click", (evt) => {
    evt.preventDefault;
    const imagePopup = new PopupWithImage(imagePreviewModalEl)
    imagePopup.open(this._link, this._name);
    imagePreviewEl.src= this._link;
    imagePreviewEl.alt= this._name;
    captionPreviewEl.textContent = this._name;
    });
}

function handleEditFormSubmit (event) {
    event.preventDefault();
    profileName.textContent = modalInputName.value;
    profileProfession.textContent = modalInputProfession.value;
    closeModal(editModalEl);
}

function handleAddFormSubmit (event) {
    event.preventDefault();
    const newCard = {name: modalInputCardName.value, link: modalInputCardLink.value};
    renderCard(createCard(newCard, cardSelector), placesList); 
    closeModal(addModalEl);
}

export {handleCardClick, handleEditFormSubmit, handleAddFormSubmit};