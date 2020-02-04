	var level1Tpl="<div class='input-control' draggable='true'><input type='radio' value={{id}} name='level1' id='level1-option{{id}}'><label for='level1-option{{id}}' class='radio-label'>{{name}}</label><br><input type='checkbox' value='{{id}}' id='level1-hidden{{id}}' data-hidden='{{hidden}}'><label for='level1-hidden{{id}}'>隐藏</label><span class='delete-level'>删除</span></div>";
	var level2Tpl="<div class='input-control' draggable='true'><input type='file' id='upload{{id}}' class='upload'><label for='upload{{id}}'><img src='{{img}}'></label><br><input type='radio' value={{id}} name='level2' id='level2-option{{id}}'><label for='level2-option{{id}}' class='radio-label'>{{name}}</label><br><input type='checkbox' value='{{id}}' id='level2-hidden{{id}}' data-hidden='{{hidden}}'><label for='level2-hidden{{id}}'>隐藏</label><span class='delete-level'>删除</span></div>";
	var level3Tpl="<div class='input-control' draggable='true'><input type='radio' value={{id}} name='level3' id='level3-option{{id}}'><label for='level3-option{{id}}' class='radio-label'>{{name}}</label><br><input type='checkbox' value='{{id}}' id='level3-hidden{{id}}' data-hidden='{{hidden}}'><label for='level3-hidden{{id}}'>隐藏</label><span class='delete-level'>删除</span></div>";
	var itemTpl="<div class='item' draggable='true'><div class='img'><img src='{{img}}'></div><div class='btns'><div class='edit'>编辑</div><div class='delete'>删除</div></div></div>";
	var detailTplStr="<div class='input-group'><div class='title-input' contenteditable='true'>{{key}}</div><div class='title-input' contenteditable='true'>{{value}}</div></div>";
	var idArray=[0,0,0];
	var currItemIndex=0;
	var hasLevel1=data.length>0;

	var hasLevel2=hasLevel1&&(data[idArray[0]].children.length>0);
	var level2Data=hasLevel2&&data[idArray[0]].children;

	var hasLevel3=hasLevel2&&(level2Data[idArray[1]].children.length>0)&&(level2Data[idArray[1]].children[idArray[2]].class==="third");
	var level3Data=hasLevel2&&level2Data[idArray[1]].children;

	// var hasItem=hasLevel2&&((hasLevel3&&level3Data[idArray[2].children.length>0])||(hasLevel3||level2Data[idArray[1]].length>0));
	var itemData=hasLevel2&&(hasLevel3?level3Data[idArray[2]].children:level2Data[idArray[1]].children);
	var hasItem=itemData.length>0;
	
	var popOut=document.querySelector(".detail-cover-bg");
	var closeBtn=document.querySelector(".detail-cover-bg .icon-close");
	var fileBtn=document.querySelector(".detail-cover .img-file input");
	var fileBtnFocusCount=0;
	var fileImg=document.querySelector("#detail-cover-body .img-file img");
	var lists=document.getElementsByClassName("list");
	var itemsBox=document.getElementById("items");

	// 绑定click增加一级分类
	BindClickAddCategory();

	if(hasLevel1){
		loadContent();
	}
	function loadLevel1(){
		appendTpl(data,"level1-radios",level1Tpl);
		document.querySelectorAll("#level1-radios input[type='radio']")[idArray[0]].setAttribute("checked","checked");
		// 绑定onchange更新列表
		updateList("level1-radios",idArray,0);

		// 绑定ondrag排序
		orderItem("#level1-radios .input-control",data);

		// 绑定点击删除
		document.querySelectorAll('#level1-radios .delete-level').forEach(function(btn,index){
			btn.onclick=function(){
				data.splice(index,1)
				loadLevel1()
			}
		})
	}

	function loadLevel2(){
		appendTpl(level2Data,"level2-radios",level2Tpl);
		document.querySelectorAll("#level2-radios input[type='radio']")[idArray[1]].setAttribute("checked","checked");
		updateList("level2-radios",idArray,1);
		
		//绑定click确认新增产品
		document.querySelector("#detail-cover-body .confirm-btn").onclick=function(e){
			var items=document.querySelectorAll("#items .item");
			var txts=document.querySelectorAll(".input-group");
			// console.log(id);
			// var img=fileImg.src.split("/hopeshardware.github.io/")[1];
			var img=fileImg.src
			var title=document.getElementById("title").innerText;
			var txt=[];
			var tplStr="<div class='img'><img src='"+img+"'></div><div class='btns'><div class='edit'>编辑</div><div class='delete'>删除</div></div>";
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
				"img":img,
				"title":title,
				"detail":[{
					"img":img,
					"txt":txt
				}]
			};
			popOut.style.display="none";
			// console.log(data);
			itemData.splice(currItemIndex,1,obj)
			loadItem()
		}

		// 绑定click显示产品新增弹窗
		document.getElementById("add-item").onclick=addNewItem

		// 绑定click关闭弹窗
		closeBtn.onclick=function(){
			popOut.style.display="none";
		}

		// 绑定ondrag排序
		orderItem("#level2-radios .input-control",level2Data);

		// 绑定点击删除
		document.querySelectorAll('#level2-radios .delete-level').forEach(function(btn,index){
			btn.onclick=function(){
				level2Data.splice(index,1)
				idArray=[0,0,0]
				loadContent()
			}
		})
	}

	function loadLevel3(){
		appendTpl(level3Data,"level3-radios",level3Tpl);
		document.querySelectorAll("#level3-radios input[type='radio']")[idArray[2]].setAttribute("checked","checked");
		updateList("level3-radios",idArray,2);

		// 绑定点击删除
		document.querySelectorAll('#level1-radios .delete-level').forEach(function(btn,index){
			btn.onclick=function(){
				level3Data.splice(index,1)
				loadLevel3()
			}
		})

		// 绑定ondrag排序
		orderItem("#level3-radios .input-control",level3Data);
	}

	function loadItem(){
		appendTpl(itemData,"items",itemTpl);
		console.log('加载产品列表',items.length);
		var deleteBtns=document.querySelectorAll("#items .delete");
		var editBtns=document.querySelectorAll("#items .edit");

		// 绑定ondrag排序
		orderItem("#items .item",itemData);

		// 绑定click删除产品
		deleteBtns=Array.prototype.slice.call(deleteBtns);
		deleteBtns.forEach(function(current,i){
			current.onclick=function(){
				itemData.splice(i,1)
				loadContent()
			}
		})

		// 编辑产品
		editBtns=Array.prototype.slice.call(editBtns);
		editBtns.forEach(function(current,i){
			current.onclick=function(){
				currItemIndex=i
				editItem(itemData[i])
				loadContent()
			}
		})
	}

	function loadContent(){
		// console.log(1);
		hasLevel1=data.length>0;

		hasLevel2=hasLevel1&&(data[idArray[0]].children.length>0);
		level2Data=hasLevel1&&data[idArray[0]].children;
		// console.log(level2Data);

		hasLevel3=hasLevel2&&(level2Data[idArray[1]].children.length>0)&&(level2Data[idArray[1]].children[idArray[2]].class==="third");
		level3Data=hasLevel2&&level2Data[idArray[1]].children;

		// var hasItem=hasLevel2&&((hasLevel3&&level3Data[idArray[2].children.length>0])||(hasLevel3||level2Data[idArray[1]].length>0));
		itemData=hasLevel2&&(hasLevel3?level3Data[idArray[2]].children:level2Data[idArray[1]].children);
		hasItem=itemData.length>0;

		// 加载一级分类
		loadLevel1();
		

		// 加载二级分类
		if(hasLevel2){
			loadLevel2();
		}else{
			document.getElementById("level2-radios").innerHTML="";
		}
		
		// 加载三级分类
		if(hasLevel3){
			loadLevel3();
		}else{
			document.getElementById("level3-radios").innerHTML="";
		}

		// 加载产品列表
		if(hasItem){
			loadItem();
		}else{
			document.getElementById("items").innerHTML="";
		}

		// 绑定双击可编辑，绑定onblur编辑分类名
		var labels=document.getElementsByClassName("radio-label");
		labels=Array.prototype.slice.call(labels);
		labels.map(function(current){
			current.addEventListener("dblclick",function(){
				// console.log("双击事件");
				this.setAttribute("contenteditable","true");
				this.focus();
			})
			current.onblur=function(){
				editCategoryName(this);
				// console.log(this.innerText);
			}
		})
	}

	function editItem(data){
		console.log('产品详情数据 ',data)
		popOut.querySelector("img").src=data.img
		popOut.querySelector("#title").innerText=data.title
		popOut.querySelector(".inputs-box").innerHTML=repeatTpl(data.detail[0].txt,detailTplStr).join("")
		popOut.style.display="block";
	}
	function addNewItem(){
		currItemIndex=itemData.length
		popOut.style.display="block";
	}

	// 绑定input
	function updateList(domId,idArray,i){
		var level=document.getElementById(domId);
		var inputs=level.querySelectorAll("input");
		inputs=Array.prototype.slice.call(inputs);
		inputs.map(function(current){
			// 绑定radio onchange更新级联列表
			if(current.type==="radio"){
				current.onchange=function(){
					var id=Array.prototype.indexOf.call(level.querySelectorAll("input[type='radio']"),level.querySelector("input[type='radio']:checked"));
					// console.log(idArray[i]+":"+id);
					if(!(idArray[i]==id)){
						idArray[i]=id;
						loadContent();
					}
					// console.log(idArray[i])
				}
			}

			// 绑定checkbox onchange更新显示状态
			if(current.type==="checkbox"){
				if(current.getAttribute("data-hidden")=='hidden'){
					current.setAttribute("checked",true)
				}
				var currentData
				switch(i){
					case 0:currentData=data;
					break;
					case 1:currentData=level2Data;
					break;
					case 2:currentData=level3Data;
				}
				current.onchange=function(e){
					var id=Array.prototype.indexOf.call(this.parentNode.parentNode.querySelectorAll("input[type='checkbox']"),this)
					currentData[id].hidden=e.target.checked?'hidden':''
					console.log(id,currentData)
				}
			}
			
			// 绑定file onchange预览图片
			if(current.type==="file"){
				current.onchange=function(e){
					var id=Array.prototype.indexOf.call(current.parentNode.parentNode.querySelectorAll(".upload"),current);
					// console.log(id);
					var path=e.target.value;

					var imgName=path.split("\\fakepath\\")[1];
					path="img/cover/"+imgName;
					level2Data[id].img=path;
					// console.log(this.nextElementSibling);
					this.nextElementSibling.querySelector("img").src=path;
				}
			}
		})
	}

	// 弹窗内功能
	//预览fileupload的图片
	fileBtn.onchange=function(e){
		var path=e.target.value;
		// console.log(path);
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
	function BindClickAddCategory(){
		var btns=document.querySelectorAll(".add-btn1");
		btns=Array.prototype.slice.call(btns);
		btns.map(function(btn){
			btn.onclick=function(){
				var levelId=btns.indexOf(this);
				console.log(levelId);
				var currentList=lists[levelId];
				// console.log(currentList);
				var id=currentList.querySelectorAll(".input-control").length;
				var obj,tplStr,currentData;
				if(levelId==0){
					currentData=data;
					obj={
						"class":"primary",
						"id":id,
						"name":"name",
						"children":[]
					};
					// tplStr="<input type='radio' value="+id+" name='level1' id='level1-option"+id+"'><label for='level1-option"+id+"' contenteditable='true'>name</label>";
				}else if(levelId==1){
					currentData=level2Data;
					// console.log(currentData);
					obj={
						"class":"secondary",
						"id":id,
						"name":"name",
						"img":"img/default.jpg",
						"children":[]
					};
					// tplStr="<input type='radio' value="+id+" name='level2' id='level1-option"+id+"'><label for='level1-option"+id+"' contenteditable='true'>name</label>";
				}else if(levelId==2){
					currentData=level3Data;
					obj={
						"class":"third",
						"id":id,
						"name":"name",
						"children":[]
					};
					// tplStr="<input type='radio' value="+id+" name='level3' id='level1-option"+id+"'><label for='level1-option"+id+"' contenteditable='true'>name</label>";
				}
				addItem(obj,currentData);
			}
			
		})
		
	}

	//新增产品、分类
	function addItem(obj,currentData){
		currentData.push(obj)
		loadContent();
	}

	// 编辑分类名
	function editCategoryName(target){
		var name=target.innerText;
		var parent=target.parentNode.parentNode
		var id=Array.prototype.indexOf.call(parent.querySelectorAll(".radio-label"),(target));
		var level=parent.getAttribute("data-level");
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
		document.body.innerHTML='var data='+JSON.stringify(data);
	}

	// 绑定ondrag排序
	// orderItem(items,itemData);
	function orderItem(selector,data){
		// console.log(selector);
		var items=document.querySelectorAll(selector);
		items=Array.prototype.slice.call(items);
		items.map(function(item){
			item.ondragstart=function(e){
				// console.log(e.target);
				var id=items.indexOf(this)-0;
				// console.log(id);
				e.dataTransfer.setData("id",id);
			}
			item.ondragover=function(e){
				e.preventDefault();
			}
			item.ondrop=function(e){
				e.preventDefault();
				var min,max,j;
				var dropId=items.indexOf(this)-0;
				console.log(dropId);
				var dragId=e.dataTransfer.getData("id")-0;
				// console.log(dragId);
				data[dragId].id=dropId;
				var dragItem=data.splice(dragId,1);
				// console.log(dragItem);
				data.splice(dropId,0,dragItem[0]);
				// console.log(data);
				if(dragId>dropId){
					max=dragId;
					min=dropId+1;
					j=1;
				}else{
					max=dropId-1;
					min=dragId;
					j=-1;
				}
				// console.log(min);
				// console.log(max);
				for(var i=min;i<=max;i++){
					data[i].id+=j;
					// console.log(data[i].id);
				}
				// console.log(data);
				loadContent();
			}
		})
	}