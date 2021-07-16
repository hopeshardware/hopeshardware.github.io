<template>
  <div>
    <top :active="cate1Name" />
    <div class="main-content">
      <crumb :prePath="prePath" :current="cate2Name"/>
      <!-- TAB S -->
      <ul id="tab" v-if="hasTabData && cate2Data.children.length>1">
        <li
          :data-id="ele.id"
          :class="{hidden:ele.hidden,selected:activeTabData.name===ele.name}"
          v-for="ele in cate2Data.children"
          :key="ele.id"
        >
          <a
            :href="`./${ele.name.toLowerCase().replace(/[\s|\/]/g,'-')}`"
            @click.prevent="switchTab(ele.id),$ga.event('3rd cate','click', ele.name)"
          >{{ele.name}}</a>
        </li>
      </ul>
      <!-- TAB E -->

      <!-- main S -->
      <div class="main" v-if="activeTabData.hidden!=='hidden'">
        <ul ref="listBox" :key="activeTabData.id">
          <li
            v-for="id in listData.slice(0,pageNum*pageSize)"
            :key="id"
            @click="openDialog(products[id]),$ga.event('product','click', products[id].title)"
          >
            <a :href="`/product/${id}/`" @click.prevent :data-id="id">
              <img :src="products[id].img" :alt="products[id].img"/>
            </a>
            <p>{{products[id].title}}</p>
          </li>
        </ul>
        <p class="end-note" v-if="showEnd">—— END ——</p>
      </div>

      <!-- main E -->

      <!-- 遮罩层 S -->
      <div class="detail-cover-bg" v-show="isDialogShow" v-if="activeItem.title" @click="isDialogShow=false">
        <div class="detail-cover" @click.stop>
          <dl id="detail-cover-body">
            <dt class='item-img'><img :src='activeItem.img'></dt>
            <dd id='item-descrip'>
              <ul><li>name</li><li>{{activeItem.title}}</li></ul>
              <ul v-for="(ele,index) in activeItem.detail[0].txt" :key="index"><li>{{ele.key}}</li><li>{{ele.value}}</li></ul>
            </dd>
          </dl>
          <span class="icon-close" @click="isDialogShow=false"></span>
        </div>
      </div>
      <!-- 遮罩层 E -->

      <!-- 版权声明 S -->
      <reservation />
      <!-- 版权声明 E -->
    </div>
  </div>
</template>

<script>
import top from "~/components/top.vue";
import crumb from "~/components/crumb.vue";
import reservation from "~/components/reservation.vue";
import data from "~/assets/data/data.json";
import products from "~/assets/data/products.json";

export default {
  asyncData({ params }) {
    const cate1Name = params.cate1.replace(/-/g, " "),
      cate2Name = params.cate2.replace(/-/g, " "),
      cate3Name = (params.cate3||"").replace(/-/g, " "),
      cate1Data =
        (
          data.find(ele => {
            return ele.name.toLowerCase() === cate1Name;
          }) || {}
        ),
      cate2Data =
        cate1Data.children.find(ele => {
          return ele.name.toLowerCase() === cate2Name;
        }) || {},
      hasTabData = cate2Data.children[0].class === "third";
    let listData = [],activeTabData={};
    if (hasTabData) {
      activeTabData =(cate3Name?cate2Data.children.find(ele => {
          return ele.name.toLowerCase() === cate3Name;
        }):cate2Data.children[0])||{}
      listData = activeTabData.children || [];
    } else {
      listData = cate2Data.children || [];
    }

    return {
      products,
      cate1Name,
      cate2Name,
      cate1Data,
      cate2Data,
      activeTabData,
      hasTabData,
      listData,
      isDialogShow:false,
      activeItem:{},
      prePath:{home:"/",[cate1Name]:`/${cate1Name.replace(" ","-")}`},
      loadmoreDistance:50,
      showEnd:false,
      pageSize:12,
      pageNum:1
    };
  },
  head(){
    return {
      title: `${this.cate2Name} catalogue - HOPEShardware`,
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content:
            `chinese ${this.cate2Name} factory, custom made ${this.cate2Name}, ${this.cate2Name} catalogue`
        },
        // {
        //   hid: "description",
        //   name: "description",
        //   content:
        //     "Hopeshardware located in hangzhou zhejiang providing cutting tools,hand tools,fastners,furniture hardware and also OEM/custom services"
        // }
      ]
    }
  },
  components: {
    top,
    crumb,
    reservation
  },
  mounted(){
    this.addScrollListner()
  },
  methods:{
    openDialog(item){
      this.activeItem=item
      this.isDialogShow=true
    },
    // 判断是否需要加载下一页
		loadmore(){
			let clientH=window.innerHeight
			if(this.$refs.listBox.getBoundingClientRect().bottom-this.loadmoreDistance<clientH && this.pageNum*this.pageSize<this.listData.length){
				this.pageNum++
				this.loadmore()
			}else if(this.pageNum*this.pageSize>=this.listData.length){
				this.showEnd=true
				window.onscroll=null
			}
		},
    addScrollListner(){
			var timer=null,_this=this
			window.onscroll=function(){
				clearTimeout(timer)
				timer=null
				timer=setTimeout(_this.loadmore,200)
			}
		},
    switchTab(id){
      this.activeTabData=this.cate2Data.children[id]
      this.listData=this.cate2Data.children[id].children
    }
  }
};
</script>

<style lang="scss" scoped>

/****************TAB S***************/
#tab {
  margin-top: 45px;
  text-align: center;
  font-size: 0;
}
#tab li {
  display: inline-block;
  margin-bottom:20px;
  font-size: 0;
  font-weight: bold;
  line-height: 14px;
  border-bottom: 2px solid #81b0d1;
  text-transform: uppercase;
}
#tab li a {
  font-size: 14px;
  color: #81b0d1;
  text-decoration: none;
  display: block;
  padding: 0 25px 12px 25px;
}
#tab li:hover {
  border-bottom-color: #1c6aa0;
}
#tab li:hover a {
  font-weight: bold;
  color: #1c6aa0;
}
#tab .selected {
  border-bottom-color: #1c6aa0;
}
#tab .selected a {
  color: #1c6aa0;
}
/****************TAB E***************/
/****************main S***************/
.main {
  box-sizing: border-box;
  margin: 15px auto 0 auto;
  padding: 10px 20px;
  max-width: 1200px;
  background: #fff;
  border-radius: 3px;
}
.main li {
  display: inline-block;
  vertical-align: top;
  margin: 25px 20px;
  width: 250px;
  background: #fff;
}
.main li a {
  display: block;
  width: 100%;
  height: 225px;
  text-align: center;
  transition: transform 0.3s ease-out;
}
.main li a:hover {
  box-shadow: 0 2px 8px 0 rgba(28, 106, 160, 0.15);
  transform: translate3d(0, -10px, 0);
}
.main li a:before {
  content: "";
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
.main li a img {
  width: 60%;
  vertical-align: middle;
}
.main li p {
  text-align: center;
  font-size: 14px;
  color: #363636;
}
.main .end-note {
  text-align: center;
  font-size: 14px;
  color: #586e83;
}
/****************main E***************/
/****************遮罩层 S***************/
.detail-cover-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  text-align: center;
}
.detail-cover-bg:before {
  content: "";
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
#detail-cover-body{
  max-height: 80vh;
  overflow: scroll;
}
.detail-cover {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  padding: 50px;
  width: 80%;
  max-width: 1004px;
  border-radius: 5px;
  background: #fff;
  font-size: 0;
}
.detail-cover .item-img {
  float: left;
  vertical-align: top;
  box-sizing: border-box;
  padding-right: 40px;
  width: 50%;
  text-align: center;
}
.detail-cover .item-img img {
  vertical-align: middle;
  max-width: 100%;
}
.detail-cover #item-descrip {
  display: inline-block;
  width: 50%;
  font-size: 14px;
  color: #363636;
  text-align: left;
}
.detail-cover #item-descrip ul {
  margin-bottom: 20px;
  line-height: 20px;
  word-wrap: break-word;
}
.detail-cover #item-descrip ul li:first-child {
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 8px;
}
.detail-cover .icon-close {
  position: absolute;
  top: 13px;
  right: 13px;
  width: 18px;
  height: 18px;
  background: url(/img/X.png);
  cursor: pointer;
}
/****************遮罩层 E***************/
/****************@media 992-1200 S***************/
@media (max-width: 1200px) {
  html {
    font-size: 62px;
  }
  .main {
    width: 15rem;
  }
  .main {
    padding: 0.133333rem 0.266667rem;
  }
  .main li {
    margin: 0.333333rem 0.266667rem;
    width: 3.083rem;
  }
  .main li a {
    height: 3.0rem;
  }
}
/****************@media 992-1200 E***************/
/****************@media 768-992 S***************/
@media (max-width: 992px) {
  html {
    font-size: 48px;
  }
  .main li {
    width: 4.289rem;
  }
  .main li a {
    height: 3.86rem;
  }
}
/****************@media 768-992 E***************/
/****************@media 768-900 S***************/
@media (max-width: 900px) {
  .detail-cover {
    padding: 0.892857rem;
    width: 90%;
  }
  .detail-cover .item-img {
    padding-right: 0.714286rem;
  }
}
/****************@media 768-900 E***************/
/****************@media 0-768 S***************/
@media (max-width: 768px) {
  html {
    font-size: 30px;
  }
  .main li p {
    font-size: 0.291667rem;
  }
  .detail-cover {
    padding: 1.25rem;
    width: 95%;
  }
  .detail-cover .item-img {
    padding-right: 0;
    width: 100%;
  }
  .detail-cover #item-descrip {
    width: 100%;
    font-size: 0.291667rem;
  }
  .detail-cover #item-descrip ul {
    margin-bottom: 0.416667rem;
    line-height: 0.416667rem;
  }
  .detail-cover #item-descrip ul li:first-child {
    margin-bottom: 0.166667rem;
  }
}
/****************@media 0-768 E***************/
</style>