/*slider slick*/
$(function() {
	$(".slider").slick({
		arrows:false,
		dots:true,
        autoplay: true,
	})
})

/*mobileSlider slick*/
$(function() {
	$(".mobileSlider").slick({
		arrows:false,
		dots:false,
        autoplay: true,
	})
})

/*newPdt slick*/
$(function() {
	$(".newPdt").slick({
		arrows:false,
		dots:true,
	})
})

/*pannel*/
$(document).ready(function(){

	//right 메뉴 펼쳤다가 끄기	
	$(".rightMenuBg").hide();
	$(".panel").click(function(){
		$(".rightmenu").animate({
			"width":"200px"
		},500)
		$(".rightMenuBg").fadeIn()
	})
	$(".closeBtn,.rightMenuBg").click(function(){
		$(".rightmenu").animate({
			"width":"0"
		},500)
		$(".rightMenuBg").fadeOut()
	})
})

