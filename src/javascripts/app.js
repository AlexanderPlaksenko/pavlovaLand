'use strict';
import './modules';

global.jQuery = global.$ = require('jquery');
var slick = require('slick-carousel');
var inputmask = require('inputmask/dist/min/jquery.inputmask.bundle.min');
var fancy = require('fancy');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

setInterval(
    function mainSlider() {
        var random = getRandomInt(0, 16);

        var $li = $(".mainSlider .photoSlider");
        var $liActive = $(".mainSlider .bg-on");

        $li.eq(random % $li.length).addClass("bg-on");
        $liActive.eq(random/2 % $liActive.length).removeClass("bg-on");

    }, 3000);

$(".input").inputmask({
    mask: ["+7 (999) 999-99-99"]
});

$('.med-image, .studio-image, .photoSlider').fancybox({
    buttons : [
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
        touch : false
    })
});

$('.collective-carousel, .instagram-carousel, .youtube-carousel').slick({
    lazyLoad: 'ondemand',
    dots: true,
    infinite: true
});

var url = 'https://api.vk.com/method/board.getComments?group_id=54002395&topic_id=29356060&v=5.69';
$.ajax({
    url: url,
    dataType: "jsonp",
    success : function(msg){
        console.log(msg.response[0]);
    }
});
