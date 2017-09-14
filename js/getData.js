
// 追加html列表
function appendTpl(data,id,tplStr,loadChild){
	var htmlList=[];
	var htmlBox=document.getElementById(id);
	// (loadChild===undefined)&&(loadChild=false);
	htmlList=repeatTpl(data,tplStr);
	htmlBox.innerHTML=htmlList.join("");
}

// 替换数据
function replaceTpl(data,tplStr,index){
var reg=/{{[\w]*}}/g;
var keys=tplStr.match(reg);
keys=keys.join("").slice(2,-2).split("}}{{");
for(var i=0;i<keys.length;i++){
	var keyStr="{{"+keys[i]+"}}";
	tplStr=tplStr.replace(keyStr,data[index][keys[i]]);
}
return tplStr;
}

// 循环tpl
function repeatTpl(data,tplStr){
	var htmlList=[];
	for(var i=0;i<data.length;i++){
		htmlList.push(replaceTpl(data,tplStr,i));
	}
	return htmlList;
}

