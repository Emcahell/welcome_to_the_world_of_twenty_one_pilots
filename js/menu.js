const menu = document.getElementById('menu');

const BtnOpen = document.getElementById('btn-open-menu');
const BtnClosed = document.getElementById('btn-closed');

BtnOpen.addEventListener('click', () =>{
    menu.classList.toggle('active');
})

BtnClosed.addEventListener('click', () =>{
    menu.classList.toggle('active');
})

const header = document.getElementById("header");

let prevY = window.scrollY;
window.addEventListener("scroll", () =>{
    if(prevY > window.scrollY){
        header.classList.remove("headerOff");
    } else {
        header.classList.add("headerOff");
    }

    if (window.scrollY > 60) {
        header.classList.remove("solid");
    } else {
        header.classList.add("solid");
    }

    prevY = window.scrollY;
});