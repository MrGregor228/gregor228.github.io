﻿$(document).ready(function(){
    $(".navig").on("click","a", function (event) {

        event.preventDefault();
 
        var id  = $(this).attr('href'),
 
            top = $(id).offset().top;
         
        $('body,html').animate({scrollTop: top}, 1000);
    });

    $(".top_button").on("click","a", function (event) {

        event.preventDefault();
 
        var id  = $(this).attr('href'),
 
            top = $(id).offset().top;
         
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar , .navbar ul li , .navabr ul li a");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});
