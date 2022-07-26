var container = document.querySelector(".container");
var navbar = document.querySelector(".navbar");
var tags = document.querySelector("div.tag").getElementsByClassName("btn");
var arrows = document.querySelectorAll("a.arrow > img");
var dropleft = document.querySelector("div.left");
var dropright = document.querySelector("div.right");
var sidebar = document.querySelector(".sidebar");
var menu = document.querySelector(".menu");
var btnclose = document.querySelector(".button-close");


menu.addEventListener('click', function(e) {
    e.preventDefault();

    document.body.hasChildNodes() && sidebar.style.setProperty("transform", "translateX(0%)");

    sidebar.classList.add("toggle");
   

});

btnclose.addEventListener('click', function(e) {
    e.preventDefault();

    document.body.hasChildNodes() && sidebar.style.removeProperty("transform");

});


arrows.forEach(function(el, index) {
    el.addEventListener('click', function(e) {
        e.preventDefault();

        if ((el.style.getPropertyValue("transform")) === "rotateX(180deg)") {
            el.style.removeProperty("transform");
        } else {
            el.style = `transform: rotateX(180deg)`;
        }

        if(el.classList.contains("left") && dropleft.style.getPropertyValue("visibility") === "visible") {
            dropleft.style.removeProperty("visibility");
            dropleft.style.removeProperty("display");
        } else if(el.classList.contains("left")) {
            dropleft.style.setProperty("visibility", "visible");
            dropleft.style.setProperty("display", "block");
        } 
            
        if(el.classList.contains("right") && dropright.style.getPropertyValue("visibility") === "visible") {
            dropright.style.removeProperty("visibility");
            dropright.style.removeProperty("display");
        } else if(el.classList.contains("right")){
            dropright.style.setProperty("visibility", "visible");
            dropright.style.setProperty("display", "block");
        }

    
    });
});




