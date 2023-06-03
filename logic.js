let menu = document.querySelector(".svg_button")
let cross = document.querySelector(".close")
let sidebar_parent = document.querySelector(".complete")

cross.addEventListener("click",()=>{
    sidebar_parent.style.display = "none";
})

menu.addEventListener("click",()=>{
    sidebar_parent.style.display = "block";
})
