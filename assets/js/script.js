const installModal = () => {  
    const body = document.querySelector('body');
    const modalOverlay = document.querySelectorAll('.modal');
    const modalClose = document.querySelectorAll('.modal-close');
    const callModalBtn = document.querySelectorAll('[data-modal]');

    const overFlowHiddenOn = (selector) => {
        const scrollWidth = window.innerWidth - body.offsetWidth;
        selector.classList.add('overflow-hidden');
        selector.style['padding-right'] = scrollWidth + "px";   //scroll
    };
    const overFlowHiddenOff = (selector) => {
        selector.classList.remove('overflow-hidden');
        selector.style['padding-right'] = null;                 //scroll
    };
    const visibModal = (selector) => selector.classList.add('open')

    const closeModal = () =>{
        overFlowHiddenOff(body);
        modalOverlay.forEach(modal => modal.classList.remove('open')); 
    }

    window.addEventListener("click", function(event) {
        console.log(event.target);
        modalOverlay.forEach(item => {
            if(event.target == item) {
                closeModal();
            } else {
                false;
            }
        });
    });

    callModalBtn.forEach(togler => { 
        togler.addEventListener('click', (event) => {
            event.preventDefault();

            const getId = togler.getAttribute('data-modal');
            const getModal = document.querySelector("#modal-" + getId);

            visibModal(getModal);
            overFlowHiddenOn(body);
        });
    });

    modalClose.forEach(closeBtn => {
        closeBtn.addEventListener('click', (event) => {
            event.preventDefault();
            closeModal();
        })
    });
};


document.querySelector('.modal') ? installModal() : false;
