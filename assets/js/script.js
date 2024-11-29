const img = document.querySelector('#image')


img.addEventListener('click', function() {
    if (img.style.border === '2px solid red') {
        img.style.border = '';
    }
    else {
        img.style.border = '2px solid red';
    }
}) 