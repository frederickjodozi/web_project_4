import Popup from "./popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._popupForm = this._popupElement.querySelector('.modal__form');
        this._handleFormSubmit = handleFormSubmit;
    }

    _getInputValues() {
        const formElement = document.querySelector('.modal__form');
        const inputElements = formElement.querySelectorAll('.modal__input');
        const formValues = {};

        inputElements.forEach((input) => {
            formValues[input.name] = input.value;
        });
        return this._getInputValues()
    }

    setEventListeners() {
        this._button = this._popupForm.querySelector('.modal__save-button');
        this._closeButton = this._popupElement.querySelector('.modal__close-button');

        this._button.addEventListener("submit", (evt) => {
            evt.preventDefault;
            this._getInputValues();
            this.close();
        });

        this._closeButton.addEventListener("click", (evt) => {
            evt.preventDefault;
            this.close();
            this._popupForm.reset();
        })
        super.setEventListeners();
    }

    close() {
        this._popupForm.reset();
        super.close();
    }
}
