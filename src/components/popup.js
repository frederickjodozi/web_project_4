export default class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(`.${popupSelector}`);
        this._handleEscUp = this._handleEscUp.bind(this);
    }
    
    open() {
        this._popupElement.classList.add("modal_open");
        document.addEventListener("keyup", this._handleEscUp);
        this.setEventListeners();
        console.log(this.setEventListeners)
    }
    
    close() {
        this._popupElement.classList.remove("modal_open");
        document.removeEventListener("keyup", this._handleEscUp);
        this._popupElement.removeEventListener("click", (evt) => {
            if(evt.target.classList.contains('modal')) {
                this.close();
            }
        });
    }
    

    _handleEscUp = (evt) => {
        evt.preventDefault(); 
        if(evt.key === "Escape") {
            this.close();
        }
    }

    setEventListeners() {
        this._popupElement.addEventListener("click", (evt) => {
            if(evt.target.classList.contains('modal')) {
                this.close();
            }
        });
    }
}