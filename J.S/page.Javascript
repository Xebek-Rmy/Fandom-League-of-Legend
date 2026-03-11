// js/script.js - Menu hamburger commun à toutes les pages
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const menuOverlay = document.getElementById('menuOverlay');

    function closeMenu() {
        if (hamburger) hamburger.classList.remove('active');
        if (navMenu) navMenu.classList.remove('active');
        if (menuOverlay) menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    function openMenu() {
        if (hamburger) hamburger.classList.add('active');
        if (navMenu) navMenu.classList.add('active');
        if (menuOverlay) menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    if (hamburger) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            if (hamburger.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });
    }

    if (menuOverlay) {
        menuOverlay.addEventListener('click', closeMenu);
    }

    window.addEventListener('resize', function() {
        if (window.innerWidth > 992) {
            closeMenu();
        }
    });

    // js/script.js – Gestion du menu hamburger et de l’active page

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const menuOverlay = document.getElementById('menuOverlay');

    if (!hamburger || !navMenu || !menuOverlay) return; // Sort si éléments manquants

    function closeMenu() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    function openMenu() {
        hamburger.classList.add('active');
        navMenu.classList.add('active');
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        hamburger.classList.contains('active') ? closeMenu() : openMenu();
    });

    menuOverlay.addEventListener('click', closeMenu);

    // Ferme le menu si la fenêtre est redimensionnée au-dessus de 992px
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992) closeMenu();
    });

    // Marquer le bouton de navigation actif (optionnel)
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        const btnPage = btn.getAttribute('onclick')?.match(/'(.*?)'/)?.[1] || '';
        if (btnPage === currentPage) btn.classList.add('active');
    });
});
});









 