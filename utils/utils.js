import PopupWithImage from "../components/popup-with-image.js";
import {imagePreviewModalEl} from "./constants.js";
import { imagePreviewEl } from "./constants.js";

export default function handleCardClick () {
    this._image.addEventListener("click", (evt) => {
    evt.preventDefault;
    const imagePopup = new PopupWithImage(imagePreviewModalEl)
    imagePopup.open(this._link, this._name);
    imagePreviewEl.src= this._link;
    imagePreviewEl.alt= this._name;
    captionPreviewEl.textContent = this._name;
    });
}