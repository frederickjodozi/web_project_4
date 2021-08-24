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
    
    _close() {
        this._popupForm.reset();
        this._popupForm.removeEventListener("submit", this._submitHandler)
        super._close();
    }

    _submitHandler = (evt) => {
        evt.preventDefault(); 
        this._handleFormSubmit(this._getInputValues()); 
        this._close(); 
    }
    
    _setEventListeners() {
        this._popupForm.addEventListener("submit", this._submitHandler);
        super._setEventListeners();
    }
}
