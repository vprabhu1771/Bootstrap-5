document.querySelector('#mobile').addEventListener('blur', validateUserName);

const reSpaces = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{5}\)?[\s.-]?\d{5}$/;

$('#mobile').mask('00000 00000');

function validateUserName(e) {
    
    const mobile = document.querySelector('#mobile');

    if (reSpaces.test(mobile.value)) {
        mobile.classList.remove('is-invalid');
        mobile.classList.add('is-valid');
        return true;
    }
    else {
        mobile.classList.add('is-invalid');
        mobile.classList.remove('is-valid');
        return false;
    }
}