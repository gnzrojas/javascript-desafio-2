/* Requerimiento 1: */

const img = document.querySelector('#image')


img.addEventListener('click', function () {
    if (img.style.border === '2px solid red') {
        img.style.border = '';
    }
    else {
        img.style.border = '2px solid red';
    }
})

/*Requerimiento 2: */
const input1 = document.getElementById('number-1')
const input2 = document.getElementById('number-2')
const input3 = document.getElementById('number-3')

const nSticker = document.getElementById('n-sticker')
const btn = document.getElementById('btn')


btn.addEventListener('click', function () {
    let total = Number(input1.value) + Number(input2.value) + Number(input3.value)
    if (total <= 10) {
        nSticker.innerHTML = 'Llevas ' + total + ' stickers';
    }

    else{
        nSticker.innerHTML = 'Llevas demasiados stickers. Recuerda que solo puedes llevar 10'
    }
})


/*Requerimiento 3: */
const pass1 = document.getElementById('pass1')
const pass2 = document.getElementById('pass2')
const pass3 = document.getElementById('pass3')

const btnIngresar = document.getElementById('confirmar-password')
const confirmarPassword = document.getElementById('contraseña')

btnIngresar.addEventListener('click', function(){
    
    let password = pass1.value + pass2.value + pass3.value
    if(password == 911) {
        confirmarPassword.innerHTML = 'Password 1 correcto'
    }

    else if (password == 714) {
        confirmarPassword.innerHTML = 'Password 2 correcto'
    }

    else {
        confirmarPassword.innerHTML = 'Password incorrecto'
    }
})