const container = document.querySelector('.container')
const header = container.querySelector('header')
const row = header.querySelector('.row')
const hamburger = row.querySelector('.hamburger')
const span = hamburger.querySelectorAll('span')
const menu = row.querySelector('.menu')
const ul = menu.querySelector('ul')


hamburger.addEventListener('click', () => {

    hamburger.classList.toggle('active')

    if (hamburger.classList.contains('active')) {

        ul.style.maxHeight = 200 + "px";
        ul.style.maxWidth = 350 + "px";
    } else {
        ul.style.maxHeight = 0 + "px";
        ul.style.maxWidth = 0 + "px";
        ul.style.alignItems = "center"
    }

})