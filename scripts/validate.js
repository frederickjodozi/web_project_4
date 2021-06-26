const hideInputError = (formEl, inputEl, settings) => {
    const errorSpan = formEl.querySelector("#" + inputEl.id + "-error");
    errorSpan.textContent = "";
    inputEl.classList.remove(settings.errorClass);
};

const showInputError = (formEl, inputEl, settings) => {
    const errorSpan = formEl.querySelector("#" + inputEl.id + "-error");
    errorSpan.textContent = inputEl.validationMessage;
    inputEl.classList.add(settings.errorClass);
};

const hasValidInputs = (inputElements) => 
    inputElements.every((inputEl) => inputEl.validity.valid === true);

const toggleButton = (inputElements, submitButton, settings) => {
    if(hasValidInputs(inputElements)) {
        submitButton.disabled = false;
        submitButton.classList.remove(settings.inactiveButtonClass);
    } else {
        submitButton.disabled = true;
        submitButton.classList.add(settings.inactiveButtonClass);
    };
};

const checkInputValidity = (formEl, inputEl, settings) => {
    if(inputEl.validity.valid) {
        hideInputError(formEl, inputEl, settings)
    } else {
        showInputError(formEl, inputEl, settings);
    };
};

const setEventListeners = (formEl, settings) => {
    const inputElements = [...formEl.querySelectorAll(settings.inputSelector)];
    const submitButton = formEl.querySelector(settings.submitButtonSelector);
    inputElements.forEach((inputEl) => { 
        inputEl.addEventListener("input", (e) => {
            checkInputValidity(formEl, inputEl, settings);
            toggleButton(inputElements, submitButton, settings);
        });
    });
};

const enableValidation = (settings) => {
    const formElements = [...document.querySelectorAll(settings.formSelector)];
    formElements.forEach((formEl) => {
        formEl.addEventListener("submit", (e) => e.preventDefault());
        setEventListeners(formEl, settings);
    });
};

const variableConfig = {
    formSelector: ".modal__form",
    inputSelector: ".modal__input",
    submitButtonSelector: ".modal__save-button",
    errorClass: "modal__input-error_active",
    inactiveButtonClass: "modal__save-button_inactive"
};

enableValidation(variableConfig);