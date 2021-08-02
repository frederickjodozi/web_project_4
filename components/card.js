export default class Card {
    constructor({item, handleCardClick}, cardSelector){
        this._name = item.name;
        this._link = item.link;

        this._handleCardClick = handleCardClick;
        this._cardSelector = cardSelector;
    }

    _handleLikeButton() {
        this._cardLikeButton.classList.toggle("card__like-button_active");
    }

    _handleDeleteCard() {
       this._element.remove(); 
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



