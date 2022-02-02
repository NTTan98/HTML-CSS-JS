var btnOpen = document.querySelector(".btn__Open");
var modal = document.querySelector(".modal");
var iconClose = document.querySelector(".icon__close__modal i");
var btnClose = document.querySelector(".btn__close__modal");

function toggleModal() {
  modal.classList.toggle("hidden");
}

btnOpen.addEventListener("click", toggleModal);
iconClose.addEventListener("click", toggleModal);
btnClose.addEventListener("click", toggleModal);

modal.addEventListener("click", function (e) {
  if (e.target == e.currentTarget) {
    toggleModal();
  }
});
