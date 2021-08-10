import cardEvergladePark from "../images/card__everglade.jpg";
import cardNavajoPark from "../images/card__navajopark.jpg";
import cardGoldenGate from "../images/card__goldengate.jpg";
import cardRoute66 from "../images/card__route66.jpg";
import cardYellowstonePark from "../images/card__yellowstone.jpg";
import cardGrandCanyon from "../images/card__grandcanyon.jpg";

const initialCards = [ 
       {
           name: "Everglade National Park",
           link: cardEvergladePark
       },
       {
           name: "Navajo Tribal Park",
           link: cardNavajoPark
       },
       {
           name: "Golden Gate Bridge",
           link: cardGoldenGate
       },
       {
           name: "Route 66",
           link: cardRoute66
       },
       {
           name: "Yellowstone National Park",
           link: cardYellowstonePark
       },
       {
           name: "Grand Canyon",
           link: cardGrandCanyon
       },
   ];

   // *** Wrappers ***
const editModalEl = "modal_type_edit";
const editFormModal = document.querySelector(".modal__form_type_edit");
const addModalEl = "modal_type_add";
const addFormModal = document.querySelector(".modal__form_type_add");
const placesList = document.querySelector(".places__list");


// *** Buttons ***
const profileEditButton = document.querySelector(".profile__edit-button");
const cardAddButton = document.querySelector(".profile__add-button");


// *** DOM elements ***
const profileName = document.querySelector(".profile__name");
const profileProfession = document.querySelector(".profile__profession");


/* // *** Form data ***
const modalInputName = document.querySelector(".modal__input_content_name");
const modalInputProfession = document.querySelector(".modal__input_content_profession");
const modalInputCardName = document.querySelector(".modal__input_content_card-name");
const modalInputCardLink = document.querySelector(".modal__input_content_card-link");
*/


// *** Image Preview Modal ***
const imagePreviewModalEl = "modal_type_image-preview";
const imagePreviewEl = document.querySelector(".modal__image");
const captionPreviewEl = document.querySelector(".modal__caption");

// *** Cards ***
const cardSelector = ".card__template"; 

export {initialCards, cardSelector, placesList, profileEditButton, cardAddButton, editModalEl, editFormModal, addModalEl,
       addFormModal, profileName, profileProfession, imagePreviewEl, imagePreviewModalEl, captionPreviewEl}

