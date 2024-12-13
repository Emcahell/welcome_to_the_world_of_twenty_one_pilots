const btnsOpen = document.querySelectorAll('.open-modal');
const btnsClosed = document.querySelectorAll('.closed');

btnsOpen.forEach(btn => {
    btn.addEventListener('click', () => {
        const modalId = btn.getAttribute('data-modal');
        const tracklist = document.getElementById(modalId);
        console.log(modalId);
        console.log('click!');
                
        tracklist.classList.add('active');
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
        console.log('closed');
        
        modal.classList.remove('active');
    });
}