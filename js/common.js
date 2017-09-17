var navId;
var navTplStr="<li><a href='index.html?navId={{id}}'>{{name}}</a></li>";
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
console.log("navId:"+navId);
// 加载导航
appendTpl(data,"nav-body",navTplStr);
document.querySelectorAll("#nav-body li a")[navId].setAttribute("class","active");

