var navId;
var navTplStr="<li class='{{hidden}}'><a href='index.html?navId={{id}}'>{{name}}</a></li>";
var searchStr=location.search;
var searchStrArr=[];
var searchStrObj={};
if(!searchStr){
	navId=0;
}else{
	searchStrArr=searchStr.substr(1).split("&")
	searchStrArr.map(function(current){
		searchStrObj[current.split("=")[0]]=current.split("=")[1];
	})
	navId=searchStrObj.navId;
}
// console.log("navId:"+navId);
// 加载导航
appendTpl(data,"nav-body",navTplStr);
document.querySelectorAll("#nav-body li a")[navId].setAttribute("class","active");

// 移动端汉堡菜单
var menu=document.getElementsByClassName("menu")[0];
var navBody=document.getElementById("nav-body");
var navBodyStyle=navBody.currentStyle||getComputedStyle(navBody)
menu.onclick=function(){

	if(navBodyStyle.display==='none'||navBody.style.display==='none'){
		navBody.style.display='block'
	}else{
		navBody.style.display='none'
	}
}
