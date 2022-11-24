const passwordCheck = ((baru, confirm) => {
    if (baru.value !== confirm.value) {
        confirm.classList.add(`error`);
        return false;
    } else if (baru.value === confirm.value) {
        confirm.classList.remove(`error`);
        return true;
    };
});


const passwordNew = document.querySelector(`#passwordNew`);

const passwordConfirm = document.querySelector(`#passwordConfirm`);
passwordConfirm.addEventListener(`change`, (() => {
    passwordCheck(passwordNew, passwordConfirm);
}));