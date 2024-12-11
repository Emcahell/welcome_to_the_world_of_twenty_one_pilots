const menu = document.getElementById('menu');

const BtnOpen = document.getElementById('btn-open-menu');
const BtnClosed = document.getElementById('btn-closed');

BtnOpen.addEventListener('click', () =>{
    menu.classList.toggle('active');
})

BtnClosed.addEventListener('click', () =>{
    menu.classList.toggle('active');
})