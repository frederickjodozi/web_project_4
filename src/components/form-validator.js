export default class FormValidator {
    constructor(settings, formElement) {
        this._inputSelector = settings._inputSelector;
        this._submitButtonSelector = settings._submitButtonSelector;
        this._inputErrorClass = settings._inputErrorClass;
        this._activeInputErrorClass = settings._activeInputErrorClass;
        this._inactiveButtonClass = settings._inactiveButtonClass;

        this._form = formElement;
    }

    _hasValidInputs(){
        if(this._inputElements.every((inputEl) => inputEl.validity.valid)) {
            return true;
        }
    }
    
    _toggleButton() {
        if(this._hasValidInputs()) {
            this._submitButtonEl.disabled = false;
            this._submitButtonEl.classList.remove(this._inactiveButtonClass);
        } else {
            this._submitButtonEl.disabled = true;
            this._submitButtonEl.classList.add(this._inactiveButtonClass);
        };
    }

    _hideInputError(inputEl) {
        const errorSpan = this._form.querySelector("#" + inputEl.id + "-error");
        errorSpan.textContent = "";
        inputEl.classList.remove(this._activeInputErrorClass);
    }

    _showInputError = (inputEl) => {
        const errorSpan = this._form.querySelector("#" + inputEl.id + "-error");
        errorSpan.textContent = inputEl.validationMessage;
        inputEl.classList.add(this._activeInputErrorClass);
    }
    
    _checkInputValidity(inputEl) {
        if(inputEl.validity.valid) {
            this._hideInputError(inputEl)
        } else {
            this._showInputError(inputEl);
        };
    }

    _setEventListeners() {
        this._inputElements = Array.from(this._form.querySelectorAll(this._inputSelector));
        this._submitButtonEl = this._form.querySelector(this._submitButtonSelector);
        
        this._inputElements.forEach((inputEl) => { 
            inputEl.addEventListener("input", () => {
                this._checkInputValidity(inputEl);
                this._toggleButton();
            });
        });
    }

    enableValidation() {
        this._form.addEventListener("submit", (e) => e.preventDefault());
        this._setEventListeners(); 
    }

    removeValidationErrors() {
        const inputElements = [...this._form.querySelectorAll(this._inputSelector)];
        inputElements.forEach((inputEl) => {
            inputEl.classList.remove(this._activeInputErrorClass); 
        });

        const errorElements = [...this._form.querySelectorAll(this._inputErrorClass)];
        errorElements.forEach((errorEl) => {
            errorEl.textContent = "";
        });
    }

    disableSubmitButton() {
        const submitButtonElements = [...this._form.querySelectorAll(this._submitButtonSelector)];
        submitButtonElements.forEach((submitButtonEl) => {
            submitButtonEl.disabled = true;
            submitButtonEl.classList.add(this._inactiveButtonClass);
        });
    }
}