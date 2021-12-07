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

d.addEventListener("click", () => {
  if (menu.classList.contains("active")) {
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

d.addEventListener("click", (e) => {
  if (menu.className === "menuMovile active"){
    if (e.target.className === "overlay"){
      menu.className = "menuMovile"
      overlay.style.background = "transparent"
      btn.className = "hamburger hamburger--elastic"
      logo.style.display = "block"
    } 
  }
})



// Scroll reveal

ScrollReveal().reveal('.searchMenu', {
  delay: "500",
  origin: "bottom",
  distance: "-100px"
})
ScrollReveal().reveal('.main', {
  delay: "500",
  origin: "left",
  distance: "500px"
})

ScrollReveal().reveal('.whoWeAreTitle', {
  delay: "500"
})
ScrollReveal().reveal('.whoWeAreText', {
  delay: "500"
})
ScrollReveal().reveal('.titleAllie', {
  delay: "500"
})
ScrollReveal().reveal('.textAllie', {
  delay: "500"
})
ScrollReveal().reveal('.productsTitle', {
  delay: "500"
})

ScrollReveal().reveal('.productsText', {
  delay: "500"
})
ScrollReveal().reveal('.personalTitle', {
  delay: "500"
})

ScrollReveal().reveal('.personalText', {
  delay: "500"
})
ScrollReveal().reveal('.orderTitle', {
  delay: "500"
})

ScrollReveal().reveal('.orderText', {
  delay: "500"
})
