$(function(){
	// 亮度变化
	$('.bright').next().css({'-webkit-filter':'brightness(0.7)','filter':'brightness(0.7)','-o-transition':'all .5s','-webkit-transition':'all .5s','-moz-transition':'all .5s','-ms-transition':'all .5s','transition':'all .5s'});
	$('.bright').hover(function(){
		$(this).next().css({'-webkit-filter':'brightness(1)','filter':'brightness(1)'});
	},function(){
		$(this).next().css({'-webkit-filter':'brightness(0.7)','filter':'brightness(0.7)'});
	});
	// 移入移出动画
	$('div.evidence').hover(function(){$(this).next().children().addClass('swing')},function(){
		if($(this).next().children().hasClass('swing')){
			$(this).next().children().removeClass('swing');
		}
	});
});