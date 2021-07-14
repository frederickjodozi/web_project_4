const openModal = (modal) => {
    modal.classList.add("modal_open");
    modal.addEventListener("click", closeModalByClick);
    document.addEventListener("keydown", closeModalByEscapeKey);
}

const closeModal = (modal) => {
    modal.classList.remove("modal_open");
    modal.removeEventListener("click", closeModalByClick);
    document.removeEventListener("keydown", closeModalByEscapeKey);
}

const closeModalByClick = (e) => {
    const modalOpen = document.querySelector(".modal_open");
    if(e.target === modalOpen) {
        closeModal(modalOpen);
    };
}

const closeModalByEscapeKey = (e) => {
    const modalOpen = document.querySelector(".modal_open");
    if(e.key === "Escape") {
        closeModal(modalOpen);
    };
}

const imagePreviewModalEl = document.querySelector(".modal_type_image-preview");
const imagePreviewEl = document.querySelector(".modal__image");
const captionPreviewEl = document.querySelector(".modal__caption");

export {openModal, closeModal, closeModalByClick, closeModalByEscapeKey, imagePreviewModalEl, imagePreviewEl, captionPreviewEl};