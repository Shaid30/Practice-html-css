const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", function(){
  menu.classList.toggle("active");
});

/*const toggle = document.getElementById("toggle");
const menu = document.getElementById("menu");
const links = document.querySelectorAll(".nav-link");
const indicator = document.querySelector(".indicator");
const nav = document.getElementById("navbar");

// Hamburger toggle
toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    menu.classList.toggle("active");
});

// Moving indicator
links.forEach(link => {
    link.addEventListener("click", (e) => {

        links.forEach(l => l.classList.remove("active"));
        e.target.classList.add("active");

        const rect = e.target.getBoundingClientRect();
        const parentRect = menu.getBoundingClientRect();

        indicator.style.left = (rect.left - parentRect.left) + "px";
        indicator.style.width = rect.width + "px";
    });
});

// Scroll effect
window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        nav.style.background = "#000";
    } else {
        nav.style.background = "rgba(255,255,255,0.08)";
    }
});*/