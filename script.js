window.onload = function() {
    const input = document.querySelector('input');
    const eye = document.querySelector('#password-eye')

    const eyeBtn = eye.closest('button');

    eyeBtn.onclick = function() {
        if(input.type === 'password') {
            input.type = 'text';
            eyeBtn.innerText = 'Hide password';
        } else {
            input.type = 'password';
            eyeBtn.innerText = 'Show password';
        }
    }
}