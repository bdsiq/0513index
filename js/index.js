/**
 * Created by gud on 15/9/21.
 */
$(function () {
    //顶部—下拉菜单
    var $obj = $('.menu-select');
    var menu = $('.app-list');

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
        $(this).closest(parent).find(box).stop().animate({'left':''+$(this).index()*-liWidth+'px'},500);
    })
    $(btn1).click(function(){
        move+=liWidth;
        num--;
        if(num<0){
            num=liShu-1;
            move=-(ulWidth-liWidth);
        }
        $(this).closest(parent).find(box).stop().animate({'left':''+move+'px'},500);
        $(this).closest(parent).find(mos).children().eq(num).addClass('current').siblings().removeClass('current');
    })
    $(btn2).click(function(){
        move-=liWidth;
        num++;
        if(num>liShu-1){
            move=0;
            num=0;
        }
        $(this).closest(parent).find(box).stop().animate({'left':''+move+'px'},500);
        $(this).closest(parent).find(mos).children().eq(num).addClass('current').siblings().removeClass('current');
    })
}
//图片平移轮播结束
//单步平移展示效果开始
function Move(btn1,btn2,box,btnparent,shu){
    var llishu=$(box).first().children().length
    var liwidth=$(box).children().width();
    var boxwidth=llishu*liwidth;
    var shuliang=llishu-shu;
    $(box).css('width',''+boxwidth+'px');
    var num=0;
    $(btn1).click(function(){
        num++;
        if (num>shuliang) {
            num=shuliang;
        }
        var move=-liwidth*num;
        $(this).closest(btnparent).find(box).stop().animate({'left':''+move+'px'},500);
    });
    $(btn2).click(function(){
        num--;
        if (num<0) {
            num=0;
        }
        var move=liwidth*num;
        $(this).closest(btnparent).find(box).stop().animate({'left':''+-move+'px'},500);
    })
}

