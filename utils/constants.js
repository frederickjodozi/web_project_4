const initialCards = [ 
       {
           name: "Everglade National Park",
           link: "images/card__everglade.jpg"
       },
       {
           name: "Navajo Tribal Park",
           link: "images/card__navajopark.jpg"
       },
       {
           name: "Golden Gate Bridge",
           link: "images/card__goldengate.jpg"
       },
       {
           name: "Route 66",
           link: "images/card__route66.jpg"
       },
       {
           name: "Yellowstone National Park",
           link: "images/card__yellowstone.jpg"
       },
       {
           name: "Grand Canyon",
           link: "images/card__grandcanyon.jpg"
       },
   ];

// *** Image Preview Modal ***
const imagePreviewModalEl = document.querySelector(".modal_type_image-preview");
const imagePreviewEl = document.querySelector(".modal__image");
const captionPreviewEl = document.querySelector(".modal__caption");

// *** Cards ***
const cardSelector = ".card__template"; 

export {initialCards, imagePreviewModalEl, imagePreviewEl, captionPreviewEl, cardSelector};