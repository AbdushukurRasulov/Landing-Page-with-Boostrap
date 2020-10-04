$(function ($) {
    "use strict";
    var $window = $(window);

    $window.on('scroll', function () {

        if ($(".navigation").offset().top > 0) {
            $(".navigation").addClass("stiky-nav");
        } else {
            $(".navigation").removeClass("stiky-nav");
        }
    });

    // deal_slider 
    // var $deal_slider = $('.deal-slider');
    //  $deal_slider.owlCarousel({
    //     loop: true,
    //     nav: false,
    //     autoplay:false,
    //     dots:false,
    //     margin:30,
    //     autoplayTimeout: 3000,
    //     smartSpeed: 1200,
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         576: {
    //             items: 1
    //         },
    //         950: {
    //             items: 1
    //         },
    //         960: {
    //             items: 1
    //         },
    //         1200: {
    //             items: 1
    //         }
    //     }
    //     });
    // testimonial-slider 
    var $testimonialSlider = $('.testimonial-slider');
    $testimonialSlider.owlCarousel({
        loop: true,
        navText: ['<i class="fa fa-angle-left yow"></i>', '<i class="fa fa-angle-right"></i>'],
        nav: true,
        dots: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
        smartSpeed: 1200,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            950: {
                items: 1
            },
            960: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });

    // product_slider
    var $product_slider = $('.product-slider');
    $product_slider.owlCarousel({
        loop: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dots: false,
        margin: 30,
        autoplay: false,
        autoplayTimeout: 8000,
        smartSpeed: 1500,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            },
            1920: {
                items: 4
            }
        }
    });


    
});