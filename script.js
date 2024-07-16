const openBtn = document.querySelector(".open-nav-btn");
const closeBtn = document.querySelector(".close-nav-btn");
const wrapper = document.querySelector(".wrapper");

const navUl = document.querySelector("header nav ul");

openBtn.addEventListener("click", ()=> {
    navUl.style.right = "0";
    document.body.style.overflowY = "hidden";
    wrapper.classList.add("unscroll");
});

closeBtn.addEventListener("click", ()=> {
    navUl.style.right = "-100%";
    document.body.style.overflowY = "auto";
    wrapper.classList.remove("unscroll");
});