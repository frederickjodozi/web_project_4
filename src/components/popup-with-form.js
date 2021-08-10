import Popup from "./popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupForm = this._popupElement.querySelector('.modal__form');
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

    close() {
        this._popupForm.reset();
        super.close();
    }

    setEventListeners() {
        this._button = this._popupForm.querySelector('.modal__save-button');
        this._closeButton = this._popupElement.querySelector('.modal__close-button');

        this._button.addEventListener("submit", (evt) => {
            evt.preventDefault;
            this._handleFormSubmit(values);
            this.close();
        });

        this._closeButton.addEventListener("click", (evt) => {
            evt.preventDefault;
            this._popupForm.reset();
            this.close();
        })
        super.setEventListeners();
    }
}
