const form = document.querySelector('form[name="contact"]');
const message = document.querySelector(".message__form");

message.hidden = true;

form.addEventListener("submit", function (event) {
  event.preventDefault();
  message.hidden = false;
});