function subItemsHover() {
    $("#submenu .item").mouseenter(function () {
        $(this).addClass('expanded');
    });
    $("#submenu .item").mouseleave(function () {
        $(this).removeClass('expanded');
    });
}

$(function () {
    subItemsHover();
    $('#slides').slides({
        preload: true,
        preloadImage: 'img/loading.gif',
        play: 5000,
        pause: 2500,
        hoverPause: true
    });

});