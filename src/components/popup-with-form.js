import Popup from "./popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._popupForm = this._popupElement.querySelector(".modal__form");
    }

    _getInputValues() {
        const formValues = {};

        this._inputElements = Array.from(this._popupForm.elements);
        this._inputElements.forEach((input) => {
            formValues[input.name] = input.value;
        });
        return formValues;
    }

    close() {
        this._popupForm.reset();
        this._popupForm.removeEventListener("submit", this._submitHandler)
        super.close();
    }

    _handleSubmit = (evt) => {
        evt.preventDefault();
        this._popupForm.querySelector(".modal__save-button").textContent = ("Saving...");
        this._handleFormSubmit(this._getInputValues()); 
    }
    
    setEventListeners() {
        this._popupForm.addEventListener("submit", this._handleSubmit);
        super.setEventListeners();
    }

    resetSaveButton() {
        this._popupForm.querySelector(".modal__save-button").textContent = ("Save");
    }
}
