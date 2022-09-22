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
const votEnd = document.querySelectorAll('.continue')
const vot = document.querySelector('.vot')
const gotIt = document.querySelector('.got-it')
const bookmark = document.getElementById('bookmark')
const bookmarkOrd = document.querySelector('#bookmark-ord')
const bookmarkAct = document.querySelector('#bookmark-act')
const bookmarkText = document.querySelector('.bookmark-text')
const selectReward = document.querySelectorAll('.select-reward')

overlay2.addEventListener('click', closeModal)
closeModalBtn.addEventListener('click', closeModal)

overlay3.addEventListener('click', closeVot)
gotIt.addEventListener('click', closeVot)

selectReward.forEach(rew => {
    rew.addEventListener('click', () => {
        vot.classList.add('active')
        overlay3.classList.add('active')
    })
})

pledge.forEach(pled => {
    pled.addEventListener('click', togglePledge)
})

innerPledge.forEach(innPled => {
    innPled.addEventListener('click', toggleInnerPledge)
})

votEnd.forEach(cont => {
    cont.addEventListener('click', () => {
        overlay3.classList.add('active')
        vot.classList.add('active')
    })
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

bookmark.addEventListener('click', () => {
    bookmarkAct.classList.toggle('active')
    bookmarkOrd.classList.toggle('active')
    bookmarkText.classList.toggle('active')
    if (bookmarkText.classList.contains('active')) {
        bookmarkText.textContent = 'Bookmarked'
    } else {
        bookmarkText.textContent = 'Bookmark'
    }
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

function closeVot() {
    overlay3.classList.remove('active')
    vot.classList.remove('active')
}