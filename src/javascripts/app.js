'use strict';

global.jQuery = global.$ = require('jquery');
var slick = require('slick-carousel');
var inputmask = require('inputmask/dist/min/jquery.inputmask.bundle.min');
var fancy = require('fancy');
var jm = require('jquery-mousewheel');
var scrollbar = require('malihu-custom-scrollbar-plugin');

var header = $('.header-wrapper');
var headerHeight = header.outerHeight();
var vkFolioWrapper = $('.vkFolio-wrapper');

console.log(city);
if (city === 'msc') {
    var apiUrl = 'https://api.vk.com/method/board.getComments?group_id=130717807&topic_id=36896690&extended=1&sort=desc&count=35&v=5.69';
}
if (city === 'ekb') {
    var apiUrl = 'https://api.vk.com/method/board.getComments?group_id=54002395&topic_id=29356060&extended=1&sort=desc&count=35&v=5.69';
}
(function vkFeedback() {
    var vkCarousel = $('.vk-carousel');
    $.ajax({
        url: apiUrl,
        type: "GET",
        dataType: "jsonp",
        success: function (data) {
            var items = data.response.items,
                profiles = data.response.profiles,
                textNice = $('.vkItem-text-posa');

            for (var i = 0; i < items.length; i++) {
                for (var j = 0; j < profiles.length; j++) {
                    if (profiles[j].id === 268222188) {
                        delete profiles[j].id
                    }
                    if (profiles[j].id === 125653860) {
                        delete profiles[j].id
                    }
                    if (profiles[j].id === 429644239) {
                        delete profiles[j].id
                    }
                    if (profiles[j].id === 329031346) {
                        delete profiles[j].id
                    }
                    if (profiles[j].id === 306924120) {
                        delete profiles[j].id
                    }
                    if (profiles[j].id === 133410127) {
                        delete profiles[j].id
                    }
                    if (profiles[j].id === 74440225) {
                        delete profiles[j].id
                    }
                    if (profiles[j].id === 154139772) {
                        delete profiles[j].id
                    }
                    if (items[i].text === '') {
                        if (profiles[j].id === 6262936) {
                            delete profiles[j].id
                        }
                    }
                    if (profiles[j].id === items[i].from_id) {
                        items[i].first_name = profiles[j].first_name;
                        items[i].last_name = profiles[j].last_name;
                        items[i].photo_100 = profiles[j].photo_100;
                        items[i].linkVK = 'id' + items[i].from_id;

                        vkCarousel.append(
                            '<div class="vkItem">' +
                            '<div class="vkItem-header">' +
                            '<div class="vkItem-left" style="background-image: url(' + items[i].photo_100 + ')">' + '</div>' +
                            '<div class="vkItem-right">' +
                            '<div class="vkItem-fname">' + items[i].first_name + '</div>' +
                            '<div class="vkItem-lname">' + items[i].last_name + '</div>' +
                            '<a class="vkItem-link" href="https://vk.com/' + items[i].linkVK + '" target="_blank">' + items[i].linkVK + '</a>' +
                            '</div>' +
                            '</div>' +
                            '<div class="vkItem-text">' +
                            '<div class="vkItem-text-posa">' +
                            '<span class="vkItem-text-posa-span">' + items[i].text.replace(/ *\[[^)]*\], */g, "") + '</span>' +
                            '</div>' +
                            '</div>' +
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
            responsive: [{
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
            mouseWheel: {
                enable: true,
                preventDefault: true
            }
        });
    })
})();

(function vkFolio() {
    var vkFolioBrow = $('#vkFolioBrow');
    var vkFolioLips = $('#vkFolioLips');
    var vkFolioEye = $('#vkFolioEye');
    $.ajax({
        url: 'https://api.vk.com/method/photos.get?owner_id=-54002395&album_id=249445812&rev=1&extended=0&photo_sizes=0&count=60&v=5.69',
        type: "GET",
        dataType: "jsonp",
        success: function (data) {
            var items = data.response.items;
            for (var i = 0; i < items.length; i++) {
                if (items[i].text === '#pavlovastudiobrow') {
                    vkFolioBrow.append(
                        '<div class="vkFolio-item" data-fancybox="browVK" data-type="image" href=' + items[i].photo_1280 + '>' +
                        '<img src=' + items[i].photo_604 + ' alt="">' +
                        '</div>'
                    );
                }
                if (items[i].text === '#pavlovastudiolips') {
                    vkFolioLips.append(
                        '<div class="vkFolio-item" data-fancybox="lipsVK" data-type="image" href=' + items[i].photo_1280 + '>' +
                        '<img src=' + items[i].photo_604 + ' alt="">' +
                        '</div>'
                    );
                }
                if (items[i].text === '#pavlovastudioeye') {
                    vkFolioEye.append(
                        '<div class="vkFolio-item" data-fancybox="eyeVK" data-type="image" href=' + items[i].photo_1280 + '>' +
                        '<img src=' + items[i].photo_604 + ' alt="">' +
                        '</div>'
                    );
                }
            }
        },
    }).done(
        function() {
            vkFolioWrapper.slick({
                dots: false,
                infinite: true,
                slidesToShow: 3,
                rows: 2,
                responsive: [{
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            arrows: true,
                            rows: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: true,
                            rows: 1
                        }
                    }
                ]
            }).init();
        }
    )
})();

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function mainSlider() {
    var random = getRandomInt(0, 16);

    var $li = $(".mainSlider .photoSlider");
    var $liActive = $(".mainSlider .bg-on");

    $li.eq(random % $li.length).addClass("bg-on");
    $liActive.eq(random / 2 % $liActive.length).removeClass("bg-on");
}

setInterval(mainSlider, 3000);

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

function modalForm() {
    $(".formInput").inputmask({
        mask: ["+7 (999) 999-99-99"]
    });
    $.fancybox.open({
        type: 'inline',
        src: '#service-request',
        touch: false
    });

    var serviceName = $(this).text().trim();
    var serviveNameInput = $("input[name='service_name']");

    serviveNameInput.val(serviceName)
}

$('.service-el_button').on('click', modalForm);

$('.bFolio').on('click', modalForm);

$('.instagram-carousel').slick({
    lazyLoad: 'ondemand',
    dots: true,
    infinite: true,
    responsive: [{
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
    responsive: [{
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

$("[data-scroll-to]").on('click', function () {
    var $this = $(this),
        $toElement = $this.attr('data-scroll-to'),
        $focusElement = $this.attr('data-scroll-focus'),
        $offset = $this.attr('data-scroll-offset') * 1 || 0,
        $speed = $this.attr('data-scroll-speed') * 1 || 500;

    $('html, body').animate({
        scrollTop: $($toElement).offset().top + $offset
    }, $speed);

    if ($focusElement) $($focusElement).focus();
});

$("[data-link-to]").on('click', function (e) {
    e.preventDefault();
    var $this = $(this),
        $toElement = $this.attr('data-link-to');
    if ($($toElement).css('top') === headerHeight + 'px') {
        $('body').removeClass('c'+$toElement);
        top.$($toElement).css('top', '').hide();
        $('.activeTop').removeClass('activeTop').css('top', '').hide();
        return false;
    } else {
        $('body').addClass('c'+$toElement);
        $('.activeTop').removeClass('activeTop').css('top', '').hide();
        top.$($toElement).show().animate({
            top: headerHeight
        }, 200);
        $($toElement).addClass('activeTop');
        return false;
    }
});

(function maskedInput(){
    $(".input").inputmask({
        mask: ["+7 (999) 999-99-99"]
    });
})();

$(".phoneOnly").submit(function (e) {
    e.preventDefault();
    var form_data = $(this).serialize();
    $.ajax({
        type: "POST",
        url: "send.php",
        data: form_data,
        success: function () {
            $.fancybox.close(true);
            $.fancybox.open({
                type: 'inline',
                src: '#modal-success',
                touch: false
            })
        }
    })
});

$(".fullForm").submit(function (e) {
    e.preventDefault();
    var form_data = $(this).serialize();
    $.ajax({
        type: "POST",
        url: "send1.php",
        data: form_data,
        success: function () {
            $.fancybox.close(true);
            $.fancybox.open({
                type: 'inline',
                src: '#modal-success',
                touch: false
            })
        }
    })
});

// Parse the URL
function getUtmParameters(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

// Give the URL parameters variable names
var source = getUtmParameters('utm_source');
var medium = getUtmParameters('utm_medium');
var campaign = getUtmParameters('utm_campaign');

// Put the variable names into the hidden fields in the form.
$("input[name='utm_source']").val(source);
$("input[name='utm_medium']").val(medium);
$("input[name='utm_campaign']").val(campaign);