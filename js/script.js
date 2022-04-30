const navbar = document.querySelector('header .navbar')
const menuButton = document.querySelector('header .fa-bars')

menuButton.addEventListener('click', () => {
  navbar.classList.toggle('show')
})

document.onscroll = () => {
  navbar.classList.remove('show')
}
