<template>
  <div>
    <top :active="cate1Name"/>
    <crumb :prePath="prePath" :current="cate1Name"/>

    <div class="main-content">
      <!-- main S -->
      <div class="main">
        <ul class="main-body" id="main-body">
          <li :class="ele.hidden?'hidden':''" v-for="ele in cate1Data" :key="ele.id">
            <a
              :href="`/${cate1Name.replace(/[\s|\/]/g,'-')}/${ele.name.toLowerCase().replace(/[\s|\/]/g,'-')}/`"
              @click="$delayA($event),$ga.event('2nd cate','click', ele.name)"
            >
              <img :src="ele.img" :alt="ele.img"/>
              <span>{{ele.name}}</span>
            </a>
          </li>
        </ul>
      </div>
      <!-- main E -->

      <!-- 版权声明 S -->
      <reservation/>
      <!-- 版权声明 E -->
    </div>
  </div>
</template>

<script>
import top from '~/components/top.vue'
import crumb from '~/components/crumb.vue'
import reservation from '~/components/reservation.vue'
import data from "~/assets/data/data.json";

export default {
  asyncData({ params }) {
    const cate1Name = params.cate1.replace(/-/g, " "),
      cate1Data =
        (
          data.find(ele => {
            return ele.name.toLowerCase() === cate1Name;
          }) || {}
        ).children || [];

    return {
        cate1Name,
        cate1Data,
        prePath:{home:"/"}
    };
  },
  head(){
    return {
      title: `${this.cate1Name} catalogue - HOPEShardware`,
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content:
            `chinese ${this.cate1Name} factory, custom made ${this.cate1Name}, ${this.cate1Name} catalogue`
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
  }
};
</script>

<style lang="scss" scoped>
/****************main S***************/
.main {
  margin: 50px auto;
  max-width: 1200px;
}
.main-body {
  position: relative;
  width: 1222px;
  left: -11px;
}
.main-body:after {
  content: "";
  display: table;
  clear: both;
}
.main-body li {
  float: left;
  margin: 12px 10px;
  width: 285.5px;
  height: 211px;
  background: #fff;
}
.main-body li:hover {
  box-shadow: 0 0 15px 0 rgba(28, 106, 160, 0.2);
}
.main-body a {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
}
.main-body a img {
  position: absolute;
  bottom: 9.5%;
  right: 10.7%;
  width: 55.7%;
}
.main-body a span {
  position: absolute;
  top: 20px;
  left: 20px;
  padding-bottom: 5px;
  font-size: 30px;
  font-weight: bold;
  color: #363636;
  text-transform: uppercase;
}
.main-body a span:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 2px;
  width: 25px;
  height: 7px;
  background: url(/img/gdt.jpg);
}
/****************main E***************/
/****************@media 992-1200 S***************/
@media (max-width: 1200px) {
  html {
    font-size: 62px;
  }
  .main {
    width: 15rem;
  }
  .main .main-body {
    left: -0.16rem;
    width: 15.255555rem;
  }
  .main .main-body li {
    margin: 0.16rem 0.133333rem;
    width: 3.547rem;
    height: 2.672rem;
  }
}
/****************@media 992-1200 E***************/
/****************@media 768-992 S***************/
@media (max-width: 992px) {
  html {
    font-size: 48px;
  }
  .main .main-body li {
    width: 4.818rem;
    height: 3.63rem;
  }
}
/****************@media 768-992 E***************/
/****************@media 0-768 S***************/
@media (max-width: 768px) {
  html {
    font-size: 30px;
  }
  .main {
    margin: 1.041667rem auto;
  }
  .main .main-body li {
    width: 7.361rem;
    height: 5.547rem;
  }
  .main .main-body a span {
    top: 0.416667rem;
    left: 0.416667rem;
    padding-bottom: 0.104167rem;
    font-size: 0.708333rem;
  }
  .main .main-body a span:before {
    left: 0.041667rem;
    width: 0.520833rem;
    height: 0.145833rem;
  }
}
/****************@media 0-768 E***************/

</style>