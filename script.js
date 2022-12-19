const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
];
const slider = document.querySelector(".slider");
slider.innerHTML += data.map(img => `<img src="${img}">`).join("");

const rA = document.querySelector(".r-a");
let contador = 0;
rA.addEventListener("click", function() {
    contador++;
    if (contador === 3) contador = 0;
    slider.style.transform = `translateX(${contador * -1600}px)`;
});

const lA = document.querySelector(".l-a");
lA.addEventListener("click", function() {
    contador--;
    if (contador < 0) contador = 2;
    slider.style.transform = `translateX(${contador * -1600}px)`;
});