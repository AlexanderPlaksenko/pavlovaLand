'use strict';
import './modules';

global.jQuery = global.$ = require('jquery');
var slick = require('slick-carousel');
var inputmask = require('inputmask/dist/min/jquery.inputmask.bundle.min');
var fancy = require('fancy');
var jm = require('jquery-mousewheel');
var scrollbar = require('malihu-custom-scrollbar-plugin');
var spectragram = require("spectragram.min");

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

setInterval(
    function mainSlider() {
        var random = getRandomInt(0, 16);

        var $li = $(".mainSlider .photoSlider");
        var $liActive = $(".mainSlider .bg-on");

        $li.eq(random % $li.length).addClass("bg-on");
        $liActive.eq(random / 2 % $liActive.length).removeClass("bg-on");

    }, 3000);

$(".input").inputmask({
    mask: ["+7 (999) 999-99-99"]
});

$('.med-image, .studio-image, .photoSlider').fancybox({
    buttons: [
        //'slideShow',
        //'fullScreen',
        //'thumbs',
        //'download',
        //'share',
        'close'
    ],
    loop: true
});

$('.service-el_button').on('click', function () {
    $(".formInput").inputmask({
        mask: ["+7 (999) 999-99-99"]
    });
    $.fancybox.open({
        type: 'inline',
        src: '#service-request',
        touch: false
    })
});

$('.instagram-carousel').slick({
    lazyLoad: 'ondemand',
    dots: true,
    infinite: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false
            }
        }
    ]
});
$('.collective-carousel, .youtube-carousel').slick({
    lazyLoad: 'ondemand',
    dots: true,
    infinite: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }
    ]
});

(function vkFeedback() {
    var vkCarousel = $('.vk-carousel');
    $.ajax({
        url: 'https://api.vk.com/method/board.getComments?group_id=54002395&topic_id=29356060&extended=1&sort=desc&count=35&v=5.69',
        type: "GET",
        dataType: "jsonp",
        success: function (data) {
            var items = data.response.items,
                profiles = data.response.profiles,
                textNice = $('.vkItem-text-posa');

            for (var i = 0; i < items.length; i++) {
                for (var j = 0; j < profiles.length; j++) {

                    if(profiles[j].id === 329031346) {
                        delete profiles[j].id
                    }
                    if(profiles[j].id === 306924120) {
                        delete profiles[j].id
                    }
                    if(profiles[j].id === 133410127) {
                        delete profiles[j].id
                    }
                    if(profiles[j].id === 74440225) {
                        delete profiles[j].id
                    }
                    if(profiles[j].id === 154139772) {
                        delete profiles[j].id
                    }
                    if(items[i].text === '') {
                        if(profiles[j].id === 6262936) {
                            delete profiles[j].id
                        }
                    }
                    if (profiles[j].id === items[i].from_id) {
                        items[i].first_name = profiles[j].first_name;
                        items[i].last_name = profiles[j].last_name;
                        items[i].photo_100 = profiles[j].photo_100;
                        items[i].linkVK = 'id' + items[i].from_id;

                        vkCarousel.append(
                            '<div class="vkItem">'
                                +'<div class="vkItem-header">'
                                    + '<div class="vkItem-left" style="background-image: url('+ items[i].photo_100 +')">'+'</div>'
                                    + '<div class="vkItem-right">'
                                        + '<div class="vkItem-fname">'+ items[i].first_name +'</div>'
                                        + '<div class="vkItem-lname">'+ items[i].last_name +'</div>'
                                        + '<a class="vkItem-link" href="https://vk.com/' + items[i].linkVK + '" target="_blank">'+ items[i].linkVK +'</a>'
                                    +'</div>'
                                +'</div>'
                                +'<div class="vkItem-text">'
                                    +'<div class="vkItem-text-posa">'
                                        +'<span class="vkItem-text-posa-span">'+ items[i].text.replace(/ *\[[^)]*\], */g, "") +'</span>'
                                    +'</div>'
                                +'</div>'+
                            '</div>'
                        );
                    }
                }
            }
        }
    }).done(function () {
        vkCarousel.slick({
            dots: true,
            infinite: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        arrows: false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                }
            ]
        }).init();
        $('.vkItem-text-posa').mCustomScrollbar({
            autoDraggerLength: false,
            live: 'on',
            mouseWheel:{ enable: true, preventDefault: true }
        });
    })
})();
var header = $('.header-wrapper');
var headerHeight = header.outerHeight();

$("[data-scroll-to]").on('click', function() {
    var $this = $(this),
        $toElement      = $this.attr('data-scroll-to'),
        $focusElement   = $this.attr('data-scroll-focus'),
        $offset         = $this.attr('data-scroll-offset') * 1 || 0,
        $speed          = $this.attr('data-scroll-speed') * 1 || 500;

    $('html, body').animate({
        scrollTop: $($toElement).offset().top + $offset
    }, $speed);

    if ($focusElement) $($focusElement).focus();
});
$("[data-link-to]").on('click', function() {
    var $this = $(this),
        $toElement      = $this.attr('data-link-to');
    $($toElement).toggleClass('activeTop');
    if ($($toElement).css('top') === headerHeight + 'px') {
        $($toElement).css('top', '');
        return false;
    } else {
        $($toElement).css('top', headerHeight);
        return false;
    }
});

(function () {
    jQuery.fn.spectragram.accessData = {
        accessToken: '1982333115.960a4d5.891a342883d641a6b4a8d67ba35fff13',
        clientID: '960a4d59c0c44c8bb7db59b3e144ca98'
    };
    $('#instafeedVek').spectragram('getRecentTagged',{
        query: 'pavlovastudioeye'
    });
})();
(function () {
    jQuery.fn.spectragram.accessData = {
        accessToken: '1982333115.960a4d5.891a342883d641a6b4a8d67ba35fff13',
        clientID: '960a4d59c0c44c8bb7db59b3e144ca98'
    };
    $('#instafeedBrow').spectragram('getRecentTagged',{
        query: 'pavlovastudiobrow'
    });
})();
(function () {
    jQuery.fn.spectragram.accessData = {
        accessToken: '1982333115.960a4d5.891a342883d641a6b4a8d67ba35fff13',
        clientID: '960a4d59c0c44c8bb7db59b3e144ca98'
    };
    $('#instafeedGub').spectragram('getRecentTagged',{
        query: 'pavlovastudiolips'
    });
})();
