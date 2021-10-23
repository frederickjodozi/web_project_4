import PopupWithForm from "./popup-with-form";
import Api from "./api.js";
import deleteModalEl from "../utils/constants.js"


export default class Card {
    constructor({data, handleCardClick}, cardSelector){
        this._name = data.name;
        this._link = data.link;

        this._handleCardClick = handleCardClick;
        this._cardSelector = cardSelector;
    }
    
    _handleLikeButton() {
        this._cardLikeButton.classList.toggle("card__like-button_active");
    }

    _handleDeleteCard() {
        const deleteFormPopup = new PopupWithForm(deleteModalEl, () => {
            const api = new Api({
                baseUrl: "https://around.nomoreparties.co/v1/group-13",
                authToken: "487d57fd-0c04-4caf-a7fc-6016fd47c784"
            });
            api.deleteCard
            this._element.remove(); 
            this._element = null;
            
            deleteFormPopup.close();
        });
        deleteFormPopup.open();
    }

    _setEventListeners() {
        this._cardLikeButton = this._element.querySelector(".card__like-button");
        this._cardDeleteButton = this._element.querySelector(".card__delete-button");

        this._cardLikeButton.addEventListener("click", () => this._handleLikeButton());
        this._cardDeleteButton.addEventListener("click", () => this._handleDeleteCard());
    }

    _getTemplate() {
        return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(true);
    }

    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector(".card__title").textContent = this._name;
        this._image = this._element.querySelector(".card__image")
        this._image.style.backgroundImage = `url(${this._link})`;

        this._setEventListeners();
        this._handleCardClick();

        return this._element;
    }
}



