class Card {
    constructor({data, handleCardClick}, cardSelector){
        this._name = data.name;
        this._link = data.link;

        this._handleCardCick = handleCardClick;
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

    _generateCard() {
        this._element = this._getTemplate();

        this._element.querySelector(".card__title").textContent = this._name;
        this._element.querySelector(".card__image").style.backgroundImage = `url(${this._link})`;

        this._setEventListeners();
        this._handleCardCick();

        return this._element;
    }
}

/*
_handleCardClick() {
    openModal(imagePreviewModalEl)
    imagePreviewEl.src= this._link;
    imagePreviewEl.alt= this._name;
    captionPreviewEl.textContent = this._name;
}
*/

export default Card; 
