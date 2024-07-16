// Tampilkan Menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        })
    }
}
showMenu('nav-toggle', 'nav-menu');

// Animasi GSAP
// Bagian Utama Home
gsap.to(".home__primary", { duration: 2, width: "100%", ease: "expo.inOut" });
gsap.from('.home__title', { opacity: 0, duration: 2, delay: 1.5, y: 100 });
gsap.from('.home__img img', { opacity: 0, duration: 2, delay: 1.5, y: -100 });

// Bagian Sekunder Home
gsap.to(".home__secondary", { duration: 2.5, width: "100%", ease: "expo.inOut" });
gsap.from('.home__scroll', { opacity: 0, duration: 3, x: -100 });
gsap.from('.home__year', { opacity: 0, duration: 1.5, delay: 1.5, x: 100 });
