export default class Card {
    constructor({data, currentUserId, handleCardClick, handleLikeButton, handleDeleteButton, cardSelector}) {
        this._name = data.name;
        this._link = data.link;
        this._id = data._id;
        this._likes = data.likes;
        this._ownerId = data.owner._id;
        this._userId = currentUserId;
        
        this._handleCardClick = handleCardClick;
        this._handleLikeButton = handleLikeButton;
        this._handleDeleteButton = handleDeleteButton;
        this._cardSelector = cardSelector;
    }

    _renderDeleteButton() {
        if(this._ownerId === this._userId) {
            this._cardDeleteButton.classList.add("card__delete-button_active");
            this._cardDeleteButton.disabled = false;
        } else {
            this._cardDeleteButton.classList.remove("card__delete-button_active");
            this._cardDeleteButton.disabled = true;
        }
    }

    _setEventListeners() {
        this._cardLikeButton = this._element.querySelector(".card__like-button");
        this._cardDeleteButton = this._element.querySelector(".card__delete-button");

        this._image.addEventListener("click", () => this._handleCardClick());
        this._cardLikeButton.addEventListener("click", () => this._handleLikeButton());
        this._cardDeleteButton.addEventListener("click", () => this._handleDeleteButton());
    }

    _renderLikes() {
        this._cardLikesCounter = this._element.querySelector(".card__like-counter");
        this._cardLikesCounter.textContent = this._likes.length;

        const isLiked = this._likes.some(like => like._id === this._userId);

        if(isLiked) {
            this._cardLikeButton.classList.add("card__like-button_active");
        } else {
            this._cardLikeButton.classList.remove("card__like-button_active");
        }
    }

    updateLikes(data) {
        this._likes = data.likes;
        this._renderLikes();
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
        this._renderDeleteButton();
        this._renderLikes();
        
        return this._element;
    }
}



