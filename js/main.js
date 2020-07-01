const menuButton = document.getElementById('menu-button');
const navMenu = document.getElementById('top-nav');
const navItems = document.getElementById('nav-items');

const aboutButton = document.getElementById('about-button');
const aboutNav = document.getElementById('about-nav');
const aboutItems = document.getElementById('about-items');
const aboutMenu = document.getElementById('about-menu')

const toggleNav = () => {
    if (navMenu.className == 'visible') {
        navItems.className = 'hidden'
        navMenu.className = 'hidden';
        aboutItems.className = 'hidden'
        aboutNav.className = 'hidden';
        menuButton.className = 'fas fa-bars';
    } else if (navMenu.className = 'hidden') {
        navMenu.className = 'visible';
        navItems.className = 'visible';
        menuButton.className = 'fas fa-times';
    }
};

const toggleAbout = () => {
    if (aboutNav.className == 'visible') {
        aboutItems.className = 'hidden'
        aboutNav.className = 'hidden';
        aboutButton.className = 'fas fa-caret-down';
    } else if (aboutNav.className = 'hidden') {
        navMenu.className = 'visible';
        navItems.className = 'visible';
        aboutNav.className = 'visible';
        aboutItems.className = 'visible';
        aboutButton.className = 'fas fa-caret-up';
    }
};

menuButton.addEventListener('click', toggleNav);
aboutMenu.addEventListener('click', toggleAbout);