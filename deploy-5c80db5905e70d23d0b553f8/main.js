$(document).ready(function(){
    "use strict";
    $("#scroll-btn").click(function() {
    $('html, body').animate({
        scrollTop:$("#labelContainer").offset().top
    }, 1500);
});
    $(".block").hide();
    $(".title").hide();
    $("#product-btn").click(function(){
        $(".block").hide();
        $("#productBlock").toggle(3000);
    });
    $("#graphic-btn").click(function(){
        $(".block").hide();
        $("#graphicBlock").toggle(3000);
    });
    $("#photo-btn").click(function(){
        $(".block").hide();
        $("#photoBlock").toggle(3000);
    });
    $("#ui-btn").click(function(){
        $(".block").hide();
        $("#uiBlock").toggle(3000);
    });
    $("img").hover(function(){
        $(".title").toggle();
    });
});
// JavaScript Document