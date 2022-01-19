$(function () {
    $(".btn_show").click(function () {
        $(".sidebar").slideToggle();
    });
});


$(window).resize(function () {
    if (window.innerWidth <= 599) {
        $('.sidebar').hide();
    }
});

$(function () {
    var w = window.innerWidth;
    function prev() {
        $('.slick_track .item_slide:last').prependTo('.slick_track');
        $('.slick_track').css('margin-left', -w);
        $('.slick_track').stop().animate({ marginLeft: 0 }, 800);
    }
    function next() {
        $('.slick_track').stop().animate({ 'marginLeft': -w }, function () {
            $('.slick_track .item_slide:first').appendTo('.slick_track');
            $('.slick_track').css({ marginLeft: 0 }, 800);
        });
    }
    function slide() {
        $('.slick_track').stop().animate({ marginLeft: -w }, function () {
            $('.slick_track .item_slide:first').appendTo('.slick_track');
            $('.slick_track').css({ marginLeft: 0 });
        });
    }
    setInterval(slide, 10000);
    $('.prev').click(function () {
        prev();
    });
    $('.next').click(function () {
        next();
    });

});

$(function () {
    $('.play').click(function () {
        $('#box').css('display', 'block');
    });
    $('#cbtn').click(function () {
        $('#box').css('display', 'none');
    });
});
