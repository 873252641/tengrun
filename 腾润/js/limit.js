$("body").click(function(e){
	if(e.target==document.getElementsByClassName("menustart")[0].children[0]){
		if ($(".nav>.container").children().eq(0).css("display") != "none") {
			$.fn.dianji($(".twomenupc"),0);
			$(".menustart>a").css("color","black");
			console.log(e.target==document.getElementsByClassName("menustart")[0].children[0])
		}else{
			$.fn.dianji($(".twomenumd"),0)
		}
	}else{	
		$(".twomenupc").hide(0);
		$(".menustart>a").css("color","white");
	}
})
$(".icon-iconfontmofangdaohang").click(function(){
	if ($(".mdtwomenubutton").css("display") == "none") {
		$(".mdtwomenubutton").slideDown(200);
	} else {
		$(".mdtwomenubutton").slideUp(200);
	}
})
$(".icon-fenxiang").click(function(){
	$.fn.dianji($(".share"),0)
})
/* jqury封装方法 */
$.fn.dianji=function(thisdom,s){
	if (thisdom.css("display") == "none") {
		thisdom.show(s);
	} else {
		thisdom.hide(s);
	}
}
