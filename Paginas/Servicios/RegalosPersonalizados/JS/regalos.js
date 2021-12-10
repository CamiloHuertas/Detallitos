
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

// Sliders

// Anchetas --------------------------------------------------------

const contAncheta = d.querySelector(".ancheta"),
      sliderAncheta = d.querySelector(".ancheta .slider"),
      nextAncheta = d.querySelector(".ancheta .next"),
      prevAncheta = d.querySelector(".ancheta .prev")

let slidesAncheta = d.querySelectorAll(".ancheta .slide")

const slideAnchetaWidth = slidesAncheta[0].clientWidth

let indexAncheta = 1

sliderAncheta.style.transform = `translateX(${-slideAnchetaWidth * indexAncheta}px)`

nextAncheta.addEventListener("click", () => {
  if (indexAncheta >= slidesAncheta.length - 1) return
  indexAncheta++
  sliderAncheta.style.transform = `translateX(${-slideAnchetaWidth * indexAncheta}px)`
  sliderAncheta.style.transition = `all ease 0.3s`
})

prevAncheta.addEventListener("click", () => {
  if (indexAncheta <= 0) return
  indexAncheta--
  sliderAncheta.style.transform = `translateX(${-slideAnchetaWidth * indexAncheta}px)`
  sliderAncheta.style.transition = `all ease 0.3s`
})



// Regalos -------------------------------------------------------------------


const contRegalo = d.querySelector(".regalo"),
      sliderRegalo = d.querySelector(".regalo .slider"),
      nextRegalo = d.querySelector(".regalo .next"),
      prevRegalo = d.querySelector(".regalo .prev")

let slidesRegalo = d.querySelectorAll(".regalo .slide")

const slideRegaloWidth = slidesRegalo[0].clientWidth

let indexRegalo = 1

sliderRegalo.style.transform = `translateX(${-slideRegaloWidth * indexRegalo}px)`

nextRegalo.addEventListener("click", () => {
  if (indexRegalo >= slidesRegalo.length - 1) return
  indexRegalo++
  sliderRegalo.style.transform = `translateX(${-slideRegaloWidth * indexRegalo}px)`
  sliderRegalo.style.transition = `all ease 0.3s`
})

prevRegalo.addEventListener("click", () => {
  if (indexRegalo <= 0) return
  indexRegalo--
  sliderRegalo.style.transform = `translateX(${-slideRegaloWidth * indexRegalo}px)`
  sliderRegalo.style.transition = `all ease 0.3s`
})

// Desayunos

const contDesayuno = d.querySelector(".desayuno"),
      sliderDesayuno = d.querySelector(".desayuno .slider"),
      nextDesayuno = d.querySelector(".desayuno .next"),
      prevDesayuno = d.querySelector(".desayuno .prev")

let slidesDesayuno = d.querySelectorAll(".desayuno .slide")

const slideDesayunoWidth = slidesDesayuno[0].clientWidth

let indexDesayuno = 1


nextDesayuno.addEventListener("click", () => {
  if (indexDesayuno >= slidesRegalo.length - 1) return
  indexDesayuno++
  sliderDesayuno.style.transform = `translateX(${-slideDesayunoWidth * indexDesayuno}px)`
  sliderDesayuno.style.transition = `all ease 0.3s`
})

prevDesayuno.addEventListener("click", () => {
  if (indexDesayuno <= 0) return
  indexDesayuno--
  sliderDesayuno.style.transform = `translateX(${-slideDesayunoWidth * indexDesayuno}px)`
  sliderDesayuno.style.transition = `all ease 0.3s`
})



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