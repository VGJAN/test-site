function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

$(document).ready(function(){
    $("#justified-gallery").justifiedGallery({
        rowHeight: 300,
        lastRow: 'nojustify',
        margins: 15,
        captions: false
    });
});