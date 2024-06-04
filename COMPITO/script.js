const title = document.querySelector("h1");
title.textContent =("Michela shop");
  console.log(title);
 
/*function backColorpage() {
    title.style.backgroundColor ="red"
}
 backColorpage();*/
 let page = document.querySelector("main");
 console.log(page);
 function backpage() {
    page.style.backgroundColor = "#d7f9f8"
    
 }
 backpage();
 const fine = document.querySelector("footer span");
console.log(fine);
fine.textContent = ("ho cambiato indizzo mi trovi a casa o al lavoro");
let image = document.querySelectorAll("img");
console.log(image);
for (let i = 0; i < image.length; i++) {
    image[i].classList.add("allimg");
};
let prez1 = document.querySelector(".prezzo1")
let bottone = document.querySelector(".button")
bottone.addEventListener("click", function scemo() {
  prez1.classList.toggle("green")
} )








    
