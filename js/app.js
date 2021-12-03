let currentPlace = document.querySelector(".current-place");
let allPath = document.querySelectorAll(".map path");
let yangon = document.querySelector("#MM-06");

allPath.forEach(x => {
    x.addEventListener("mouseover", _ => {
        currentPlace.innerText = x.getAttribute("title");
        yangon.style.fill = "var(--primary)";
    })
    x.addEventListener("mouseout", _ => {
        currentPlace.innerText = "Yangon";
        yangon.style.fill = "var(--light)";    
    })
})