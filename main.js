const overlay = document.getElementById('overlay')
const supportBtn = document.querySelector('#support-btn')
const overlay2 = document.getElementById('overlay2')
const overlay3 = document.getElementById('overlay3')
const modal = document.querySelector('.modal')
const closeModalBtn = document.querySelector('p.close-modal')
const hamburger = document.getElementById('hamburger')
const close = document.getElementById('close-menu')
const navbar = document.querySelector('.navbar')
const pledge = document.querySelectorAll('.pledge')
const innerPledge = document.querySelectorAll('.inner-pledge')




overlay2.addEventListener('click', closeModal)
closeModalBtn.addEventListener('click', closeModal)

pledge.forEach(pled => {
    pled.addEventListener('click', togglePledge)
})

innerPledge.forEach(innPled => {
    innPled.addEventListener('click', toggleInnerPledge)
})
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


function togglePledge(e) {
    let currentPledge = e.target.parentElement.parentElement.children[3]
    let currInnerPledge = e.target.parentElement.parentElement.children[0].children[0].children[0]
    let currModalCard = e.target.parentElement.parentElement
    currentPledge.classList.toggle('active')
    currInnerPledge.classList.toggle('active')
    currModalCard.classList.toggle('active')
}

function toggleInnerPledge(e) {
    let currentPledge = e.target.parentElement.parentElement.parentElement.children[3]
    let currInnerPledge = e.target.parentElement.parentElement.parentElement.children[0].children[0].children[0]
    let currModalCard = e.target.parentElement.parentElement.parentElement
    currentPledge.classList.toggle('active')
    currInnerPledge.classList.toggle('active')
    currModalCard.classList.toggle('active')
}

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