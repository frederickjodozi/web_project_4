import PopupWithForm from "./popup-with-form.js";

export default class PopupWithVerification extends PopupWithForm {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector, handleFormSubmit);
    }

    open(cardId, cardElement) {
        this.cardId = cardId;
        this.cardElement = cardElement;
        super.open();
    }

    _handleSubmit = (evt) => {
        evt.preventDefault();
        this._popupForm.querySelector(".modal__save-button").textContent = ("Saving...");
        this._handleFormSubmit(this.cardId, this.cardElement); 
    }
}