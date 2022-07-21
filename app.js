// Container Function
let phone = document.querySelector("#phone");
let btn = document.querySelector(".enter");

btn.onclick = function openWindow() {
  let url = "https://api.whatsapp.com/send?phone=91" + phone.value;
    window.open(url);
}

const nav = document.querySelector(".primary-nav");
const menuBtn = document.querySelector('.menu-btn');
const main = document.querySelector("main"); 

// Show SideBar when Click on Menu Btn
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle("showMenu");
    menuBtn.classList.toggle("open");
    document.body.classList.toggle("overflow");
    main.classList.toggle("blur-filter");
  });

// Hide SideBar on Click
  main.addEventListener('mouseup', function(event){
    if (event.target != nav && event.target.parentNode != nav){
      nav.classList.remove('showMenu');
      menuBtn.classList.remove("open");
      document.body.classList.remove("overflow");
      main.classList.remove("blur-filter");
    }
  });

// DARK THEME
const img = document.querySelector(".image");
const img2 = document.querySelector(".image1");

let img_tracker = "l";
let img_tracker1 = "i";
const chk = document.getElementById("chk");
const label = document.querySelector(".label");

chk.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  if(img_tracker=="l"){
    img2.src="Logo-dark.svg";
    img_tracker = "d";
  }else{
    img2.src="Logo-light.svg";
    img_tracker = "l";
  }
  
  if(img_tracker1=="i"){
    img.src="Logo-dark.svg";
    img_tracker1 = "r";
  }else{
    img.src="Logo-light.svg";
    img_tracker1 = "i";
  }
});

// Remove Preload 
const preload = document.querySelector("header");
window.addEventListener("load", () => {
  preload.classList.remove("preload");
});