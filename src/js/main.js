// wow = new WOW({
//     boxClass:     'wow',      
//     animateClass: 'animated', 
//     offset:       0,          
//     mobile:       false,       
//     live:         true        
// })
// wow.init();

function sliders() {
    $('.cat--unit__for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.cat--unit__nav'
    });
    $('.cat--unit__nav').slick({
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.cat--unit__for',
        dots: false,
        arrows: true,
        focusOnSelect: true,
        vertical: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });

    $('.mainsl').slick({
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
    });

    $('.three_slider').slick({
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 805,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 430,
                settings: {
                    slidesToShow: 1,
                    // arrows: false
                }
            }
        ]

    });

    $('.cert_slider').slick({
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 430,
                settings: {
                    // arrows: false
                }
            }
        ]
    });

    $('.vid_slider').slick({
        // autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1240,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1
                }
            }
        ]

    });

    
    $('.team_slider').slick({
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 430,
                settings: {
                    // arrows: false
                }
            }
        ]
    });

    $('.docs_slider').slick({
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 430,
                settings: {
                    // arrows: false
                }
            }
        ]
    });

    
    $('.clients_slider').slick({
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 430,
                settings: {
                    // arrows: false
                }
            }
        ]
    });

}

sliders();

$(function(){

    $('.dd_h').on('click', function() {
        $(this).toggleClass('active');
        $(this).next('.dd_b').slideToggle();
    })

    
    $('.nav--btn').on('click', function(){

        if(window.innerWidth > 1000) {
            if ($('#hamdd').is(':visible')) {
                $('#hamdd').slideUp();
                $(this).removeClass('open');
                $('body').css({'overflow': 'visible'})
            } else {
                if ($('#courses_ddbody').is(':visible')) {
                    $('#courses_ddbody').slideUp();
                    setTimeout(() => {
                    $('#hamdd').slideDown();
                    }, 500);
                    $('body').css({'overflow': 'hidden'})
                    $(this).addClass('open');
                }
                else {
                    $('#hamdd').slideDown();
                    $('body').css({'overflow': 'hidden'})
                    $(this).addClass('open');
                }
                
            }
            return false;
        }

        if(window.innerWidth <= 1000) {
            if ($('#mnav').is(':visible')) {
                $('#mnav').slideUp();
                $(this).removeClass('open');
            } else {
                if ($('#mnav').is(':visible')) {
                    $('#mnav').slideUp();
                    setTimeout(() => {
                    $('#mnav').slideDown();
                    }, 500);
                    $(this).addClass('open');
                }
                else {
                    $('#mnav').slideDown();
                    $(this).addClass('open');
                }
                
            }
            return false;
        }
       
    });


    $('#courses_ddlink').on('click', function() {
        if($('#courses_ddbody').is(':visible')) {
            $('body').css({'overflow': 'visible'})
        } 
        else {
            $('body').css({'overflow': 'hidden'})
        }


        if ($('#hamdd').is(':visible')) {
            $('#hamdd').slideUp();
            setTimeout(() => {
                $('#courses_ddbody').slideDown(); 
            }, 500);
            $('.ham').removeClass('open');
            $('.ham').removeClass('active');

        }
        else {
            $('#courses_ddbody').slideToggle();
          
        }
    })


    $('.open--modal').on('click', function(){
        var modal = $(this).attr('data-modal');
        $(modal).fadeIn();
        return false;
    });
    $('.close').on('click', function(){
        $('body').css({'overflow': 'visible'})
        $(this).parent().slideUp();
        return false;
    });

    $('.tel').inputmask('+7 (999) 999-99-99');
});

$(window).on("load",function(e){
    if ($(window).width() <= '1025'){
        $('header .submenu > a').on('click', function(){
            $(this).next().slideToggle();
            $('.preload').addClass('load').removeClass('loadR');
            return false;
        });
        $('header .submenu > a').attr('href', '#');
        $('.submenu').on('mouseleave', function(){
            $(this).children('.submenu__block').slideUp();
        });
    } else {
        $('header .submenu > a').on('mouseover', function(){
            $(this).next().fadeIn();
        });
        $('.submenu').on('mouseleave', function(){
            $(this).children('.submenu__block').fadeOut();
        });
    }
});

// setTimeout(function(){
//     $('.preload').addClass('load');
//     wow = new WOW({
//         boxClass:     'wow',      
//         animateClass: 'animated', 
//         offset:       0,          
//         mobile:       false,       
//         live:         true        
//     })
//     wow.init();
// }, 600);

$('a:not([href^="mailto\\:"], [href$="\\#"], [href^="tel\\:"], [target="_blank"], [data-fancybox])').click(function(e) {
    var anchor = $(this), h;
    h = anchor.attr('href');
    e.preventDefault();
    setTimeout(function(){
        window.location = h;
    }, 250);
    $('.preload').addClass('loadR');
});

window.onpageshow = function(event) {
    if (event.persisted) {
        window.location.reload() 
    }
};

// $(function(){
//     $('.btn--up').bind('click.smoothscroll',function (e) {
//         e.preventDefault();
//         var target = this.hash,
//         $target = $(target);

//         $('html, body').stop().animate({
//             'scrollTop': $target.offset().top
//             }, 1000, 'swing', function () {
//             window.location.hash = target;
//         });
//     });

//     $(window).scroll(function(){
//         var bo = $(this).scrollTop();
//         var a = $(".btn--up").css('opacity')
//         if ( bo >= 200 && a == 0) {$(".btn--up").stop().animate({'opacity':'1'},400)};
//         if ( bo < 200 && a == 1) {$(".btn--up").stop().animate({'opacity':'0'},400)};
//     });
// });


/* lazyload 2 */
    /*!
 * Lazy Load - JavaScript plugin for lazy loading images
 *
 * Copyright (c) 2007-2019 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   https://appelsiini.net/projects/lazyload
 *
 * Version: 2.0.0-rc.2
 *
 */

(function (root, factory) {
if (typeof exports === "object") {
    module.exports = factory(root);
    } else if (typeof define === "function" && define.amd) {
        define([], factory);
    } else {
        root.LazyLoad = factory(root);
    }
}) (typeof global !== "undefined" ? global : this.window || this.global, function (root) {

    "use strict";

    if (typeof define === "function" && define.amd){
        root = window;
    }

    const defaults = {
        src: "data-src",
        srcset: "data-srcset",
        selector: ".lazyload",
        root: null,
        rootMargin: "0px",
        threshold: 0
    };

    /**
    * Merge two or more objects. Returns a new object.
    * @private
    * @param {Boolean}  deep     If true, do a deep (or recursive) merge [optional]
    * @param {Object}   objects  The objects to merge together
    * @returns {Object}          Merged values of defaults and options
    */
    const extend = function ()  {

        let extended = {};
        let deep = false;
        let i = 0;
        let length = arguments.length;

        /* Check if a deep merge */
        if (Object.prototype.toString.call(arguments[0]) === "[object Boolean]") {
            deep = arguments[0];
            i++;
        }

        /* Merge the object into the extended object */
        let merge = function (obj) {
            for (let prop in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                    /* If deep merge and property is an object, merge properties */
                    if (deep && Object.prototype.toString.call(obj[prop]) === "[object Object]") {
                        extended[prop] = extend(true, extended[prop], obj[prop]);
                    } else {
                        extended[prop] = obj[prop];
                    }
                }
            }
        };

        /* Loop through each object and conduct a merge */
        for (; i < length; i++) {
            let obj = arguments[i];
            merge(obj);
        }

        return extended;
    };

    function LazyLoad(images, options) {
        this.settings = extend(defaults, options || {});
        this.images = images || document.querySelectorAll(this.settings.selector);
        this.observer = null;
        this.init();
    }

    LazyLoad.prototype = {
        init: function() {

            /* Without observers load everything and bail out early. */
            if (!root.IntersectionObserver) {
                this.loadImages();
                return;
            }

            let self = this;
            let observerConfig = {
                root: this.settings.root,
                rootMargin: this.settings.rootMargin,
                threshold: [this.settings.threshold]
            };

            this.observer = new IntersectionObserver(function(entries) {
                Array.prototype.forEach.call(entries, function (entry) {
                    if (entry.isIntersecting) {
                        self.observer.unobserve(entry.target);
                        let src = entry.target.getAttribute(self.settings.src);
                        let srcset = entry.target.getAttribute(self.settings.srcset);
                        if ("img" === entry.target.tagName.toLowerCase()) {
                            if (src) {
                                entry.target.src = src;
                            }
                            if (srcset) {
                                entry.target.srcset = srcset;
                            }
                        } else {
                            entry.target.style.backgroundImage = "url(" + src + ")";
                        }
                    }
                });
            }, observerConfig);

            Array.prototype.forEach.call(this.images, function (image) {
                self.observer.observe(image);
            });
        },

        loadAndDestroy: function () {
            if (!this.settings) { return; }
            this.loadImages();
            this.destroy();
        },

        loadImages: function () {
            if (!this.settings) { return; }

            let self = this;
            Array.prototype.forEach.call(this.images, function (image) {
                let src = image.getAttribute(self.settings.src);
                let srcset = image.getAttribute(self.settings.srcset);
                if ("img" === image.tagName.toLowerCase()) {
                    if (src) {
                        image.src = src;
                    }
                    if (srcset) {
                        image.srcset = srcset;
                    }
                } else {
                    image.style.backgroundImage = "url('" + src + "')";
                }
            });
        },

        destroy: function () {
            if (!this.settings) { return; }
            this.observer.disconnect();
            this.settings = null;
        }
    };

    root.lazyload = function(images, options) {
        return new LazyLoad(images, options);
    };

    if (root.jQuery) {
        const $ = root.jQuery;
        $.fn.lazyload = function (options) {
            options = options || {};
            options.attribute = options.attribute || "data-src";
            new LazyLoad($.makeArray(this), options);
            return this;
        };
    }

    return LazyLoad;
});


$('[data-src]').lazyload();