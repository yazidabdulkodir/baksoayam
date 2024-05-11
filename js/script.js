// toggle class active hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger-menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};
// toggle class active search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
//ketika search di klik
document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

//toggle class active shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
//ketika shopping cart di klik
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

//klik diluar element
const hamburger = document.querySelector("#hamburger-menu");
const searchButton = document.querySelector("#search-button");
const shoppingCartButton = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!shoppingCartButton.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Modal box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

// Fungsi untuk menampilkan modal
const showModal = () => {
  itemDetailModal.style.display = "flex";
};

// Fungsi untuk menyembunyikan modal
const hideModal = () => {
  itemDetailModal.style.display = "none";
};

// Event listener untuk tombol detail item
itemDetailButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    showModal(); // Memanggil fungsi untuk menampilkan modal
    e.preventDefault();
  });
});

// Event listener untuk tombol close modal
document.querySelector(".modal .close-icon").addEventListener("click", (e) => {
  hideModal(); // Memanggil fungsi untuk menyembunyikan modal
  e.preventDefault();
});

// Event listener untuk menutup modal saat mengklik di luar modal
window.addEventListener("click", (e) => {
  if (e.target === itemDetailModal) {
    hideModal(); // Memanggil fungsi untuk menyembunyikan modal
  }
});
