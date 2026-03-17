// Responsive Navigation Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Create hamburger menu if it doesn't exist
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    const navActions = document.querySelector('.nav-actions');

    if (navbar && !document.querySelector('.hamburger')) {
        const hamburger = document.createElement('div');
        hamburger.className = 'hamburger';
        hamburger.innerHTML = '<span></span><span></span><span></span>';
        navbar.appendChild(hamburger);

        // Toggle menu on hamburger click
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            if (navLinks) {
                navLinks.classList.toggle('active');
            }
            if (navActions) {
                navActions.classList.toggle('active');
            }
        });

        // Close menu when a link is clicked
        if (navLinks) {
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', function() {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                    if (navActions) {
                        navActions.classList.remove('active');
                    }
                });
            });
        }

        if (navActions) {
            navActions.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', function() {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                    navActions.classList.remove('active');
                });
            });
        }
    }

    // Handle old navigation style (nav with logo, ul, link divs)
    const oldNav = document.querySelector('.nav');
    if (oldNav && !document.querySelector('.hamburger')) {
        const navUl = oldNav.querySelector('ul');
        const navLink = oldNav.querySelector('.link');

        if (navUl) {
            const hamburger = document.createElement('div');
            hamburger.className = 'hamburger';
            hamburger.innerHTML = '<span></span><span></span><span></span>';
            oldNav.appendChild(hamburger);

            hamburger.addEventListener('click', function() {
                hamburger.classList.toggle('active');
                if (navUl) {
                    navUl.classList.toggle('active');
                }
                if (navLink) {
                    navLink.classList.toggle('active');
                }
            });

            // Close menu when a link is clicked
            if (navUl) {
                navUl.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', function() {
                        hamburger.classList.remove('active');
                        navUl.classList.remove('active');
                        if (navLink) {
                            navLink.classList.remove('active');
                        }
                    });
                });
            }

            if (navLink) {
                navLink.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', function() {
                        hamburger.classList.remove('active');
                        navUl.classList.remove('active');
                        navLink.classList.remove('active');
                    });
                });
            }
        }
    }
});

// Handle window resize - close menu on larger screens
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        const navActions = document.querySelector('.nav-actions');
        
        if (hamburger) {
            hamburger.classList.remove('active');
        }
        if (navLinks) {
            navLinks.classList.remove('active');
        }
        if (navActions) {
            navActions.classList.remove('active');
        }

        const oldNav = document.querySelector('.nav');
        if (oldNav) {
            const navUl = oldNav.querySelector('ul');
            const navLink = oldNav.querySelector('.link');
            if (navUl) {
                navUl.classList.remove('active');
            }
            if (navLink) {
                navLink.classList.remove('active');
            }
        }
    }
});
