	var level1Tpl="<div class='input-control'><input type='radio' value={{id}} name='level1' id='level1-option{{id}}'><label for='level1-option{{id}}' data-id={{id}} contenteditable='true'>{{name}}</label></div>";
	var level2Tpl="<div class='input-control'><input type='radio' value={{id}} name='level2' id='level2-option{{id}}'><label for='level2-option{{id}}' data-id={{id}} contenteditable='true'>{{name}}</label></div>";
	var level3Tpl="<div class='input-control'><input type='radio' value={{id}} name='level3' id='level3-option{{id}}'><label for='level3-option{{id}}' data-id={{id}} contenteditable='true'>{{name}}</label></div>";
	var itemTpl="<div class='item'><div class='img'><img src='{{img}}'></div><div class='btns' data-id={{id}}><div class='edit'>编辑</div><div class='delete'>删除</div></div></div>";
	var idArray=[0,0,0];
	var hasLevel1=data.length!==0;

	var hasLevel2=hasLevel1&&(data[idArray[0]].children.length!==0);
	var level2Data=hasLevel2&&data[idArray[0]].children;

	var hasLevel3=hasLevel2&&(level2Data[idArray[1]].children.length!==0)&&(level2Data[idArray[1]].children[idArray[2]].class==="third");
	var level3Data=hasLevel3&&level2Data[idArray[1]].children;

	// var hasItem=hasLevel2&&((hasLevel3&&level3Data[idArray[2].children.length!==0])||(hasLevel3||level2Data[idArray[1]].length!==0));
	var itemData=hasLevel2&&(hasLevel3?level3Data[idArray[2]].children:level2Data[idArray[1]].children);
	var hasItem=itemData.length!==0;
	
	var deleteBtns,editBtns,items;
	var popOut=document.querySelector(".detail-cover-bg");
	var closeBtn=document.querySelector(".detail-cover-bg .icon-close");
	var fileBtn=document.querySelector(".detail-cover .img-file input");
	var fileBtnFocusCount=0;
	var fileImg=document.querySelector("#detail-cover-body .img-file img");
	var lists=document.getElementsByClassName("list");
	var itemsBox=document.getElementById("items");

	// 绑定click增加一级分类
	BindClickAddCategory("add-btn1");
	// // 绑定click增加二级分类
	// BindClickAddCategory("add-btn2");
	// // 绑定click增加三级分类
	// BindClickAddCategory("add-btn3");

	if(hasLevel1){
		loadContent();
	}
	function loadContent(){
		// console.log(1);
		hasLevel1=data.length!==0;

		hasLevel2=hasLevel1&&(data[idArray[0]].children.length!==0);
		level2Data=hasLevel1&&data[idArray[0]].children;
		console.log(level2Data);

		hasLevel3=hasLevel2&&(level2Data[idArray[1]].children.length!==0)&&(level2Data[idArray[1]].children[idArray[2]].class==="third");
		level3Data=hasLevel2&&level2Data[idArray[1]].children;

		// var hasItem=hasLevel2&&((hasLevel3&&level3Data[idArray[2].children.length!==0])||(hasLevel3||level2Data[idArray[1]].length!==0));
		itemData=hasLevel2&&(hasLevel3?level3Data[idArray[2]].children:level2Data[idArray[1]].children);
		hasItem=itemData.length!==0;

		// 加载一级分类
		appendTpl(data,"level1-radios",level1Tpl);
		document.querySelectorAll("#level1-radios input")[idArray[0]].setAttribute("checked","checked");
		// 绑定onchange更新列表
		updateList("level1-radios",idArray,0);
		

		// 加载二级分类
		if(hasLevel2){

			appendTpl(level2Data,"level2-radios",level2Tpl);
			document.querySelectorAll("#level2-radios input")[idArray[1]].setAttribute("checked","checked");
			updateList("level2-radios",idArray,1);

			items=document.querySelectorAll("#items .item");
			//绑定click新增产品
			document.querySelector("#detail-cover-body .confirm-btn").onclick=function(){
				console.log(items);
				var txts=document.querySelectorAll(".input-group");
				var id=items.length;
				var img=fileImg.src.split("/hopeshardware.github.io/")[1];
				var title=document.getElementById("title").innerText;
				var txt=[];
				var tplStr="<div class='img'><img src='"+img+"'></div><div class='btns'data-id="+id+"><div class='edit'>编辑</div><div class='delete'>删除</div></div>";
				txts=Array.prototype.slice.call(txts);
				txts.map(function(current){
					values=current.querySelectorAll(".title-input");
					txt.push({
						"key":values[0].innerText,
						"value":values[1].innerText
					});
				});
				var obj={
					"class":"last",
					"id":id,
					"img":img,
					"title":title,
					"detail":[{
						"img":img,
						"txt":txt
					}]
				};
				popOut.style.display="none";
				// console.log(data);
				addItem(itemsBox,tplStr,obj,itemData,"item");
			}

			// 绑定click显示产品新增弹窗
			document.getElementById("add-item").onclick=function(){
				popOut.style.display="block";
			}

			// 绑定click显示编辑产品弹窗
			// editBtns=Array.prototype.slice.call(editBtns);
			// editBtns.map(function(current){
			// 	current.onclick=function(){
			// 		popOut.style.display="block";
			// 	}
			// })

			// 绑定click关闭弹窗
			closeBtn.onclick=function(){
				popOut.style.display="none";
			}
		}else{
			document.getElementById("level2-radios").innerHTML="";
		}
		
		// 加载三级分类
		if(hasLevel3){
			appendTpl(level3Data,"level3-radios",level3Tpl);
			document.querySelectorAll("#level3-radios input")[idArray[2]].setAttribute("checked","checked");
			updateList("level3-radios",idArray,2);

		}else{
			document.getElementById("level3-radios").innerHTML="";
		}

		// 加载产品列表
		if(hasItem){
			appendTpl(itemData,"items",itemTpl);
			// console.log(items.length);
			deleteBtns=document.querySelectorAll("#items .delete");
			editBtns=document.querySelectorAll("#items .edit");

			// 绑定click删除产品
			deleteBtns=Array.prototype.slice(deleteBtns);
			deleteBtns.map(function(current){
				current.onclick=function(){
					// 待完成
				}
			})

			
		}else{
			document.getElementById("items").innerHTML="";
		}

		// 绑定onblur编辑分类名
		var labels=document.getElementsByTagName("label");
		labels=Array.prototype.slice.call(labels);
		labels.map(function(current){
			current.onblur=function(){
				editCategoryName(this);
			}
		})
	}

	// 绑定radio onchange 更新级联列表
	function updateList(domId,idArray,i){
		var level=document.getElementById(domId);
		var inputs=level.querySelectorAll("input");
		inputs=Array.prototype.slice.call(inputs);
		inputs.map(function(current){
			current.onchange=function(){
				var id=level.querySelector("input:checked").getAttribute("value");
				console.log(idArray[i]+":"+id);
				if(!(idArray[i]==id)){
					idArray[i]=id;
					loadContent();
				}
				console.log(idArray[i])
			}
		})
	}

	// 弹窗内功能
	//预览fileupload的图片
	fileBtn.onchange=function(e){
		var path=e.target.value;
		var imgName=path.split("\\fakepath\\")[1];
		path="img/"+imgName;
		fileImg.setAttribute("src",path);
	}
	// 绑定click新增一组详情描述
	document.querySelector("#detail-cover-body .add-btn").onclick=function(){
		var detailTplStr="<div class='title-input' contenteditable='true'>属性</div><div class='title-input' contenteditable='true'>值</div>";
		var inputsBox=document.querySelector("#detail-cover-body .inputs-box");
		var div=document.createElement("div");
		div.setAttribute("class","input-group");
		div.innerHTML=detailTplStr;
		inputsBox.appendChild(div);
	}

	// 绑定click新增分类
	function BindClickAddCategory(btnClassName){
		var btns=document.querySelectorAll("."+btnClassName+"");
		btns=Array.prototype.slice.call(btns);
		btns.map(function(btn){
			btn.onclick=function(){
				var levelId=btn.getAttribute("data-id");
				// console.log(levelId);
				var currentList=lists[levelId];
				// console.log(currentList);
				var id=currentList.querySelectorAll(".input-control").length;
				var obj,tplStr,currentData;
				if(levelId==0){
					currentData=data;
					obj={
						"class":"primary",
						"id":id,
						"name":"category-name",
						"children":[]
					};
					tplStr="<input type='radio' value="+id+" name='level1' id='level1-option"+id+"'><label for='level1-option"+id+"' data-id="+id+" contenteditable='true'>category-name</label>";
				}else if(levelId==1){
					currentData=level2Data;
					console.log(currentData);
					obj={
						"class":"secondary",
						"id":id,
						"name":"category-name",
						"img":"img/item-s.jpg",
						"children":[]
					};
					tplStr="<input type='radio' value="+id+" name='level2' id='level1-option"+id+"'><label for='level1-option"+id+"' data-id="+id+" contenteditable='true'>category-name</label>";
				}else if(levelId==2){
					currentData=level3Data;
					obj={
						"class":"third",
						"id":id,
						"name":"category-name",
						"children":[]
					};
					tplStr="<input type='radio' value="+id+" name='level3' id='level1-option"+id+"'><label for='level1-option"+id+"' data-id="+id+" contenteditable='true'>category-name</label>";
				}else if(levelId==3){
					currentData=itemData;
					obj={
						"class":"third",
						"id":id,
						"name":"category-name",
						"children":[]
					};
					tplStr="<input type='radio' value="+id+" name='level3' id='level1-option"+id+"'><label for='level1-option"+id+"' data-id="+id+" contenteditable='true'>category-name</label>";
				};
				addItem(currentList,tplStr,obj,currentData,"input-control");
			}
			
		})
		
	}

	//新增产品、分类
	function addItem(currentList,tplStr,obj,currentData,className){
		var div=document.createElement("div");
		// div.setAttribute("draggable","true");
		div.setAttribute("class",className);
		div.innerHTML=tplStr;

		currentList.appendChild(div);
		currentList.lastChild.lastChild.onblur=function(){
			editCategoryName(this);
		}

		// 保存到数据
		currentData.push(obj);
		// console.log(data);
		loadContent();
	}

	// 编辑分类名
	function editCategoryName(target){
		var name=target.innerText;
		var id=target.getAttribute("data-id");
		var level=target.parentNode.parentNode.getAttribute("data-level");
		switch(level){
			case "0":data[id].name=name;
			break;
			case "1":data[idArray[0]].children[id].name=name;
			break;
			case "2":data[idArray[0]].children[idArray[1]].children[id].name=name;
		}
		// console.log(data);
	}

	// 绑定click提交数据
	document.getElementsByClassName("submit-btn")[0].onclick=function(){
		document.body.innerHTML=JSON.stringify(data);
	}

	// 绑定ondrag排序
	function orderItem(){
		var items;
		items=Array.prototype.slice.call(items);
		items.map(function(item){
			item.ondragstart=function(){
				var id=item.getAttribute("data-id");
				e.dataTransfer.setData("id",id);
			}
			item.ondragover=function(e){
				e.preventDefault();
			}
			item.ondrop=function(e){
				e.preventDefault();
				var id=e.dataTransfer.getData("id")
			}
		})
	}