const menubutton = document.getElementById("menubutton");
const menu = document.querySelector(".menu");
menubutton.addEventListener("click", function (){
  menu.classList.toggle("menushow");
  if(menubutton.classList.contains("fa-bars")){
  menubutton.classList.remove("fa-solid", "fa-bars")
  menubutton.classList.add("fa-solid", "fa-xmark")
  } else {
    menubutton.classList.remove("fa-solid", "fa-xmark")
    menubutton.classList.add("fa-solid", "fa-bars")
  }
})

//navbar
const navbar = document.querySelector(".navbar");
const text = document.querySelector('.navbartext');
const opt = document.querySelectorAll(".opt")
let i = 0;
const icon = document.querySelector(".navbar i");
        window.addEventListener("scroll", function() {
            if (window.scrollY > 0) {
              menu.classList.remove("menushow") 
              menu.classList.add("menu");
              if(menubutton.classList.contains("fa-xmark")){
              menubutton.classList.remove("fa-solid", "fa-xmark")
    menubutton.classList.add("fa-solid", "fa-bars")
              }
                navbar.style.backgroundColor = "lightseagreen";
              text.style.color = "black";
              icon.style.color = "black";
            opt.forEach((x) => {
              x.style.color = "black";
            }
              )
            } else {
                navbar.style.backgroundColor = "transparent";
      text.style.color = "white";
      icon.style.color = "white";
      opt.forEach((x) => {
              x.style.color = "white";
            });
            
            }
        });



