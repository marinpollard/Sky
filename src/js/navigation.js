const smallnav = document.querySelector('.smallnav')
const navMenu = document.querySelector('.navigation__lists')

smallnav.addEventListener('click', () => {
    smallnav.classList.toggle('active')
    navMenu.classList.toggle('active')
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    smallnav.classList.remove('active')
    navMenu.classList.remove('active')
}))