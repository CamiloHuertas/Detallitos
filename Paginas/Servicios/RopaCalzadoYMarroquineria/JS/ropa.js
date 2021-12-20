
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

// const contJewel = d.querySelector(".jewelery"),
//       sliderJewel = d.querySelector(".jewelery .slider"),
//       nextJewel = d.querySelector(".jewelery .next"),
//       prevJewel = d.querySelector(".jewelery .prev")

// let slidesJewelery = d.querySelectorAll(".jewelery .slide")

// const slideJeweleryWidth = slidesJewelery[0].clientWidth

// let indexJewelery = 1

// sliderJewel.style.transform = `translateX(${-slideJeweleryWidth * indexJewelery}px)`

// nextJewel.addEventListener("click", () => {
//   if (indexJewelery >= slidesJewelery.length - 1) return
//   indexJewelery++
//   sliderJewel.style.transform = `translateX(${-slideJeweleryWidth * indexJewelery}px)`
//   sliderJewel.style.transition = `all ease 0.3s`
// })

// prevJewel.addEventListener("click", () => {
//   if (indexJewelery <= 0) return
//   indexJewelery--
//   sliderJewel.style.transform = `translateX(${-slideJeweleryWidth * indexJewelery}px)`
//   sliderJewel.style.transition = `all ease 0.3s`
// })


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