const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelectorAll('.nav__link');

// when the hamburger is clicked, it opens / closes the nav.
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

// When a link in the nav is clicked, it closes the nav.
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})