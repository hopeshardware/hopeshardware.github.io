<template>
  <div class="container">
    <topBar/>
    <div class="main-content">
      <div class="main-content-bg">
        <div class="content-box">
          <ui-grid class="cate-box">
            <ui-grid-cell columns="6">
              <a href="/fastener" class="main-cate" @click="$delayA($event),$ga.event('1st cate','click', 'fastners')">
                fastners
                <img src="~/assets/images/fastners.jpg" alt="fastners">
              </a>
            </ui-grid-cell>
            <ui-grid-cell columns="6">
              <a href="/cutting-tools" class="main-cate" @click="$delayA($event),$ga.event('1st cate','click', 'cutting tools')">
                cutting tools
                <img src="~/assets/images/cutting-tools.jpg" alt="cutting-tools">
              </a>
            </ui-grid-cell>
            <ui-grid-cell columns="6">
              <a href="/hand-tools" class="main-cate" @click="$delayA($event),$ga.event('1st cate','click', 'hand tools')">
                hand tools
                <img src="~/assets/images/hand-tools.jpg" alt="hand-tools">
              </a>
            </ui-grid-cell>
            <ui-grid-cell columns="6" class="parent-cell">
              <a href="/furniture-hardware" class="sub-cate" @click="$delayA($event),$ga.event('1st cate','click', 'furniture hardware')">
                furniture hardware
                <img src="~/assets/images/furniture-hardware.jpg" alt="furniture-hardware-pull-handle-knob">
              </a>
              <a href="/customization" class="sub-cate" @click="$delayA($event),$ga.event('1st cate','click', 'customization')">
                customization
                <img src="~/assets/images/customization.jpg" alt="custom made hardware available">
              </a>
            </ui-grid-cell>
          </ui-grid>
        </div>
      </div>
    </div>
    <reservation/>
  </div>
</template>

<script>
import UiGridComponents from 'balm-ui/components/grid';

import topBar from '~/components/topBar.vue'
import reservation from '~/components/reservation.vue'
export default {
  data(){
    return {}
  },
  created(){
    this.__proto__.constructor.use(UiGridComponents)
  },
  head: {
    title: 'HOPEShardware - chinese factory wholesaler exporter - Home',
    meta: [
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'cutting tools,hand tools,fastners,furniture hardware,customization'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Hopeshardware located in hangzhou zhejiang providing cutting tools,hand tools,fastners,furniture hardware and also OEM/custom services'
      }
    ],
  },
  components:{
    topBar,
    reservation
  }
};
</script>

<style lang="scss" scoped>
$main-color: #1c6aa0;
$secondary:#b2daf5;//d6142b
.content-box{
  width: 100%;
  max-width: 1000px;
  margin: auto;
}
.main-content-bg {
  position: relative;
  overflow: hidden;
  &:before {
    content: "";
    width: 120vw;
    height: 56vw;
    position: absolute;
    top: -56vw;
    right: 0;
    background: $main-color;
    transform: rotate(-33deg);
    transform-origin: right bottom;
  }
}
.cate-box{
  position: relative;
  z-index: 1;
}
.main-cate,.sub-cate{
  position: relative;
  display: block;
  background: #fff;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  color: #000;
  img{
    position: absolute;
  }
}
.main-cate,.parent-cell{
  height: 35vw;
  max-height: 350px;
  min-height: 230px;
}
.main-cate{
  padding: 13px;
  padding: clamp(13px,2.5vw,25px);
  border:4px solid $secondary;
  border-top:4px solid transparent;
  border-left:4px solid transparent;
  font-size: 26px;
  font-size: clamp(26px,3.8vw,38px);
  img{
    right: 20px;
    bottom: 8px;
    height: 72%;
  }
}
.sub-cate{
  width: 100%;
  padding: 8px;
  padding: clamp(8px,1.6vw,16px);
  height: 48%;
  border:2px solid $secondary;
  border-top:2px solid transparent;
  border-left:2px solid transparent;
  font-size: 20px;
  font-size: clamp(20px,2.6vw,26px);
  img{
    right: 10px;
    bottom: 4px;
    height: 70%;
  }
}
.parent-cell{
  display: flex;
  align-content: space-between;
  flex-wrap: wrap;
}
</style>

<style lang="scss">
@use 'balm-ui/components/grid/grid';
</style>
