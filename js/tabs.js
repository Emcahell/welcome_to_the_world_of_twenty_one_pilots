const TabEras = document.getElementById('eras');
const TabAlbums = document.getElementById('albums');

const boxAlbumsEras =document.getElementById('box-albums-eras');
const eras = document.querySelector('.box-eras');
const albums = document.querySelector('.box-card-albums');

TabAlbums.addEventListener('click', () =>{
    TabAlbums.classList.remove('no-active');
    TabAlbums.classList.add('active');
    TabEras.classList.remove('active');
    TabEras.classList.add('no-active');

    boxAlbumsEras.style.transform = 'translateX(-100%)';
})

TabEras.addEventListener('click', () =>{
    TabEras.classList.remove('no-active');
    TabEras.classList.add('active');
    TabAlbums.classList.remove('active');
    TabAlbums.classList.add('no-active');

    boxAlbumsEras.style.transform = 'translateX(0)';
})