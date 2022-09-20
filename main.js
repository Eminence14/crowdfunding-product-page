const overlay = document.getElementById('overlay')
const hamburger = document.getElementById('hamburger')
const close = document.getElementById('close-menu')
const navbar = document.querySelector('.navbar')

hamburger.addEventListener('click', () => {
    hamburger.classList.add('active')
    navbar.classList.add('active')
    close.classList.add('active')
    overlay.classList.add('active')
})

close.addEventListener('click', closeHamburger)
overlay.addEventListener('click', closeHamburger)

function closeHamburger() {
    hamburger.classList.remove('active')
    navbar.classList.remove('active')
    close.classList.remove('active')
    overlay.classList.remove('active')
}