// Add the following JavaScript code to your existing script.js

window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');

    if (window.scrollY > 0) {
        navbar.classList.add('fixed');
        document.body.classList.add('scroll-down');
    } else {
        navbar.classList.remove('fixed');
        document.body.classList.remove('scroll-down');
    }
});