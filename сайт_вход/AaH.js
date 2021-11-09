const modalWrapper = document.querySelector(".modal-wrapper")
const btnClose = document.querySelector(".modal-close")

btnClose.addEventListener("click", closeModal);      //на крестик

modalWrapper.addEventListener("click", e => {   //нажатие на фон
    if (e.target === e.currentTarget) {
        closeModal();
    }
})

function closeModal(e) {
    modalWrapper.classList.add('hide');
}

document.addEventListener("keydown", e => {
    if (e.code === "Escape") {
        modalWrapper.classList.add('hide');  //на Esc
    }
})



const btn = document.querySelector('.btn');
const btnout = document.querySelector('.btnout');
const chelname = document.getElementById('name');

const polsName = document.getElementById('userName');
const polsPass = document.getElementById('userPass');

const btnEntry = document.querySelector('#btnEntry');

window.addEventListener('load', (e) => {
    login(JSON.parse(localStorage.getItem('user')));
});

const login = (user) => {
    if (btn.textContent !== 'Выход') {
        btn.textContent = 'Выход';
        chelname.textContent = user.login;
    }
    else {
        chelname.textContent = '';
        btn.textContent = 'Вход';
        localStorage.removeItem('user');
    }
}
btn.addEventListener('click', login);
btn.addEventListener('click', () => {
    modalWrapper.classList.remove('hide');
});


btnEntry.addEventListener('click', (e) => {
    e.preventDefault();
    if (polsName.value.trim().length > 0) {
    if (polsPass.value.trim().length > 0) {
        const user = {
            login: polsName.value,
            pass: polsPass.value
        };
        localStorage.setItem('user', JSON.stringify(user));

        btn.textContent !== 'Выход' ? btn.textContent = 'Выход' : btn.textContent = 'Вход';
        chelname.textContent = user.login;
        modalWrapper.classList.add('hide');
    }else {alert('Введите пароль');}
    }
    else {
        alert('Введите логин');
    }

});

