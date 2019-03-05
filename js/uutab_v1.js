
/*!
 * uutab_v1.js
 * 万能标签切换插件,涵盖自定义样式，自定义进入动画，相当灵活易用。引入animate动画库,可扩展animate库。
 * $为引用公用函数，$(this)是用户引用自定义函数
 * @version     uutab_v1.js, built on 2016.11
 * @copyright   (c) 2016 - ? uucao
 * @license     uucao
 */
(function($){
	
            $.fn.uutab=function(options){//为jquery的prototype添加uutab函数  jQuery.fn.extend是为jquery添加多个函数
			
			
				var $mycontainer = $(this);//元素容器
                var defaults={
                    u_title:'',//导航dom组
                    u_content:'',//内容dom组
					u_act:'',//切换样式
					u_event:'click',//事件  
					u_entrances:''//内容进入特效  

                };
				/*---------------------核心代码---------------------*/
                var myobject = $.extend(defaults,options);//参数对象，扩展全局参数对象
				//console.log($mycontainer;//jquery容器对象
				//console.log($mycontainer[0]);//dom容器对象

				$(document).on(myobject.u_event,myobject.u_title, function(){
				//console.log($(this)); //当前对像
				if(myobject.u_entrances){
					$(this).addClass(myobject.u_act).siblings().removeClass();
					$(myobject.u_content).eq($(myobject.u_title).index(this)).show().addClass(myobject.u_entrances).siblings().removeClass(myobject.u_entrances).hide();
					
					}
					else{
				$(this).addClass(myobject.u_act).siblings().removeClass();
				$(myobject.u_content).eq($(myobject.u_title).index(this)).show().siblings().hide();
					
					}
				
				
				
				
				
				
				});
				
				/*-------------------核心代码结束---------------------*/

               
            };
			
})(jQuery);

