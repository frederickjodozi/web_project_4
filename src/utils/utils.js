import imagePopup from "./constants.js";
import Card from "../components/card.js";
import {imagePreviewEl, captionPreviewEl, cardSelector} from "./constants.js";


function handleCardClick() {
    this._image.addEventListener("click", (evt) => {
        evt.preventDefault;
        imagePopup.open(this._link, this._name);
        imagePreviewEl.src = this._link;
        imagePreviewEl.alt = this._name;
        captionPreviewEl.textContent = this._name;
    });
}

function renderCard(data) {
    const card = new Card({data, handleCardClick}, cardSelector);
    const cardElement = card.generateCard();
    return cardElement;
}

export {handleCardClick, renderCard};