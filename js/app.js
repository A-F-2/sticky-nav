let mainNav = document.querySelector("#mainNav")

let logo = document.querySelector("#logo")

document.addEventListener("scroll" , function () {
    if (document.documentElement.scrollTop != 0) {
    mainNav.setAttribute("class", "")
    mainNav.classList.add("bg-black")
    mainNav.classList.add("txt-white")
    logo.style.height = "64px"
}   else {
    mainNav.classList.remove("bg-black")
    mainNav.classList.remove("txt-white")
    logo.style.height = "84px"
}
})


