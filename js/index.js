var scrollTop =  document.documentElement.scrollTop || document.body.scrollTop;
var index,num = 0;
var sow = {left : -792 * num + 'px'};
// 根据滚轮高度显示动态效果
function scrollAnimate(){
	if(scrollTop >= 650 && scrollTop <= 1460){
		index = 0;
	}
	if(scrollTop >= 1560 && scrollTop <= 2630){
		index = 1;
	}
	if(scrollTop >= 2590 && scrollTop <= 3720){
		index = 2;
	}
	if(scrollTop >= 3720){
		index = 3;
	}
	$('div.main>div[class^=part]').children().eq(index).css({'transform':'translateY(0px)','-webkit-transform':'translateY(0px)','-moz-transform':'translateY(0px)','-ms-transform':'translateY(0px)','-o-transform':'translateY(0px)','opacity':'1'});
}
// 图片的动态效果
function imgAnimate(){
	sow = {left : -792 * num + 'px'};
	if(num == 6){
		$('.sowingMap>ul>li>img').eq(0).attr('src','img/p4-ph_ea1c181.png').parent().siblings().children().attr('src','img/p4-p_c0ff378.png');
	}else{
		$('.sowingMap>ul>li>img').eq(num).attr('src','img/p4-ph_ea1c181.png').parent().siblings().children().attr('src','img/p4-p_c0ff378.png');
	}
	$('.map>ul').animate(sow,1000);
}
	
$(function(){
	// 过渡logo和download
	$(document).ready(function(){
		$('div.ban_js_1').css({'transform':'translateY(0px)','-webkit-transform':'translateY(0px)','-moz-transform':'translateY(0px)','-ms-transform':'translateY(0px)','-o-transform':'translateY(0px)','opacity':'1'}).next().css({'transform':'translateX(0px)','-webkit-transform':'translateX(0px)','-moz-transform':'translateX(0px)','-ms-transform':'translateX(0px)','-o-transform':'translateX(0px)','opacity':'1'}); 
	})
	// 滚动事件
	$(window).scroll(function(){
		scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		scrollAnimate();
	});
	// 关闭浮动活动栏
	$('div.activity>div>img').click(function(){
		$('div.activity').css('display','none');
	});
	// 轮播图上一张
	$('#p4_prev').click(function(){
		if(num == 0){
			num = 6;
			$('.map>ul').css('left',-792*num+'px');
		}
		num --;
		imgAnimate();
	});
	// 轮播图下一张
	$('#p4_next').click(function(){
		if(num == 6){
			num = 0;
			$('.map>ul').css('left',-792*num+'px');
		}
		num ++;
		imgAnimate();
	});
	$('.sowingMap>ul>li').click(function(){
		num = $('.sowingMap>ul>li').index(this);
		imgAnimate();
	});
});

scrollAnimate();