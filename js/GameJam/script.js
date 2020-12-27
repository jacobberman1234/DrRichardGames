const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-modal]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(a => {
    a.addEventListener('click', () => {
        const modal = document.querySelector(a.dataset.modalTarget)
        OpenModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        CloseModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        CloseModal(modal)
    })
})

function OpenModal(modal){
    if(modal == null)
        return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function CloseModal(modal){
    if(modal == null)
        return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

function CloseOnSubmit(){
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        CloseModal(modal)
    })
}

//GoogleSheets
const googleScript = 'https://script.google.com/macros/s/AKfycbwsFTvO7QCRgvDNJmvH7nnOhYf_eqm5YHg96N79y6VPoPeltKms/exec'
const form = document.forms['google-sheets']

const submitModal = document.querySelector("submitModal")

// const fName = getElementById('fName').value
// const lName = getElementById('lName').value
// const email = getElementById('email').value
// var data = { 'fName' : fName, 'lName' : lName, 'email' : email}

// form.addEventListener('submit', e => {
//     e.preventDefault()
//     fetch(googleScript, {
//         method: 'POST', 
//         body: new FormData(form), 
//         headers: {
//         'Content-Type': 'text/plain;charset=utf-8',
//         }
//     })
//         .then(response => alert('Thanks for your interest! Good luck on the Game jam!'))
//         .catch(error => console.error('Error!', error.message))
//     })
