var slideNavigatePostion;

$(function () {
    $("body").niceScroll();
    control.initBackgroundheight();
    control.resizeBackgroundHeight();
    control.clickSearch();
    control.logoParallax();
    control.clickScrollDown();
    control.floatSlideNavigate();
    control.parallax();
    slideNavigatePostion = $('#slide-navigate').offset().top;
    control.clickType();
    control.clickTitle();
    control.clickShoppingCart();
});

var control = {
    initBackgroundheight: function () {
        $('#background').height(window.innerHeight - $('#top-navigate').height())
    },
    resizeBackgroundHeight: function () {
        $(window).resize(function () {
            $('#background').height(window.innerHeight - $('#top-navigate').height());
            slideNavigatePostion = $('#slide-navigate').offset().top;
        })
    },
    clickSearch: function () {
        $('#search').click(function () {
            $('#search-bar').removeClass('search-bar-close').addClass('search-bar-display');
        });
        $('#search-bar').children('i:last').click(function () {
            $('#search-bar').removeClass('search-bar-display').addClass('search-bar-close');
        })
    },
    clickType: function () {
        $('.img').click(function () {
            location.href = 'classify.html';
        })
    },
    clickShoppingCart: function () {
        $('#shopping-cart').click(function () {
            location.href = 'shoppingCart.html';
        })
    },clickTitle:function () {
        $('#title').click(function () {
            location.href='index.html';
        });
    },
    logoParallax: function () {
        $(document).scroll(function () {
            var headerHeight = $('#background').height(), pos = $(document).scrollTop(),
                parallax = parseInt(pos * -0.3) + 'px', rgba = 0.95 - (pos / headerHeight) * 0.4;
            $('#lc-logo').css('margin-top', parallax);
            $('#background').css({
                'filter': 'brightness(' + rgba + ')'
            });
        })
    },
    clickScrollDown: function () {
        $('#scroll-down').click(function () {
            $("html,body").animate({
                scrollTop: slideNavigatePostion
            }, {
                duration: 1000,
                easing: "easeOutCubic"
            })
        })
    },
    floatSlideNavigate: function () {
        $(document).scroll(function () {
            if (parseInt($(document).scrollTop()) >= slideNavigatePostion - 60) {
                $('#slide-navigate').removeClass('slide-navigate-float').addClass('slide-navigate-fixed');
                $('#top-navigate').removeClass('top-navigate-display').addClass('top-navigate-close');
            }
            else if (parseInt($(document).scrollTop()) < slideNavigatePostion - 60) {
                $('#slide-navigate').removeClass('slide-navigate-fixed').addClass('slide-navigate-float');
                $('#top-navigate').removeClass('top-navigate-close').addClass('top-navigate-display');
            }
        })
    },
    parallax: function () {
        $(document).scroll(function () {
            $('.img').each(function (inedx, element) {
                var pos = ($(document).scrollTop() - $(this).offset().top) / 100;
                var scaleValue = 1.4 - pos / 45;
                if (scaleValue < 1) scaleValue = 1;
                $(this).find('.main-img img').css({
                    'transform': 'scale(' + scaleValue + ')',
                    '-webkit-transform': 'scale(' + scaleValue + ')'
                });
                $(this).children('.small-img').css({
                    'transform': 'translate3d(0,' + (-pos * 15) + 'px,0)',
                    '-webkit-transform': 'translate3d(0,' + (-pos * 15) + 'px,0)'
                });
                $(this).children('.img-num').css({
                    'transform': 'translate3d(0,' + (-pos * 20) + 'px,0)',
                    '-webkit-transform': 'translate3d(0,' + (-pos * 20) + 'px,0)'
                });
            })
        })
    }
};