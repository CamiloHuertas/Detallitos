const d = document
const btn = d.querySelector(".hamburger")
const menu = d.querySelector(".menuMovile")

btn.addEventListener("click", () => {
  btn.classList.toggle("is-active")
  menu.classList.toggle("active")
})


const overlay = d.querySelector(".overlay")
const search = d.querySelector(".searchMenu")
const logo = d.querySelector(".logo img")

btn.addEventListener("click", () => {
  if (menu.classList.contains("active")) {
    search.style.background = `rgba(0, 0, 0, 0.74)`
    overlay.style.background = `rgba(0, 0, 0, 0.74)`
    overlay.style.width = `100%`
    logo.style.display = "none"
    
  } else {
    search.style.background = `#fff`
    overlay.style.background = `transparent`
    overlay.style.width = `0%`
    logo.style.display = "block"
  }
})