export default class Card {
    constructor({data, handleCardClick, handleLikeButton, handleDeleteCard, cardSelector}) {
        this._name = data.name;
        this._link = data.link;
        this._id = data._id;
        this._likes = [data.likes];
        
        this._handleCardClick = handleCardClick;
        this._handleLikeButton = handleLikeButton;
        this._handleDeleteCard = handleDeleteCard;
        this._cardSelector = cardSelector;
    }

    _setEventListeners() {
        this._cardLikeButton = this._element.querySelector(".card__like-button");
        this._cardDeleteButton = this._element.querySelector(".card__delete-button");

        this._cardLikeButton.addEventListener("click", () => this._handleLikeButton());
        this._cardDeleteButton.addEventListener("click", () => this._handleDeleteCard());
    }

    renderLikes() {
        this._cardLikesCounter = this._element.querySelector(".card__like-counter");
        this._cardLikesCounter.textContent = this._likes.length;
    }

    _getTemplate() {
        return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(true);
    }

    generateCard() {
        this._element = this._getTemplate();
        
        this._element.querySelector(".card__title").textContent = this._name;
        this._image = this._element.querySelector(".card__image");
        this._image.style.backgroundImage = `url(${this._link})`;

        this._setEventListeners();
        this._handleCardClick();
        this.renderLikes();

        return this._element;
    }
}



