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