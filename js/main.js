let addBtn = document.querySelector('.btn');
let popup = document.querySelector(".popup");
let sendBtn = document.querySelector(".send-data-btn");

addBtn.addEventListener('click', () => {
    popup.classList.add('popup--show');
});

document.addEventListener('keydown', (evt => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        popup.classList.remove('popup--show')
    }
}));

sendBtn.addEventListener('click', (evt => {
    evt.preventDefault();
    

    popup.classList.remove('popup--show');
}));
