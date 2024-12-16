const btnsOpen = document.querySelectorAll('.open-modal');
const btnsClosed = document.querySelectorAll('.closed');

btnsOpen.forEach(btn => {
    btn.addEventListener('click', () => {
        const modalId = btn.getAttribute('data-modal');
        const tracklist = document.getElementById(modalId);
        tracklist.classList.add('active');
        
        const element = document.querySelector('.box-card-albums');
        const styleSheet = document.styleSheets[1];
        styleSheet.insertRule('.box-card-albums::before{display: block; content: ""; position: absolute; top: 0; left: 0; width: 100vw; height: 100%; background-color: rgba(17, 17, 17, 0.473); backdrop-filter: blur(8px);}', styleSheet.cssRules.length);
    });
});

btnsClosed.forEach(btn => {
    btn.addEventListener('click', () => {
        closeModal();
    });
});

const closeModal = () => {
    const modals = document.querySelectorAll('.tracklist');
    modals.forEach(modal => {
        modal.classList.remove('active');
    
        const element = document.querySelector('.box-card-albums');
        const styleSheet = document.styleSheets[1];
        styleSheet.insertRule('.box-card-albums::before{display: none; content: ""; position: absolute; top: 0; left: 0; width: 100vw; height: 100%; background-color: rgba(17, 17, 17, 0.473); backdrop-filter: blur(8px);}', styleSheet.cssRules.length);
    });
}