// Constants for Send to Backend

const names = document.querySelector('.name')
const age = document.querySelector('.age')
const email = document.querySelector('.email')
const button = document.querySelector('.btn')

// Create URL of Constants for Send to Backend (Function)

button.addEventListener('click', () => {
    window.location.href = `/add/${names.value}/${age.value}/${email.value}`
})