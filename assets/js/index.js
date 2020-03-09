$(function () {

    const $li = $('li');

    $li.on('click', function (e) {
        e.preventDefault();

        $('.panels').stop(true).fadeOut();

        let href = $(this).find('a').attr('href');
        $(href).stop(true).fadeIn();
    });

});