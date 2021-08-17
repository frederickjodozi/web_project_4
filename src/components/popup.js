export default class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(`.${popupSelector}`);
        this._handleEscUp = this._handleEscUp.bind(this);
    }
    
    open() {
        this._popupElement.classList.add("modal_open");
        document.addEventListener("keyup", this._handleEscUp);
        this.setEventListeners();
    }
    
    close() {
        this._popupElement.classList.remove("modal_open");
        this._popupElement.removeEventListener("click", this._handleModalClick);
        document.removeEventListener("keyup", this._handleEscUp);
    }
    
    _handleEscUp = (evt) => {
        evt.preventDefault(); 
        if(evt.key === "Escape") {
            this.close();
        }
    }

    _handleModalClick = (evt) => {
        evt.preventDefault();
        if(evt.target.classList.contains('modal')) {
            this.close();
        }
    }

    setEventListeners() {
        this._popupElement.addEventListener("click", this._handleModalClick);
    }
}