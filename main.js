
const hamburger =  document.querySelector('div.hamburger')
hamburger.addEventListener('click', () => {
    const sidenav = document.querySelector('div.mobile-nav');
    sidenav.classList.toggle('sidenav-toggle')
})