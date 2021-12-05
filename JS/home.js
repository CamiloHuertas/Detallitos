const d = document
const btn = d.querySelector(".hamburger")
const menu = d.querySelector(".menuMovile")

btn.addEventListener("click", () => {
  btn.classList.toggle("is-active")
  menu.classList.toggle("active")
})

d.addEventListener("click", (e) => {
  
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

//