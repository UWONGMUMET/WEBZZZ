const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        })
    }
}

showMenu('nav-toggle', 'nav-menu');

const navLink = document.querySelectorAll('.nav__link');
function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

const sizes = document.querySelectorAll('.size__tallas'),
    colors = document.querySelectorAll('.sneaker__color'),
    sneaker = document.querySelectorAll('.sneaker__img')

function changeSize() {
    sizes.forEach(size => size.classList.remove('active'))
    this.classList.add('active')
}

function changeColor() {
    let primary = this.getAttribute('primary')
    let color = this.getAttribute('color')
    let sneakerImg = document.querySelector(`.sneaker__img[color="${color}"]`)

    colors.forEach(c => c.classList.remove('active'))
    this.classList.add('active')

    sneaker.forEach(s => s.classList.remove('shows'))
    sneakerImg.classList.add('shows')

    document.documentElement.style.setProperty('--primary', primary)
}

sizes.forEach(size => size.addEventListener('click', changeSize))
colors.forEach(c => c.addEventListener('click', changeColor))
