$(".classify-img").click(function () {
    $(".classify-img").css('box-shadow', '5px 5px 3px 5px rgba(220, 220, 220, 1)')
    $(this).css('box-shadow', '');
    $(".classify-all").hide(0).fadeIn(1500)
});
$(document).ready(function () {
    $(".classify-all").fadeIn(1500)
    $(".classify-img").each(function (index) {
        if (index != 0) {
            $(this).css('box-shadow', '5px 5px 3px 5px rgba(220, 220, 220, 1)')
        }
    });
    //导航栏
    $('#search').click(function () {
        $('#search-bar').removeClass('search-bar-close').addClass('search-bar-display');
    });
    $('#search-bar').children('i:last').click(function () {
        $('#search-bar').removeClass('search-bar-display').addClass('search-bar-close');
    });
    $('#title').click(function () {
        location.href='index.html';
    });
    $('#shopping-cart').click(function () {
        location.href = 'shoppingCart.html';
    })
});

