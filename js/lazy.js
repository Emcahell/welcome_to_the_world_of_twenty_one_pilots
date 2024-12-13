const lazyImagesL = document.querySelectorAll('.lazy-l');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
};

const observer = new IntersectionObserver((entries, observer) =>{
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, options);

lazyImagesL.forEach(image => {
    observer.observe(image);
});

const lazyImagesR = document.querySelectorAll('.lazy-r');

const optionss = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
};

const observerr = new IntersectionObserver((entries, observerr) =>{
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observerr.unobserve(entry.target);
        }
    });
}, optionss);

lazyImagesR.forEach(image => {
    observerr.observe(image);
});


const opciones = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const manejadorIntersect = (entradas, observador) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visible');
            observador.unobserve(entrada.target);
        }
    });
};

const observador = new IntersectionObserver(manejadorIntersect, opciones);

document.querySelectorAll('.lazy-li').forEach(item => {
    observador.observe(item);
});