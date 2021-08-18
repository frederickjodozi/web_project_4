import Popup from "./popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);

        this._popupForm = this._popupElement.querySelector('.modal__form');
        this._handleFormSubmit =  handleFormSubmit;
    }

    _getInputValues() {
        this._inputElements = Array.from(this._popupForm.elements);
        
        const formValues = {};

        this._inputElements.forEach((input) => {
            formValues[input.name] = input.value;
        });
        return formValues;
    }

    close = () => {
        this._popupForm.reset();
        this._popupForm.removeEventListener("submit", this._submitHandler);
        this._closeButton.removeEventListener("click", this._closeHandler);
        super.close();
    }

    _submitHandler = (data) => {
        data.preventDefault();
        this._handleFormSubmit(this._getInputValues());
        this.close();
    }

    _closeHandler = (evt) => {
        evt.preventDefault();
        this.close();
    }

    setEventListeners() {
        this._closeButton = this._popupElement.querySelector('.modal__close-button');

        this._popupForm.addEventListener("submit", this._submitHandler);
        this._closeButton.addEventListener("click", this._closeHandler);

        super.setEventListeners();
    }
}
