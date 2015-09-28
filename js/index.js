/**
 * Created by gud on 15/9/21.
 */
<<<<<<< Updated upstream
$(function () {
    pingyimove(".left_1", ".right_1", ".pic", ".dian", ".box");
    xialapingyi(".fruit-info","#down_arrow");
})
$(function () {
    //顶部—下拉菜单
    var $obj = $('.menu-select');
    var menu = $('.app-list');
=======
$(function(){
    var $obj = $('.toptar-nav').find('.menu-select');
    var menu =  $('.toptar-nav').find('.app-list');
>>>>>>> Stashed changes

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
});
$(function () {
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
//图片平移轮播开始
function pingyimove(btn1,btn2,box,mos,parent){
    var liShu=$(box).first().children().length;
    var liWidth=$(box).children().width();
    var ulWidth=liWidth*liShu;
    var num=0;
    var move=0;
    $(box).css('width',''+ulWidth+'px');
    $(mos).children().mouseover(function(){
        $(this).addClass('current').siblings().removeClass('current');
        $(this).closest(parent).find(box).stop().animate({'left':''+$(this).index()*-liWidth+'px'},600);
    })
    $(btn1).click(function(){
        move+=liWidth;
        num--;
        if(num<0){
            num=liShu-1;
            move=-(ulWidth-liWidth);
        }
        $(this).closest(parent).find(box).stop().animate({'left':''+move+'px'},250,"linear");
        $(this).closest(parent).find(mos).children().eq(num).addClass('current').siblings().removeClass('current');
    })
    $(btn2).click(function(){
        move-=liWidth;
        num++;
        if(num>liShu-1){
            move=0;
            num=0;
        }
        $(this).closest(parent).find(box).stop().animate({'left':''+move+'px'},250,"linear");
        $(this).closest(parent).find(mos).children().eq(num).addClass('current').siblings().removeClass('current');
    })
}
//图片平移轮播结束
function xialapingyi(box,btn1){
    var liShu=$(box).first().children().length;
    var liHeight=$(box).children().height();
    var ulHeight=liHeight*liShu;
    var num=0;
    var move=0;
    $(box).css('height',''+ulHeight+'px');
    $(btn1).click(function(){

        move+=liHeight;
        num--;
        if(num<0){
            num=liShu-1;
            move=-(ulHeight-liHeight);
        }
        $(box).stop().animate({'top':''+move+'px'},450,"linear");
    })
}

