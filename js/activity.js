$(function(){
	var scrollTop;
	var barTop = $('div.banner>ul').offset().top;
	var barArr = ['nav1_31dafdf.png','nav2_d761559.png','nav4_106b292.png','nav3_6652f7e.png','nav5_c19897b.png','nav6_9f98f67.png'];	//导航未选中的图片地址
	var barArrHover = ['nav1-hover_66b8c85.png','nav2-hover_038ae11.png','nav4-hover_db0a28f.png','nav3-hover_d738d60.png','nav5-hover_6c04f5a.png','nav6-hover_7352567.png'];	//导航选中的图片地址
	var bottom = ['170px','170px'];	//用于存储bottom值
	var p3Nav = ['nav1_1574f8f.png','nav2_28bfe4e.png','nav3_aa079de.png','nav4_61fb2f6.png','nav5_00ffc28.png'];	//第三页导航未选中图片地址
	var p3NavHover = ['nav1-hover_d5d809a.png','nav2-hover_fe5218f.png','nav3-hover_af1fdde.png','nav4-hover_e45ce15.png','nav5-hover_3544efa.png'];	//第三页导航选中的图片地址
	
	// logo和官网图标效果
	$('div.banner').children().css({'-webkit-transform': 'translate(0,0)','-moz-transform': 'translate(0,0)','-ms-transform': 'translate(0,0)','-o-transform': 'translate(0,0)','transform': 'translate(0,0)','-webkit-opacity': '1','-moz-opacity': '1','opacity': '1','filter': 'alpha(opacity=100)'});
	// 吸顶导航
	$(window).scroll(function(){
		scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if(scrollTop >= barTop){
			$('div.banner>ul').addClass('fixed');
		}else{
			$('div.banner>ul').removeClass('fixed');
		}
	});
	$('.page3_box>ul.content>li').eq(0).fadeIn().siblings().fadeOut();

	// 导航点击
	$('div.banner>ul>li').click(function(){
		for(var i=0;i<$('div.banner>ul>li').length;i++){
			$('div.banner>ul>li').eq(i).removeClass('click').css('background','none').children().attr('src','img/'+barArr[i]);
		}
		$(this).addClass('click').css('background','url(img/nav-hover-bg_88533c2.png)').children().attr('src','img/'+barArrHover[$(this).index()]);
		$('.page'+($(this).index()+1)).show().siblings('.page').hide();		//页面切换
		// 设置页面高度
		if($(this).index() == 2){
			$('.pageWrap').height(2285);
		}else if($(this).index() == 3){
			$('.pageWrap').height(2485);
		}else if($(this).index() == 4){
			$('.pageWrap').height(2385);
		}else if($(this).index() == 5){
			$('.pageWrap').height(685);
		}else{
			$('.pageWrap').height(4085);
		}
		$('.footer').css('bottom',bottom[$(this).index()]);		//设置尾部高度
	});
	// 导航移入、移出
	$('div.banner>ul>li').hover(function(){
		$(this).children().attr('src','img/'+barArrHover[$(this).index()]);
		$(this).css('background','url(img/nav-hover-bg_88533c2.png)');
	},function(){
		if(!$(this).hasClass('click')){
			$(this).children().attr('src','img/'+barArr[$(this).index()]);
			$(this).css('background','none')
		}
	});
	// 第三页导航点击
	$('.page3_box>ul.nav>li').click(function(){
		for(var j=0;j<$('.page3_box>ul>li').length;j++){
			$('.page3_box>ul.nav>li').eq(j).removeClass('click').css('background','url(img/'+p3Nav[j]+') no-repeat');
		}
		$(this).addClass('click').css('background','url(img/'+p3NavHover[$(this).index()]+') no-repeat');
		$('.page3_box>ul.content>li').eq($(this).index()).siblings().fadeOut(200);
		var that = this;
		var timer = setTimeout(function(){
			$('.page3_box>ul.content>li').eq($(that).index()).fadeIn(200);
			clearTimeout(timer);
		},200);
	});
	// 第三页导航移入、移出
	$('.page3_box>ul.nav>li').hover(function(){
		$(this).css('background','url(img/'+p3NavHover[$(this).index()]+') no-repeat');
	},function(){
		if(!$(this).hasClass('click')){
			$(this).css('background','url(img/'+p3Nav[$(this).index()]+') no-repeat');
		}
	});
	// 第四页导航点击
	$('.page4_box>ul.page4_nav>li').click(function(){
		$(this).addClass('click').siblings().removeClass('click');
		$('.page4_box>ul.page4_con>li').eq($(this).index()).show().siblings().hide();
	});
	// 第四页导航移入、移出
	$('.page4_box>ul.page4_nav>li').hover(function(){
		$(this).addClass('hover');
	},function(){
		$(this).removeClass('hover');
	});

});