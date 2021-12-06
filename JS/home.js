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


//slider

const sliderContainer = d.querySelector(".sliderContainer"),
      slider = d.querySelector(".slider"),
      btnNext = d.querySelector(".next"),
      btnPrev = d.querySelector(".prev")

let slides = d.querySelectorAll(".slide")
let index = 1

const slideWidth = slides[0].clientWidth

slider.style.transform = `translateX(${-slideWidth * index * 2}px)`

const moveNext = () => {
  if (index >= slides.length - 1) return
  index++
  slider.style.transform = `translateX(${-slideWidth * index}px)`
  slider.style.transition = `all ease 0.5s`
}

const movePrev = () => {
  if (index <= 0) return
  index--
  slider.style.transform = `translateX(${-slideWidth * index}px)`
  slider.style.transition = `all ease 0.5s`  
}

const firstClone = slides[0].cloneNode(true)
const lastClone = slides[slides.length - 1].cloneNode(true)

slider.prepend(lastClone)
slider.append(firstClone)

firstClone.id = "firstClone"
lastClone.id = "lastClone"

slider.addEventListener("transitionend", () => {
  slides = d.querySelectorAll(".slide")
  
  if (slides[index].id === firstClone.id){
    index = 1
    slider.style.transform = `translateX(${-slideWidth * index}px)`
    slider.style.transition = `none`  
  }
  
  if (slides[index].id === lastClone.id){
    index = slides.length - 2
    slider.style.transform = `translateX(${-slideWidth * index}px)`
    slider.style.transition = `none`  
  }

})


btnNext.addEventListener("click", moveNext)
btnPrev.addEventListener("click", movePrev)

