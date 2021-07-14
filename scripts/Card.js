import {openModal} from "./utils.js";

const imagePreviewModalEl = document.querySelector(".modal_type_image-preview");
const imagePreviewEl = document.querySelector(".modal__image");
const captionPreviewEl = document.querySelector(".modal__caption");

class Card {
    constructor(data, cardSelector){
        this._name = data.name;
        this._link = data.link;

        this._cardSelector = cardSelector;
    }

    _handlePreviewImage() {
        openModal(imagePreviewModalEl)
        imagePreviewEl.src= this._link;
        imagePreviewEl.alt= this._name;
        captionPreviewEl.textContent = this._name;
    }

    _handleLikeButton() {
        this._element.querySelector(".card__like-button").classList.toggle("card__like-button_active");
    }

    _handleDeleteCard() {
       this._element.remove(); 
    }

    _setEventListeners() {
        this._element.querySelector(".card__image").addEventListener("click", () => this._handlePreviewImage());
        this._element.querySelector(".card__like-button").addEventListener("click", () => this._handleLikeButton());
        this._element.querySelector(".card__delete-button").addEventListener("click", () => this._handleDeleteCard());
    }

    _getTemplate() {
        return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(true);
    }

    _generateCard() {
        this._element = this._getTemplate();

        this._element.querySelector(".card__title").textContent = this._name;
        this._element.querySelector(".card__image").style.backgroundImage = `url(${this._link})`;

        this._setEventListeners();

        return this._element;
    }
}

export default Card; 
