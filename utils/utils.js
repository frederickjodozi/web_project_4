export default function handleCardClick() {
    openModal(imagePreviewModalEl)
    imagePreviewEl.src= this._link;
    imagePreviewEl.alt= this._name;
    captionPreviewEl.textContent = this._name;
}

