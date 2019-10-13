(function ($) {
    "use strict";

    /*================================
    Preloader
    ==================================*/
    var preloader = $('#preloader');
    $(window).on('load', function () {
        preloader.fadeOut('slow', function () {
            $(this).remove();
        });
    });

    /*================================
    stickey Header
    ==================================*/
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop(),
            mainHeader = $('.header-area');

        if (scroll > 1) {
            mainHeader.addClass("sticky-header");
        } else {
            mainHeader.removeClass("sticky-header");
        }
    });

    /*================================
    progresssbar
    ==================================*/
    $(window).on('scroll', function () {
        if ($('.p_bar').length) {
            var wScroll = $(this).scrollTop();
            if (wScroll > $('.p_bar').offset().top - ($(window).height() / 1.2)) {

                $('.p_bar').each(function (i) {

                    setTimeout(function () {
                        $('.p_bar').eq(i).addClass('left-anim');
                    }, (700 * (Math.exp(i * 0.14))) - 700);
                });
            } //if end here
        }
    });

    /*================================
    Owl Carousel
    ==================================*/
    $('.tst-carousel').owlCarousel({
        margin: 0,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        items: 1,
        nav: true,
        smartSpeed: 800,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });

    $('.blog-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        autoplay: false,
        autoplay: 5000000000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });
    $('.about-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplay: 5000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            700: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

    /*================================
    Magnific Popup
    ==================================*/
    $('.expand-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    /*================================
    slicknav
    ==================================*/
    $('ul#navigation').slicknav({
        prependTo: ".mobile_menu"
    });


    /*================================
    Masonary
    ==================================*/
    $('#container').imagesLoaded(function () {

        // filter items on button click
        $('.portfolio-menu').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });

        // init Isotope
        var $grid = $('.portfolio-masonary').isotope({
            itemSelector: '.prt-grid',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.prt-grid',
            }
        });
    });

    $('.portfolio-menu button').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });

    /*================================
    Smoth Scroll
    ==================================*/
    function smoothScrolling($links, $topGap) {
        var links = $links;
        var topGap = $topGap;

        links.on("click", function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
                if (target.length) {
                    $("html, body").animate({
                        scrollTop: target.offset().top - topGap
                    }, 1000, "easeInOutExpo");
                    return false;
                }
            }
            return false;
        });
    }

    $(window).on("load", function () {
        smoothScrolling($(".main-menu nav ul li a[href^='#']"), 92);
    });

    /*================================
    Active current Li
    ==================================*/
    $(window).on("scroll", function () {
        activeMenuItem($(".nav-menu"));
    });

    //function for active menuitem
    function activeMenuItem($links) {
        var top = $(window).scrollTop(),
            windowHeight = $(window).height(),
            documentHeight = $(document).height(),
            cur_pos = top + 2,
            sections = $("section"),
            nav = $links,
            home = nav.find(" > ul > li:first");

        sections.each(function () {
            var top = $(this).offset().top - 92,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find("> ul > li > a").parent().removeClass("active");
                nav.find("a[href='#" + $(this).attr('id') + "']").parent().addClass("active");
            } else if (cur_pos === 2) {
                nav.find("> ul > li > a").parent().removeClass("active");
                home.addClass("active");
            } else if ($(window).scrollTop() + windowHeight > documentHeight - 400) {
                nav.find("> ul > li > a").parent().removeClass("active");
            }
        });
    }

})(jQuery);
