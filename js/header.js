// JavaScript Document

var UserInfo = GetUserInfo();
var fcoin = UserInfo.fcoin; 
var avatar = UserInfo.avatar;
var message = UserInfo.message; 
var aemail = UserInfo.email;
var username = UserInfo.username;
if(username.length > 0){
	var showName = username;
}else{
	var showName = aemail;
}
// console.log(GetUserInfo());
 if(UserInfo.fofa_server){
	document.write('<div class="pc_top"><div class="row" style="margin-right:0px;"><div class="col-xs-3"><img class="pc_tx" src="'+avatar+'" alt=""/><div class="pc_txr"><img src="../images/vip.png" alt="" />&nbsp;&nbsp;<span class="pc_user">'+showName+'</span><br><span class="pc_xx"><i class="fa fa-bell" aria-hidden="true"></i><span style="text-decoration:none; color:#0689ff"><a ><span id="my_message">'+message+'</span></a></span><i style="margin-left:10px" class="fa fa-foursquare" aria-hidden="true"></i><span id="my_fcoin" style="text-decoration:none; color:#666">'+fcoin+'</span></span></div></div>    <div class="col-xs-9 pc_menu"> <ul>  <li class="li3"><a  href="javascript:void(0)" onClick="to_routePage(\'poc.html\')" ><i  aria-hidden="true"></i><div>我的</div></a></li>    <li class="li1"><a  href="javascript:void(0)" onclick="to_routePage(\'mall.html\')" ><i aria-hidden="true"></i><div>商城</div></a></li><li class="li2"><a href="javascript:void(0)" onclick="to_routePage(\'submit-poc.html\')" ><i  aria-hidden="true"></i><div>新增</div></a></li><li class="li5"><a href="javascript:void(0)" onclick="to_routePage(\'report.html\')" ><i  aria-hidden="true"></i><div>报表</div></a></li><li class="li4" style="position:relative"><img id="update_img" title="发现新版本" style="display:none;position:absolute; height: 18px; width:22px; top: 14px; right: -28px; " src="../images/sj.gif"/><a href="javascript:void(0)" onclick="to_routePage(\'help.html\')" ><i  aria-hidden="true"></i><div>帮助</div></a></li>                              </ul>        </div></div></div>');
	
 }else{
	document.write('<div class="pc_top"><div class="row" style="margin-right:0px;"><div class="col-xs-3"><img class="pc_tx" src="'+avatar+'" alt=""/><div class="pc_txr"><img src="../images/vip.png" alt="" />&nbsp;&nbsp;<span class="pc_user">'+showName+'</span><br><span class="pc_xx"><i class="fa fa-bell" aria-hidden="true"></i><span style="text-decoration:none; color:#0689ff"><span id="my_message">'+message+'</span></span><i style="margin-left:10px" class="fa fa-foursquare" aria-hidden="true"></i><span id="my_fcoin" style="text-decoration:none; color:#666">'+fcoin+'</span></span></div></div>    <div class="col-xs-9 pc_menu"> <ul>  <li class="li3"><a  href="javascript:void(0)" onClick="to_routePage(\'poc.html\')" ><i  aria-hidden="true"></i><div>我的</div></a></li>    <li class="li2"><a href="javascript:void(0)" onclick="to_routePage(\'submit-poc.html\')" ><i  aria-hidden="true"></i><div>新增</div></a></li><li class="li5"><a href="javascript:void(0)" onclick="to_routePage(\'report.html\')" ><i  aria-hidden="true"></i><div>报表</div></a></li><li class="li4" style="position:relative"><img id="update_img" title="发现新版本" style="display:none;position:absolute; height: 18px; width:22px; top: 14px; right: -28px; " src="../images/sj.gif"/><a href="javascript:void(0)" onclick="to_routePage(\'help.html\')" ><i  aria-hidden="true"></i><div>帮助</div></a></li>                              </ul>        </div></div></div>');
 
 }
// <li class="li4"><a href="#" ><i  > </i><div>排行</div></a></li>
$(function(){ 
	if(UserInfo.fofa_server){
		$("#my_message,#my_fcoin").click(function(){
			//$("#content").load('gg.html');
			to_routePage('gg.html');
			$(".pc_menu a").removeClass("act");
		});
	}

	$(document).on("mouseenter",".pc_menu a",function(){
	  var thisobj=$(this);
	  thisobj.find("i").addClass("animated swing");
	  setTimeout(function () { 
	     thisobj.find("i").removeClass("animated swing")
	    }, 800);
	  
	});	
//	var the_cookie;
//	var strUrl=window.location.href;
//	var arrUrl=strUrl.split("/");
//	var strPage=arrUrl[arrUrl.length-1];
//	console.log(strPage);

			
	//console.log(strPage);
	
});
	
	
