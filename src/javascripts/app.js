'use strict';
import './modules';

global.jQuery = global.$ = require('jquery');
var slick = require('slick-carousel');
var fancy = require('fancy');


$('.med-image, .studio-image').fancybox({
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

var url = 'https://api.vk.com/method/board.getComments?group_id=54002395&topic_id=29356060&v=5.69';
$.ajax({
    url: url,
    dataType: "jsonp",
    success : function(msg){
        console.log(msg.response[0]);
    }
});
