


$(function() {
	fofa_base.init();
	
});
var fofa_base = {
        
		name :"fofapc工具类",
		init:function(){
			
			fofa_base.scrollsize();
			},	

		scrollsize:function(){//滚动条适应
			$(".pc_main").css({height:$(document).height()-200});
			$(window).resize(function () {
			$(".pc_main").css({height:$(document).height()-200});
			});
			
			},
	
		index_gd:function(){
				$('#gd0').liMarquee({
				direction: 'up',
				scrollamount:20
				});
				$('#gd1').liMarquee({
				direction: 'up',
				scrollamount:20
				});
				$('#gd2').liMarquee({
				direction: 'up',
				scrollamount:20
				});
				
				/*$('#gd3').liMarquee({
				direction: 'left',
				scrollamount:200
				});*/
			
			
			}
			
			
			
			
			
			
			
			
			
			
			
};

//编辑器折叠


	
$(".q2").on("click",".bjq_title_txt i", function() {
	
   if($(this).hasClass("fa-minus-square-o")){
		$(this).removeClass("fa-minus-square-o").addClass("fa-plus-square");
		$(this).parent().parent().next().hide();
		
	}else{
		$(this).removeClass("fa-plus-square").addClass("fa-minus-square-o");
		$(this).parent().parent().next().show();
		  
	}
 });
 
 
 
	

