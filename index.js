const hamburgerIcon = document.querySelector('.header-hamburger-menu');
const menu = document.querySelector('.header-mob-menu');
const cross = document.querySelector('.menu-cross');

// Functions
const toggleTab = (e) => {

    if(e.target.className === cross.className) {
        hamburgerIcon.style.opacity = '100%'
        menu.style.animationName = 'fade-out'
        setTimeout(() => {
            menu.style.display = 'none'
        }, 0400);
        return
    }

    hamburgerIcon.style.opacity = '0'
    menu.style.display = 'flex'
    menu.style.animationName = 'fade'
}


hamburgerIcon.onclick = toggleTab
cross.onclick = toggleTab