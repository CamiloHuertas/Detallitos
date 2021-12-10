
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

// decoraciones -----------------------------------------------------------------------------

const contDecoration = d.querySelector(".decorations"),
      sliderDecoration = d.querySelector(".decorations .slider"),
      nextDecoration = d.querySelector(".decorations .next"),
      prevDecoration = d.querySelector(".decorations .prev")

let slidesDecorations = d.querySelectorAll(".decorations .slide")

const slideDecorationWidth = slidesDecorations[0].clientWidth

let indexDecoration = 1



sliderDecoration.style.transform = `translateX(${-slideDecorationWidth * indexDecoration}px)`

nextDecoration.addEventListener("click", () => {
  if (indexDecoration >= slidesDecorations.length - 1) return
  indexDecoration++
  sliderDecoration.style.transform = `translateX(${-slideDecorationWidth * indexDecoration}px)`
  sliderDecoration.style.transition = `all ease 0.3s`
})

prevDecoration.addEventListener("click", () => {
  if (indexDecoration <= 0) return
  indexDecoration--
  sliderDecoration.style.transform = `translateX(${-slideDecorationWidth * indexDecoration}px)`
  sliderDecoration.style.transition = `all ease 0.3s`
})




// ambientation

const contAmbientation = d.querySelector(".ambientation"),
      sliderAmbientation = d.querySelector(".ambientation .slider"),
      nextAmbientation = d.querySelector(".ambientation .next"),
      prevAmbientation = d.querySelector(".ambientation .prev")

let slidesAmbientations = d.querySelectorAll(".ambientation .slide")

const slideAmbientationWidth = slidesAmbientations[0].clientWidth

let indexAmbientation = 1


nextAmbientation.addEventListener("click", () => {
  if (indexAmbientation >= slidesAmbientations.length - 1) return
  indexAmbientation++
  sliderAmbientation.style.transform = `translateX(${-slideAmbientationWidth * indexAmbientation}px)`
  sliderAmbientation.style.transition = `all ease 0.3s`
})
prevAmbientation.addEventListener("click", () => {
  if (indexAmbientation <= 0) return
  indexAmbientation--
  sliderAmbientation.style.transform = `translateX(${-slideAmbientationWidth * indexAmbientation}px)`
  sliderAmbientation.style.transition = `all ease 0.3s`
})


// Arreglos florales -------------------------------------------------------

const contArreglo = d.querySelector(".floral"),
sliderArreglo = d.querySelector(".floral .slider"),
nextArreglo = d.querySelector(".floral .next"),
prevArreglo = d.querySelector(".floral .prev")

let slidesArreglo = d.querySelectorAll(".floral .slide")

const slideArregloWidth = slidesArreglo[0].clientWidth

let indexArreglo = 1


sliderArreglo.style.transform = `translateX(${-slideArregloWidth * indexArreglo}px)`

nextArreglo.addEventListener("click", () => {
  if (indexArreglo >= slidesArreglo.length - 1) return
  indexArreglo++
  sliderArreglo.style.transform = `translateX(${-slideArregloWidth * indexArreglo}px)`
  sliderArreglo.style.transition = `all ease 0.3s`
})
prevArreglo.addEventListener("click", () => {
  if (indexArreglo <= 0) return
  indexArreglo--
  sliderArreglo.style.transform = `translateX(${-slideArregloWidth * indexArreglo}px)`
  sliderArreglo.style.transition = `all ease 0.3s`
})



// Arreglos florales -------------------------------------------------------

const contMusical = d.querySelector(".musical"),
      sliderMusical = d.querySelector(".musical .slider"),
      nextMusical = d.querySelector(".musical .next"),
      prevMusical = d.querySelector(".musical .prev")

let slidesMusical = d.querySelectorAll(".musical .slide")

const slideMusicalWidth = slidesMusical[0].clientWidth

let indexMusical = 1

sliderMusical.style.transform = `translateX(${-slideMusicalWidth * indexMusical}px)`

nextMusical.addEventListener("click", () => {
  if (indexMusical >= slidesMusical.length - 1) return
  indexMusical++
  sliderMusical.style.transform = `translateX(${-slideMusicalWidth * indexMusical}px)`
  sliderMusical.style.transition = `all ease 0.3s`
})
prevMusical.addEventListener("click", () => {
  if (indexMusical <= 0) return
  indexMusical--
  sliderMusical.style.transform = `translateX(${-slideMusicalWidth * indexMusical}px)`
  sliderMusical.style.transition = `all ease 0.3s`
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