
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


// Services menu



const servicesBtn = d.getElementById("services"),
      linkServicesMovile = d.querySelector(".subLinksServicesMovile"),
      linkLists = d.querySelectorAll(".LinkList"),
      itemA = d.querySelectorAll(".itemA")

menu.addEventListener("click", (e) => {
  if (e.target === d.querySelector("#services") || e.target === d.querySelector("#services p")) {
    linkServicesMovile.classList.toggle("active")
  }
})

itemA.forEach(el => {
  el.addEventListener("click", (e) => {
    switch (e.target.textContent) {
      case "Eventos y celebraciones":
        linkLists[0].classList.toggle("active")
        break;
    
      case "Regalos sorpresa personalizados y picnic":
        linkLists[1].classList.toggle("active")
        break;  

        case "Joyas y accesorios":
        linkLists[2].classList.toggle("active")
        break;  

        case "Ropa, calzado y marroquineria":
        linkLists[3].classList.toggle("active")
        break;  

        case "Spa y linea de belleza":
        linkLists[4].classList.toggle("active")
        linkLists[4].style.marginBottom = "50px"
        break;  

      default:
        break;
    }
  })
})



// Scroll reveal

ScrollReveal().reveal('.searchMenu', {
  delay: "500",
  origin: "bottom",
  distance: "-100px"
})