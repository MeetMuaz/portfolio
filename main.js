let mobileBtn = document.getElementById("mobile-nav-btn");
let navBar = document.getElementById("nav-bar-mobile");

mobileBtn.addEventListener("click", ()=> {
    navBar.classList.toggle("show-mobile-nav");
})