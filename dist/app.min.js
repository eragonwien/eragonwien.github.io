function openSideNav() {
    document.getElementById("sidenav").style.width = "80%";
}
function closeSideNav() {
    document.getElementById("sidenav").style.width = "0%";    
}

function scrollToTop() {
    scrollToView("home");
}

function scrollToView(link) {
    document.getElementById(link).scrollIntoView({block: "start", behavior: "smooth"});
    closeSideNav();
}

document.body.addEventListener('touchstart', {passive: true});