const accordions = document.querySelectorAll('.accordion-heading');

accordions.forEach(a => {
    a.addEventListener('click', (e) => {
        a.toggleAttribute('aria-expanded');
    })
})

const dropdownButtons = document.querySelectorAll('.dropdown-arrow');
dropdownButtons.forEach(d => {
    d.addEventListener('click', (e) => {
        d.toggleAttribute('aria-expanded')
    })
})