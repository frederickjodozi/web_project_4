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
        super.close();
    }

    setEventListeners() { 
        this._popupForm.addEventListener("submit", (evt) => { 
            evt.preventDefault(); 
            this._handleFormSubmit(this._getInputValues()); 
            this.close(); 
        });

        super.setEventListeners(); 
    } 
}
