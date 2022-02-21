console.log("hello");
let hamburger = document.querySelector(".hamburger-icon");
let navLinkContainer = document.querySelector(".nav-link-container");

hamburger.addEventListener("click", () => {
  if (navLinkContainer.className === "nav-link-container") {
    navLinkContainer.classList.remove("nav-link-container");
    navLinkContainer.classList.add("nav-link-container-active");
    console.log("hee");
  } else {
    navLinkContainer.classList.remove("nav-link-container-active");
    navLinkContainer.classList.add("nav-link-container");
  }
});
