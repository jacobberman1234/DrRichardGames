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