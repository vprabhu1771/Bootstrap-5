document.querySelector('#username').addEventListener('blur', validateUserName);

const reSpaces = /^\S*$/;

function validateUserName(e) {
    
    const username = document.querySelector('#username');

    if (reSpaces.test(username.value)) {
        username.classList.remove('is-invalid');
        username.classList.add('is-valid');
        return true;
    }
    else {
        username.classList.add('is-invalid');
        username.classList.remove('is-valid');
        return false;
    }
}