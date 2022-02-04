let image = document.querySelectorAll(".image img");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let btnClose = document.querySelector(".close");
let galleryInner = document.querySelector(".gallery__inner img");
let gallery = document.querySelector(".gallery");

let currenIndex = 0;

function ShowGallery() {
  galleryInner.src = image[currenIndex].src;
  gallery.classList.add("show");
  BtnShowPrev(currenIndex);
  BtnShowNext(currenIndex);
}

image.forEach((item, index) => {
  item.addEventListener("click", function () {
    currenIndex = index;
    ShowGallery(currenIndex);
  });
});

btnClose.addEventListener("click", function () {
  gallery.classList.remove("show");
});

document.addEventListener("keydown", function (e) {
  if (e.keyCode == 27) {
    gallery.classList.remove("show");
  }
});
function BtnShowNext() {
  if (currenIndex == image.length - 1) {
    next.classList.add("btn__show");
  } else {
    next.classList.remove("btn__show");
  }
}
function BtnShowPrev() {
  if (currenIndex == 0) {
    prev.classList.add("btn__show");
  } else {
    prev.classList.remove("btn__show");
  }
}

next.addEventListener("click", function () {
  currenIndex++;
  ShowGallery(currenIndex);
});

prev.addEventListener("click", function () {
  currenIndex--;
  ShowGallery(currenIndex);
});
