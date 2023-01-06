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

//Recenter accordian elements if open off the page
function scrollToTarget(targetID) {
    // Schedule the position finding to occur after a 500 millisecond delay
    setTimeout(function() {
        // Get the target element
        var target = document.getElementById(targetID);
    
        // Get the top position of the target element
        var targetTop = target.offsetTop;
        var targetBottom = targetTop + target.offsetHeight;

        // Get the top and bottom positions of the viewport
        var viewportTop = window.pageYOffset;
        var viewportBottom = viewportTop + window.innerHeight;
        // Check if the target element is within the viewport
        if (targetBottom > viewportTop && targetTop < viewportBottom) {
            // The element is already in the viewport, so do not scroll
            return;
        }

  
      // Scroll to the target position
      window.scrollTo(0, targetTop - 150);
    }, 500);
}

  