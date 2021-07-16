<template>
<div>
    <top/>
    <!-- main S -->
    <div class="main">
        <dl class="detail-body">
            <dt class='item-img'><img :src='data.img' :alt='data.img'></dt>
            <dd id='item-descrip'>
                <ul><li>name</li><li>{{data.title}}</li></ul>
                <ul v-for="(ele,index) in data.detail[0].txt" :key="index"><li>{{ele.key}}</li><li>{{ele.value}}</li></ul>
            </dd>
        </dl>
    </div>
    <!-- 版权声明 S -->
    <reservation />
    <!-- 版权声明 E -->
</div>
</template>

<script>
import top from "~/components/top.vue";
import crumb from "~/components/crumb.vue";
import reservation from "~/components/reservation.vue";
import products from "~/assets/data/products.json";

export default {
     asyncData({ params }) {
         let productId=params.productId
         return {
            data:products[productId]
         }
     },
     head(){
      return {
        title: `${this.data.title} - HOPEShardware`,
        meta: [
          {
            hid: "keywords",
            name: "keywords",
            content:
              `chinese ${this.data.title} factory, custom made ${this.data.title}, ${this.data.title} catalogue`
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
}
</script>

<style lang="scss" scoped>
/****************main S***************/
.main {
  box-sizing: border-box;
  margin: 15px auto 0 auto;
  padding: 10px 20px;
  max-width: 1200px;
  background: #fff;
  border-radius: 3px;
}
.detail-body{
  font-size: 0;
}
.detail-body .item-img {
  display: inline-block;
  vertical-align: top;
  box-sizing: border-box;
  padding-right: 40px;
  width: 49%;
  text-align: center;
}
.detail-body .item-img img {
  vertical-align: middle;
  max-width: 100%;
}
.detail-body #item-descrip {
  display: inline-block;
  width: 50%;
  font-size: 14px;
  color: #363636;
  text-align: left;
}
.detail-body #item-descrip ul {
  margin-bottom: 20px;
  line-height: 20px;
  word-wrap: break-word;
}
.detail-body #item-descrip ul li:first-child {
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 8px;
}
/****************@media 992-1200 S***************/
@media (max-width: 1200px) {
  html {
    font-size: 62px;
  }
  .main {
    width: 15rem;
    padding: 0.133333rem 0.266667rem;
  }
}
/****************@media 992-1200 E***************/
/****************@media 768-992 S***************/
@media (max-width: 992px) {
  html {
    font-size: 48px;
  }
}
/****************@media 768-992 E***************/
/****************@media 768-900 S***************/
@media (max-width: 900px) {
  .detail-body {
    padding: 0.892857rem;
    width: 90%;
  }
  .detail-body .item-img {
    padding-right: 0.714286rem;
  }
}
/****************@media 768-900 E***************/
/****************@media 0-768 S***************/
@media (max-width: 768px) {
  html {
    font-size: 30px;
  }
  .detail-body {
    padding: 1.25rem;
    width: 95%;
  }
  .detail-body .item-img {
    padding-right: 0;
    width: 100%;
  }
  .detail-body #item-descrip {
    width: 100%;
    font-size: 0.291667rem;
  }
  .detail-body #item-descrip ul {
    margin-bottom: 0.416667rem;
    line-height: 0.416667rem;
  }
  .detail-body #item-descrip ul li:first-child {
    margin-bottom: 0.166667rem;
  }
}
/****************@media 0-768 E***************/
</style>