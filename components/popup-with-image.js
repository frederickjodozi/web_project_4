import Popup from "./popup.js";

export default class PopupWithImage extends Popup {
    open({link, name}) {
        this._popupElement.querySelector('.modal__caption').textContent = name;
        const imageElement = this._popupElement.querySelector('.modal__image');
        imageElement.src = link;
        imageElement.alt = `${name}`;
        super.open();
    }
}