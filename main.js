const overlay = document.getElementById('overlay')
const supportBtn = document.querySelector('#support-btn')
const overlay2 = document.getElementById('overlay2')
const modal = document.querySelector('.modal')
const closeModalBtn = document.querySelector('p.close-modal')
const hamburger = document.getElementById('hamburger')
const close = document.getElementById('close-menu')
const navbar = document.querySelector('.navbar')

overlay2.addEventListener('click', closeModal)
closeModalBtn.addEventListener('click', closeModal)

supportBtn.addEventListener('click', () => {
    modal.classList.add('active')
    overlay2.classList.add('active')
})

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

function closeModal() {
    modal.classList.remove('active')
    overlay2.classList.remove('active')
}