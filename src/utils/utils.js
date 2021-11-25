import Card from "../components/card.js";

function renderCard({data, handleCardClick, handleLikeButton, handleDeleteCard, cardSelector}) {
    const card = new Card({data, handleCardClick, handleLikeButton, handleDeleteCard, cardSelector});
    const cardElement = card.generateCard();
    return cardElement;
}

export {renderCard};