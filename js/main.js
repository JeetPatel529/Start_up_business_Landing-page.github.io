$(document).ready(function () {
    $('.acc-container .acc:nth-child(1) .acc-head').addClass('active');
    $('.acc-container .acc:nth-child(1) .acc-content').slideDown();
    $('.acc-head').on('click', function () {
        if ($(this).hasClass('active')) {
            $(this).siblings('.acc-content').slideUp();
            $(this).removeClass('active');
        }
        else {
            $('.acc-content').slideUp();
            $('.acc-head').removeClass('active');
            $(this).siblings('.acc-content').slideToggle();
            $(this).toggleClass('active');
        }
    });
});