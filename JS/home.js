const d = document
const btn = d.querySelector(".hamburger")
const menu = d.querySelector(".menuMovile")

btn.addEventListener("click", () => {
  btn.classList.toggle("is-active")
  menu.classList.toggle("active")
})

// MenuMovile links
// Events

const events = d.querySelector(".events"),
      presents = d.querySelector(".presents"),
      jewelery = d.querySelector(".jewelery"),
      clothes = d.querySelector(".clothes"),
      spa = d.querySelector(".spa"),
      curiosities = d.querySelector(".curiosities")

const menuLinks = d.querySelectorAll(".links")
  
events.addEventListener("click", () => {
  menuLinks[0].classList.toggle("active")
})
  
presents.addEventListener("click", () => {
  menuLinks[1].classList.toggle("active")
})
jewelery.addEventListener("click", () => {
  menuLinks[2].classList.toggle("active")
})
clothes.addEventListener("click", () => {
  menuLinks[3].classList.toggle("active")
})
spa.addEventListener("click", () => {
  menuLinks[4].classList.toggle("active")
})
curiosities.addEventListener("click", () => {
  menuLinks[5].classList.toggle("active")
})

//