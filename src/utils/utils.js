import Card from "../components/card.js";

function renderCard({data, handleCardClick, handleLikeButton, renderDeleteButton, handleDeleteButton, cardSelector}) {
    const card = new Card({data, handleCardClick, handleLikeButton, renderDeleteButton, handleDeleteButton, cardSelector});
    const cardElement = card.generateCard();
    return cardElement;
}

export {renderCard};