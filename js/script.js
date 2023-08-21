/*==== scroll sections active link ====*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            // Find the navigation link with matching href attribute
            let matchingNavLink = document.querySelector(`header nav a[href*=${id}]`);
            if (matchingNavLink) {
                matchingNavLink.classList.add('active');
            }
        }
    });
};

