
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

// Sliders ------------------------------------

//  -----------------------------------------------------------------------------

const contMarr = d.querySelector(".marroquineria"),
      sliderMarr = d.querySelector(".marroquineria .slider"),
      nextMarr = d.querySelector(".marroquineria .next"),
      prevMarr = d.querySelector(".marroquineria .prev")

let slidesMarr = d.querySelectorAll(".marroquineria .slide")

const slideMarrWidth = slidesMarr[0].clientWidth

let indexMarr = 1

sliderMarr.style.transform = `translateX(${-slideMarrWidth * indexMarr}px)`

nextMarr.addEventListener("click", () => {
  if (indexMarr >= slidesMarr.length - 1) return
  indexMarr++
  sliderMarr.style.transform = `translateX(${-slideMarrWidth * indexMarr}px)`
  sliderMarr.style.transition = `all ease 0.3s`
})

prevMarr.addEventListener("click", () => {
  if (indexMarr <= 0) return
  indexMarr--
  sliderMarr.style.transform = `translateX(${-slideMarrWidth * indexMarr}px)`
  sliderMarr.style.transition = `all ease 0.3s`
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

ScrollReveal().reveal('.titleM', {
  delay: "500",
  origin: "left",
  distance: "500px"
})

ScrollReveal().reveal('.marroquineria', {
  delay: "500",
  origin: "left",
  distance: "500px"
})