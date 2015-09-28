/**
 * Created by gud on 15/9/21.
 */
$(function () {
    //顶部—下拉菜单
    var $obj = $('.menu-select');
    var menu = $('.app-list');
    var $obj = $('.toptar-nav').find('.menu-select');
    var menu =  $('.toptar-nav').find('.app-list');
    $obj.hover(function () {
        var obj = $(this);

        timer1 = setTimeout(function () {
            obj.addClass('menu-hover');
            menu.show();
        }, 250);
    }, function () {
        clearTimeout(timer1);
        $(this).removeClass('menu-hover');
        menu.hide();
    });
    //顶部—下拉菜单
    var $obj2 = $('.nav_holder').find('dl');
    $obj2.hover(function () {
        var obj = $(this);
        timer1 = setTimeout(function () {
            obj.addClass('nhbg');
        }, 50);
    }, function () {
        clearTimeout(timer1);
        $(this).removeClass('nhbg');
    });
});
//$(function(){
//
//});
//$(function () {
//
//});


