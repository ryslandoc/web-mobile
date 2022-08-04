const toggleNav = document.querySelector('.menu-burger'),
    nav = document.querySelector('.nav'),
    body = document.querySelector('body');


toggleNav.addEventListener('click', () => {
    const exp = "true" === toggleNav.getAttribute('aria-expanded');
    toggleNav.setAttribute('aria-expanded', !exp);

    exp ? toggleNav.setAttribute('aria-label', 'Відкрити меню')
        : toggleNav.setAttribute('aria-label', 'Закрити меню');

    nav.classList.toggle('js-menu-opened');
    toggleNav.classList.toggle('js-active-burger');

    body.classList.toggle('js-open-menu-body');
})