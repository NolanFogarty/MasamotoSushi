// Automatically close nav menu after click if page is displayed on smaller device
document.addEventListener("DOMContentLoaded", function() {
    if (window.innerWidth < 992) {
        const navLinks = document.querySelectorAll('.nav-item:not(.dropdown)')
        const menuToggle = document.getElementById('navbarSupportedContent')
        const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false})
        navLinks.forEach((l) => {
            l.addEventListener('click', () => {
                bsCollapse.toggle()
            })
        })
    }
});


