<template>
  <div class="manage-container">
    <!-- 标题 S -->
    <h1>产品管理</h1>
    <!-- 标题 E -->

    <!-- 一级分类 S -->
    <div class="module1">
      <div class="title">
        <h2>一级分类(可拖拽排序)</h2>
        <div class="add-btn add-btn1" data-id="0" @click="addItem(data,cate1Obj)">添加分类</div>
      </div>
      <div class="radios list" id="cate1-radios" data-level="0">
        <div
          class="input-control"
          ref="cate1-input-control"
          draggable="true"
          v-for="(ele,index) in data"
          :key="index"
        >
          <input
            type="radio"
            :value="index"
            v-model="selectedCates[0]"
            name="cate1"
            :id="`cate1-option${ele.id}`"
            @change="selectedCates=[index,0,0]"
          />
          <label
            :for="`cate1-option${ele.id}`"
            :class="['radio-label',ele.name?'':'red']"
            @dblclick="editName($event)"
            @blur="saveName($event,ele)"
          >{{ele.name||"XXX"}}</label>
          <br />
          <input
            type="checkbox"
            :value="ele.id"
            :id="`cate1-hidden${ele.id}`"
            :data-hidden="ele.hidden"
            v-model="ele.hidden"
          />
          <label :for="`cate1-hidden${ele.id}`">隐藏</label>
          <span class="delete-level" @click="deleteItem(data,index,[0,0,0])">删除</span>
        </div>
      </div>
    </div>
    <!-- 一级分类 E -->

    <!-- 二级分类 S -->
    <div class="module1 level2">
      <div class="title">
        <h2>二级分类(可拖拽排序)</h2>
        <div class="add-btn add-btn1" data-id="1" @click="addItem(cate2Data,cate2Obj)">添加分类</div>
      </div>
      <div class="radios list" id="level2-radios" data-level="1">
        <div
          class="input-control"
          v-for="(ele,index) in cate2Data"
          :key="index"
          ref="cate2-input-control"
          draggable="true"
        >
          <input type="file" :id="`upload${ele.id}`" class="upload" @change="setImg($event,ele)" />
          <label :for="`upload${ele.id}`">
            <img :src="ele.img" />
          </label>
          <br />
          <input
            type="radio"
            :value="index"
            name="level2"
            :id="`level2-option${ele.id}`"
            v-model="selectedCates[1]"
            @change="selectedCates[2]=0"
          />
          <label
            :for="`level2-option${ele.id}`"
            :class="['radio-label',ele.name?'':'red']"
            @dblclick="editName($event)"
            @blur="saveName($event,ele)"
          >{{ele.name||"XXX"}}</label>
          <br />
          <input
            type="checkbox"
            v-model="ele.hidden"
            :id="`level2-hidden${ele.id}`"
            :data-hidden="ele.hidden"
          />
          <label :for="`level2-hidden${ele.id}`">隐藏</label>
          <span class="delete-level" @click="deleteItem(cate2Data,index,[selectedCates[0],0,0])">删除</span>
        </div>
      </div>
    </div>
    <!-- 二级分类 E -->

    <!-- 三级分类 S -->
    <div class="module1 level3">
      <div class="title">
        <h2>三级分类(可拖拽排序)</h2>
        <button
          :class="['add-btn','add-btn1',disableCate3?'disabled':'']"
          :disabled="disableCate3"
          @click="addItem(cate3Data,cate3Obj)"
        >添加分类</button>
      </div>
      <div class="radios list" id="level3-radios" data-level="2">
        <div
          class="input-control"
          ref="cate3-input-control"
          draggable="true"
          v-for="(ele,index) in cate3Data"
          :key="index"
        >
          <input
            type="radio"
            :value="index"
            name="level3"
            :id="`level3-option${ele.id}`"
            v-model="selectedCates[2]"
          />
          <label
            :for="`level3-option${ele.id}`"
            :class="['radio-label',ele.name?'':'red']"
            @dblclick="editName($event)"
            @blur="saveName($event,ele)"
          >{{ele.name||"XXX"}}</label>
          <br />
          <input
            type="checkbox"
            v-model="ele.hidden"
            :value="ele.id"
            :id="`level3-hidden${ele.id}`"
            :data-hidden="ele.hidden"
          />
          <label :for="`level3-hidden${ele.id}`">隐藏</label>
          <span class="delete-level" @click="deleteItem(cate3Data,index,[selectedCates[0],selectedCates[1],0])">删除</span>
        </div>
      </div>
    </div>
    <!-- 三级分类 E -->

    <!-- 编辑产品 S -->
    <div class="module1">
      <div class="title">
        <h2>编辑产品(可拖动排序)</h2>
        <div class="add-btn" id="add-item" data-id="3" @click="editItem(itemObj)">添加产品</div>
      </div>
      <div class="items" id="items">
        <div
          class="item"
          draggable="true"
          ref="item-input-control"
          v-for="(id,index) in itemData"
          :key="index"
        >
          <div class="img">
            <img :src="products[id].img" />
          </div>
          <div class="btns">
            <div class="edit" @click="editItem(products[id])">编辑</div>
            <div class="delete" @click="deleteProduct(itemData,index,id)">删除</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 编辑产品 E -->

    <!-- 遮罩层 S -->
    <div class="detail-cover-bg" v-if="editDialogShow">
      <div class="detail-cover">
        <div id="detail-cover-body">
          <div class="edit-box">
            <h3>编辑图片和标题</h3>
            <h3>图片需放至：{{cateDir}}</h3>
            <div class="img-file">
              <img :src="currentItem.img||'/img/default.jpg'" />
              <label class="file-btn" for="upload-file">选择图片</label>
              <input
                type="file"
                name="file"
                id="upload-file"
                accept="image/png, image/jpeg, image/gif, image/jpg"
                @change="setImg($event,currentItem)"
              />
            </div>
            <div class="title-box">
                标题
                <input class="title-input" id="title" v-model="currentItem.title" placeholder="标题"/>
            </div>
          </div>
          <div class="edit-box">
            <h3>编辑详情</h3>
            <div class="inputs-box">
              <div class="title">
                  <span>属性</span>
                  <span>值</span>
              </div>
              <div class="input-group" v-for="(ele,index) in currentItem.detail[0].txt" :key="index">
                <input v-model="ele.key" placeholder='属性'/>
                <input v-model="ele.value" placeholder='值'/>
              </div>
            </div>
            <div class="add-btn" @click="currentItem.detail[0].txt.push({})">添加属性</div>
          </div>
          <div class="confirm-btn" @click="confirmEditItem(),editDialogShow=false">确定</div>
        </div>
        <span class="icon-close" @click="editDialogShow=false"></span>
      </div>
    </div>
    <!-- 遮罩层 E -->

    <!-- 提交按钮 S -->
    <div class="submit-btn-box">
      <span class="submit-btn" @click="resultShow=true">提交</span>
    </div>
    <!-- 提交按钮 E -->

    <!-- 结果展示 S -->
    <ul class="result-box" v-if="resultShow">
        <li class="x-button" @click="resultShow=false">X</li>
        <li>
            <div class="red">data.json</div>
            <div>{{JSON.stringify(data)}}</div>
        </li>
        <li>
            <div class="red">products.json</div>
            <div>{{JSON.stringify(products)}}</div>
        </li>
    </ul>
    <!-- 结果展示 E -->
  </div>
</template>

<script>
import $confirm from 'balm-ui/plugins/confirm';

import data from "~/assets/data/data.json";
import products from "~/assets/data/products.json";

export default {
  data() {
    return {
      data,
      products,
      cate1Obj: {
        class: "primary",
        name: "name",
        children: []
      },
      level2Obj: {
        class: "secondary",
        name: "name",
        img: "img/default.jpg",
        children: []
      },
      level3Obj: {
        class: "third",
        name: "name",
        children: []
      },
      itemObj: {
        class: "last",
        img: "",
        title: "",
        detail: [
          {
            img: "",
            txt: [{}]
          }
        ]
      },
      selectedCates: [0, 0, 0],
      disableCate3: false,
      editDialogShow: false,
      currentItem: {},
      resultShow:false
    };
  },
  created(){
    this.__proto__.constructor.use($confirm,{})
  },
  computed: {
    cate2Data() {
      return this.data[this.selectedCates[0]].children;
    },
    cate3Data() {
      let data = this.cate2Data[this.selectedCates[1]].children;
      if (!data[0] || data[0].class === "third") {
        this.disableCate3 = false;
        return data;
      } else {
        this.disableCate3 = true;
        return [];
      }
    },
    itemData() {
      if (this.cate3Data.length) {
        return this.cate3Data[this.selectedCates[2]].children;
      } else {
        return this.cate2Data[this.selectedCates[1]].children;
      }
    },
    cateDir() {
      let path=`${this.data[this.selectedCates[0]].name}/${
        this.cate2Data[this.selectedCates[1]].name
      }/${
        this.cate3Data.length
          ? this.cate3Data[this.selectedCates[2]].name + "/"
          : ""
      }`;
      return path.toLowerCase().replace(/\s/g,"-")
    }
  },
  watch: {
    data: {
      handler() {
        this.$nextTick(() => {
          this.data.length &&
            this.orderItem(this.$refs["cate1-input-control"], this.data);
        });
      }
    },
    cate2Data: {
      handler() {
        this.$nextTick(() => {
          this.cate2Data.length &&
            this.orderItem(this.$refs["cate2-input-control"], this.cate2Data);
        });
      }
    },
    cate3Data: {
      handler() {
        this.$nextTick(() => {
          this.cate3Data.length &&
            this.orderItem(this.$refs["cate3-input-control"], this.cate3Data);
        });
      }
    },
    itemData: {
      handler() {
        this.$nextTick(() => {
          this.itemData.length &&
            this.orderItem(this.$refs["item-input-control"], this.itemData);
        });
      }
    }
  },
  mounted() {
    this.data.length &&
      this.orderItem(this.$refs["cate1-input-control"], this.data);
    this.cate2Data.length &&
      this.orderItem(this.$refs["cate2-input-control"], this.cate2Data);
    this.cate3Data.length &&
      this.orderItem(this.$refs["cate3-input-control"], this.cate3Data);
    this.itemData.length &&
      this.orderItem(this.$refs["item-input-control"], this.itemData);
  },
  methods: {
    editItem(data) {
        if(data.id){
            // 编辑
            this.currentItem = JSON.parse(JSON.stringify(data));
        }else{
            // 新增
            this.currentItem=data
        }
      this.editDialogShow = true;
    },
    confirmEditItem(){
      let data = JSON.parse(JSON.stringify(this.currentItem));
      data.id || (data.id=this.itemData.length)
        let productId = this.itemData[data.id] || `${data.id}
            -${this.cateDir.replace(/[\/]/g, "-")}
            -${data.title.replace(/[\/|\s]/g, "-")}`;
        this.itemData.splice(data.id,1,productId);
        this.products[productId] = data;
    },
    setImg(e, data) {
      let fileName = e.target.value.split("\\fakepath\\")[1];
      if (data.detail) {
        let img = "/img/" + this.cateDir + fileName;
        data.img = img;
        data.detail[0].img = img;
      } else {
        data.img = "/img/cover/" + fileName;
      }
    },
    saveName(e, data) {
      data.name = e.target.innerText;
    },
    editName(e) {
      e.target.setAttribute("contenteditable", "true");
      e.target.focus();
    },
    deleteItem(data, index,selectedCates) {
      this.$confirm({
        message: "确认删除？",
        callback: res => {
          if(res){
            this.selectedCates=selectedCates
            data.splice(index, 1)
          }
        }
      });
    },
    deleteProduct(data, index,id){
      this.$confirm({
        message: "确认删除？",
        callback: res => {
          if(res){
            delete this.products[id]
            data.splice(index, 1)
          }
        }
      });
    },
    addItem(data, tplData) {
      let obj = Object.assign({ id: data.length }, tplData);
      obj=JSON.parse(JSON.stringify(obj))

      data.push(obj);
    },
    orderItem(items, data) {
      items = Array.prototype.slice.call(items);
      items.map(function(item) {
        item.ondragstart = function(e) {
          // console.log(e.target);
          var id = items.indexOf(this) - 0;
          // console.log(id);
          e.dataTransfer.setData("id", id);
        };
        item.ondragover = function(e) {
          e.preventDefault();
        };
        item.ondrop = function(e) {
          e.preventDefault();
          var min, max, j;
          var dropId = items.indexOf(this) - 0;
          console.log(dropId);
          var dragId = e.dataTransfer.getData("id") - 0;
          // console.log(dragId);
          if (typeof data[dragId] === "string") {
            products[data[dragId]].id = dropId;
          } else {
            data[dragId].id = dropId;
          }
          var dragItem = data.splice(dragId, 1);
          // console.log(dragItem);
          data.splice(dropId, 0, dragItem[0]);
          // console.log(data);
          if (dragId > dropId) {
            max = dragId;
            min = dropId + 1;
            j = 1;
          } else {
            max = dropId - 1;
            min = dragId;
            j = -1;
          }
          // console.log(min);
          // console.log(max);
          for (var i = min; i <= max; i++) {
            if (typeof data[dragId] === "string") {
              products[data[i]].id += j;
            } else {
              data[i].id += j;
            }
          }
        };
      });
    }
  }
};
</script>

<style lang="scss" scoped>
$color: #1c6aa0;
.red{
    color: red;
}
.manage-container {
  background: #fff;
}
.add-btn {
  &:before {
    content: "";
    display: inline-block;
    margin-right: 5px;
    width: 14px;
    height: 14px;
    background: url(/img/icon-add.png);
    vertical-align: middle;
  }
  font-size: 16px;
  color: #1c6aa0;
  cursor: pointer;
  border: none;
  &.disabled {
    color: #999;
  }
}

/************************** 标题 S ************************/
h1 {
  margin-bottom: 10px;
  line-height: 60px;
  text-align: center;
  background: #0a7fb9;
  font-size: 28px;
  font-weight: normal;
  color: #fff;
}
/************************** 标题 E ************************/

.delete-level {
  margin-left: 15px;
}

/************************** 一级分类 S ************************/
.module1 {
  margin: 0 auto 10px auto;
  padding: 0 15px;
  // width:1200px;
  .title {
    position: relative;
    margin-bottom: 10px;
    line-height: 46px;
  }
  h2 {
    display: inline-block;
    vertical-align: middle;
    font-size: 18px;
    color: #363636;
  }

  .add-btn {
    position: absolute;
    right: 0;
    top: 0;
  }
  .radios {
    overflow: hidden;
    .input-control {
      float: left;
      font-size: 14px;
      min-width: 150px;
      margin-right: 40px;
      margin-bottom: 10px;
    }
    .radio-label {
      font-weight: bold;
      padding: 0 5px;
    }
    label {
      display: inline-block;
      text-transform: uppercase;
    }
    input[type="radio"] {
      margin-right: 10px;
    }
  }
}
/************************** 一级分类 E ************************/

/************************** 二级分类 S ************************/
#level2-radios {
  .input-control {
    position: relative;
    margin-bottom: 15px;
    .upload {
      position: absolute;
      width: 80px;
      opacity: 0;
    }
    img {
      position: relative;
      margin-bottom: 5px;
      width: 80px;
      height: 80px;
      border: 1px solid #ccc;
    }
  }
}
/************************** 二级分类 E ************************/

/************************** 编辑产品 S ************************/
.items {
  margin-left: -5px;
  font-size: 0;
  .item {
    display: inline-block;
    margin: 0 10px 15px 10px;
    .img {
      margin-bottom: 5px;
      width: 155px;
      height: 155px;
      border: 1px solid #ccc;
      img {
        display: block;
        width: 155px;
        height: 155px;
      }
    }
    .btns {
      // display: none;
      overflow: hidden;
      div {
        display: inline-block;
        font-size: 14px;
        color: $color;
        cursor: pointer;
        &:before {
          content: "";
          display: inline-block;
          margin-right: 10px;
          width: 18px;
          height: 18px;
          vertical-align: middle;
        }
      }
      .edit {
        float: left;
        &:before {
          background: url(/img/icon-edit.jpg) no-repeat;
        }
      }
      .delete {
        float: right;
        &:before {
          background: url(/img/icon-delete.jpg) no-repeat;
        }
      }
    }
  }
}
/************************** 编辑产品 E ************************/

/****************遮罩层 S***************/
.detail-cover-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.4);
  text-align: center;
  &:before {
    content: "";
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
}
.detail-cover {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  padding: 20px;
  width: 80%;
  min-width: 450px;
  max-width: 768px;
  max-height: 100vh;
  overflow: scroll;
  border-radius: 5px;
  background: #fff;
  .icon-close {
    position: absolute;
    top: 13px;
    right: 13px;
    width: 18px;
    height: 18px;
    background: url(/img/X.png);
    cursor: pointer;
  }
}
#detail-cover-body {
  position: relative;
  max-height: 80%;
  overflow: scroll;
  padding: 5px;
  padding-bottom: 80px;
  .edit-box {
    margin-bottom: 28px;
    text-align: left;
    h3 {
      margin-bottom: 15px;
      line-height: 18px;
      font-size: 14px;
      color: #363636;
    }
    input {
      min-height: 30px;
      line-height: 30px;
      border-radius: 3px;
      border: 1px solid #e1e5f0;
      text-indent: 10px;
      font-size: 14px;
      color: #363636;
    }
    .title-box{
        display: flex;
        font-size: 14px;
        align-items: center;
    }
    .title-input{
        margin-left: 10px;
        flex-grow: 1;
    }
    .add-btn {
      font-size: 14px;
    }
    .img-file {
      margin-bottom: 10px;
      img {
        margin-right: 30px;
        width: 156px;
        height: 156px;
        vertical-align: middle;
        border-radius: 3px;
        border: 2px solid #e1e5f0;
      }
      .file-btn {
        display: inline-block;
        width: 100px;
        height: 36px;
        line-height: 34px;
        border-radius: 3px;
        border: 1px solid $color;
        text-align: center;
        vertical-align: bottom;
        background: #fff;
        color: $color;
        font-size: 14px;
      }
      input {
        opacity: 0;
      }
    }
    .inputs-box{
        .title{
            margin-bottom: 5px;
            font-size: 14px;
            color: #666;
            display: flex;
            span:first-child{
                margin-right: 10px;
                flex:3;
            }
            span:last-child{
                flex:7;
            }
        }
    }
    .input-group {
      display: flex;
      margin-bottom: 10px;
      input:nth-child(2n+1) {
        margin-right:10px;
        flex:3;
      }
      input:nth-child(2n) {
        flex:7;
      }
    }
  }
  .confirm-btn {
    float: right;
    overflow: hidden;
    width: 100px;
    height: 35px;
    line-height: 35px;
    border-radius: 3px;
    background: #1c6aa0;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
  }
}
/****************遮罩层 E***************/

/****************提交按钮 S***************/
.submit-btn-box {
  margin-bottom: 50px;
  text-align: center;
  .submit-btn {
    display: inline-block;
    width: 150px;
    height: 40px;
    line-height: 40px;
    border-radius: 5px;
    background: $color;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
  }
}
/****************提交按钮 E***************/

/****************结果展示 S***************/
.result-box{
    overflow: auto;
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    background: #fff;
    display: flex;
    font-size: 16px;
    li{
        width: 50%;
    }
    .x-button{
        position: absolute;
        top: 5px;
        right: 5px;
        width: 20px;
        cursor: default;
    }
}
/****************结果展示 E***************/
</style>
<style lang="scss">
@use 'balm-ui/components/dialog/dialog';
@use 'balm-ui/plugins/confirm/confirm';
</style>