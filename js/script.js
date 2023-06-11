function popupOpen() {
    let open = document.querySelector('.popup');

    open.classList.add('popup__visible');

    document.body.style.overflow = 'hidden';
}

function popupClose() {
    let close = document.querySelector('.popup__visible');
    close.classList.remove('popup__visible');
    document.body.style.overflow = 'visible';
}