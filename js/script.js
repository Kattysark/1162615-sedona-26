var search_hotel = document.querySelector(".button-brown-search");
var form = document.querySelector(".search-form");
var arrivalDate = form.querySelector("[name=arrival]");
var departureDate = form.querySelector("[name=departure");
var adults = form.querySelector("[name=adults]");
var kids = form.querySelector("[name=kids]");



search_hotel.addEventListener("click", function (evt) {
    evt.preventDefault();
    form.classList.toggle("form-show");

}
);




form.addEventListener("submit", function (evt) {
    if (!arrivalDate.value || !departureDate.value || (adults.value < 1 && kids.value < 1)) {
        evt.preventDefault();
    }



});