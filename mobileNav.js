// Outer hamburger butten to open mobile menu
const mobileNavOuter = document.getElementsByClassName('mobile-menu-outer')

// Inner X Button to close mobile menu
const mobileNavInner = document.getElementsByClassName('mobile-menu-inner')

const body = document.body;
 
closeMobileMenu = () => {
    if (mobileNavInner) {
        mobileNavInner.classList.replace('open', 'close')
    }
}