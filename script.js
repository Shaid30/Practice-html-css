const toggle =document.getElementById("menu-toggle");
const menu=document.getElementById("menu");

toggle.addEventListener("click", function(){
    menu.classList.toggle("active");
});

const btn = document.querySelector(".btn");
btn.addEventListener("click",function(){
    alert("welcome to shaid's tech world")

});

const loginBtn = document.querySelector(".loginBtn");
loginBtn.addEventListener("click",function(){
    alert("welcome to login page")
});