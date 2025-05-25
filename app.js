$(document).ready(() => {
    let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]

        $('#hero-carousel').owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav:true,
        navText: navText,
        autoplay: true,
        autoplayHoverPause: true
    })


    $('.movies-slide').owlCarousel({
        items: 4,
        dots: false,
        nav:true,
        navText: navText,
        margin: 15,
    })
})