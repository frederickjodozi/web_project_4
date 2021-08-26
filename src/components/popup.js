export default class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(`.${popupSelector}`);
        this._handleEscUp = this._handleEscUp.bind(this);
    }
    
    open() {
        this._popupElement.classList.add("modal_open");
        document.addEventListener("keyup", this._handleEscUp);
        this._setEventListeners();
    }
    
    close() {
        this._popupElement.classList.remove("modal_open");
        document.removeEventListener("keyup", this._handleEscUp);
        this._popupElement.removeEventListener("click", this._handleClick);
    }
    
    _handleEscUp = (evt) => {
        evt.preventDefault(); 
        if(evt.key === "Escape") {
            this.close();
        }
    }
    
    _handleClick = (evt) => {
        evt.preventDefault();
        if((evt.target.classList.contains('modal')) || (evt.target.classList.contains('modal__close-button'))) {
            this.close();
        }
    }

    _setEventListeners() {
        this._popupElement.addEventListener("click", this._handleClick);
    }
}