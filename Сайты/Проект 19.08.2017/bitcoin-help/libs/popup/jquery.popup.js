function popupOpen($target){
    $('.popup').fadeOut('slow');
    $(document).unbind('click.myEvent');

    var windowHeight = $(window).height(),
        nowPos = $(window).scrollTop(),
        popupHeight = $target.outerHeight(),
        popupWidth = $target.outerWidth();

    $target.css({
        marginLeft: -popupWidth / 2 + 'px',
        top: (windowHeight > popupHeight ? (windowHeight - popupHeight) / 2 : 20 ) + nowPos + 'px'
    });

    if ($target.css('display') != 'block') {
        $target.fadeIn('slow');
        $('.popup__back').fadeIn('slow');
        var firstClick = true;
        $(document).bind('click.myEvent', function(e) {
            if (!firstClick && $(e.target).closest($target).length == 0) {
                $('.popup__close').click();
            }
            firstClick = false;
        });
    }
}

$(function(){
    $('.js-popup').click(function(e) {
        e.preventDefault();
        popupOpen($('.popup--' + $(this).attr('data-popup')));
    });

    $('.popup__close, .popup__back').click(function(e) {
        $('.popup').fadeOut('slow');
        $('.popup__back').fadeOut('slow');
        $(document).unbind('click.myEvent');
        e.preventDefault();
    });

    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
            $('.popup').fadeOut('slow');
            $('.popup__back').fadeOut('slow');
            $(document).unbind('click.myEvent');
            e.preventDefault();
        }
    });
});