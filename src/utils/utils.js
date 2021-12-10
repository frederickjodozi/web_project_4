import Card from "../components/card.js";

function renderCard({data, currentUserId, handleCardClick, handleLikeButton, handleDeleteButton, cardSelector}) {
    const card = new Card({data, currentUserId, handleCardClick, handleLikeButton, handleDeleteButton, cardSelector});
    const cardElement = card.generateCard();
    return cardElement;
}

export {renderCard};