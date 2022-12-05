const accordions = document.querySelectorAll('.accordion-heading');

accordions.forEach(a => {
    a.addEventListener('click', (e) => {
        a.toggleAttribute('aria-expanded');
    })
})