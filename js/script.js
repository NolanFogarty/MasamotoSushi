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

