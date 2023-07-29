function slider({
    image = '',
    content = '',
    title = '',
})

slider({
    image: "./asset"
})
// Script modal
const buyBtns = document.querySelectorAll(".js-buy-ticket");
const modal = document.querySelector(".modal");
const exit = document.querySelector(".js-modal-close");
const modalContainer = document.querySelector(".js-modal-container");

const showBuyTicketModal = () => {
  modal.classList.add("open");
};

const hideBuyTicketModal = () => {
  modal.classList.remove("open");
};

for (const buyBtn of buyBtns) {
  buyBtn.addEventListener("click", showBuyTicketModal);
}

exit.addEventListener("click", hideBuyTicketModal);

modal.addEventListener("click", hideBuyTicketModal);

modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});
// Script modal


// Đóng/mở mobile menu
let header = document.getElementById("header");
let mobileMenu = document.getElementById("js-mobile-menu");
let headerHeight = header.clientHeight;
mobileMenu.onclick = function () {
  let isClose = header.clientHeight === headerHeight;
  if (isClose) {
    header.style.height = "auto";
  } else {
    header.style.height = null;
  }
};

// Tự động đóng khi chọn menu
let menuItems = document.querySelectorAll('#nav li a[href*="#"]');
let menuLength = menuItems.length;
for (let i = 0; i < menuLength; i++) {
  let menuItem = menuItems[i];
  menuItem.onclick = function () {
    let isParent =
      this.nextElementSibling &&
      this.nextElementSibling.classList.contains("subnav");
    if (!isParent) {
      header.style.height = null;
    }
  };
}