$(function() {

    let header = $("#header");
    let intro = $("#intro");
    let introH;
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load resize", function() { 
        let introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if( scrollPos>introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }

        console.log(scrollPos);
    });

    // Smooth scroll
    $("[data-scroll]"). on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass('show');

        $("html,body").animate({
            scrollTop: elementOffset -70
        },700);
    });

    // Nav Toogle 
    let nav = $('#nav');
    let navToggle = $('#navToggle');

    navToggle.on('click',function(event) {
        event.preventDefault();

        nav.toggleClass('show');
    });


// Rewiews https://kenwheeler.github.io/slick/

    let slider = $('#rewiewsSlider');

    slider.slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        fade: true,
        arrows: false
    });


});