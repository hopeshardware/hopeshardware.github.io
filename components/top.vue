<template>
  <div>
    <!-- 头部 S -->
    <div class="header">
      <div class="header-body">
        <div class="logo">
          <a href="/">
            <img src="/img/logo.png" />
          </a>
        </div>
        <div class="about-us">
          <a
            href="/about-us"
            @click="$delayA($event),$ga.event('about-us','click', 'home')"
          >ABOUT US</a>
        </div>
      </div>
    </div>
    <!-- 头部 E -->
  </div>
</template>

<script>
export default {
    data(){
        return {
            // cateData
        }
    },
    props:{'active':String}
};
</script>

<style scoped>
/****************头部 S***************/
.header {
  background: #fff;
  border-bottom: 2px solid #1c6aa0;
}
.header-body {
  margin: auto;
  max-width: 1200px;
  height: 100px;
}
.header-body > div {
  height: 100%;
  line-height: 100px;
}
.header-body .logo {
  float: left;
}
.header-body .logo a {
  display: inline-block;
  width: 245px;
  height: 50px;
  vertical-align: middle;
}
.header-body .logo a img {
  display: block;
  max-width: 100%;
  max-height: 100%;
}
.header-body .about-us {
  float: right;
  margin-right: 0.416667rem;
}
.header-body .about-us a {
  font-size: 16px;
  color: #363636;
  font-weight: bold;
  vertical-align: middle;
}
/****************头部 E***************/
/****************@media 992-1200 S***************/
@media (max-width: 1200px) {
  .header-body,
  #nav-body {
    width: 15rem;
  }
}
/****************@media 992-1200 E***************/
/****************@media 0-768 S***************/
@media (max-width: 768px) {
  .header-body {
    height: 2.083333rem;
  }
  .header-body > div {
    line-height: 2.083333rem;
  }
  .header-body .logo a {
    width: 5.104167rem;
    height: 1.041667rem;
  }
  .header-body .about-us a {
    font-size: 14px;
  }
}
/****************@media 0-768 E***************/
</style>