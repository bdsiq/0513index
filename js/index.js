/**
 * Created by gud on 15/9/21.
 */
$(function(){
     //顶部—下拉菜单
    var $obj = $('.toptar-nav').find('.menu-select');
    var menu =  $('.toptar-nav').find('.app-list');

    $obj.hover(function() {
        var obj = $(this);

        timer1 = setTimeout(function() {
            obj.addClass('menu-hover');
            menu.show();
        }, 250);
    }, function() {
        clearTimeout(timer1);
        $(this).removeClass('menu-hover');
        menu.hide();
    });

});

$(function(){
    var nav = $(".tab_holder li");
    nav.hover(function() {
        var obj2 = $(this);
        timer2 = setTimeout(function() {
            obj2.addClass('navhover');
            menu.show();
        }, 0);
    }, function() {
        clearTimeout(timer2);
        $(this).removeClass('navhover');
    });
});
