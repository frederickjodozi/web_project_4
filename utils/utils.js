import { imagePreviewEl, captionPreviewEl } from "./constants.js";

export default function handleCardClick() {
    imagePreviewEl.src= this._link;
    imagePreviewEl.alt= this._name;
    captionPreviewEl.textContent = this._name;
}

