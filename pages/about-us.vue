<template>
  <div>
    <top/>
    <crumb :prePath="prePath" current="about us"/>

	<!-- main S -->
	<div class="main">
		<dl id="main-body">
			<dt><img src="/img/about-us-title.jpg" alt="HOPES HARDWARE"></dt>
			<dd>Hangzhou Hopes Hardware Co., Ltd. is located in Hangzhou, China. Focus on the manufacturing and processing of metal products and tools. The main products include:<dd/>
      <dd><strong>Fasteners and operating tools: </strong>standard and non-standard parts such as screws, bolts, nuts, washers, rivets, studs, thread insert, and wrench, screwdriver bits, etc.</dd>
			<dd><strong>Metal processing tools:</strong> thread taps and dies, turning tools, milling cutter, drill bits, files, etc., providing non-standard customized services.</dd>
			<dd><strong>Hardware customization:</strong> various hardware parts made by lathe processing, precision casting, cutting and stamping.</dd>
			<dd>In the past few years, our market has grown rapidly and currently covers Europe, North America, South America, Australia, New Zealand, Japan, South Korea, Southeast Asia, etc.</dd>
			<dd>Relying on China's manufacturing advantages, we will provide you with high-quality products and fast service.</dd>
			<dd>Welcome to write to us to discuss business, and we will reply to your email within 24 hours.</dd>
			<dd onclick="
			gtag('event', 'click', {'event_category': 'contact','event_label': 'email'})" class="email"><b>Official E-mail: info@hopeshardware.com</b></dd>
		</dl>
	</div>
	<!-- main E -->
  <reservation/>
  </div>
</template>

<script>
import top from '~/components/top.vue'
import crumb from '~/components/crumb.vue'
import reservation from '~/components/reservation.vue'
export default {
    data(){
        return {
            prePath:{home:"/"}
        }
    },
    components:{
        top,
        crumb,
        reservation
    },
    head: {
    title: 'HOPEShardware - chinese factory wholesaler exporter - about us',
    meta: [
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'chinese hardware factory,tools wholesaler,fastners exporter,custom hardware,hopes hardware contact email'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Official E-mail: info@hopeshardware.com. HOPEShardware located in hangzhou zhejiang providing cutting tools,hand tools,fastners,furniture hardware and also OEM/custom services'
      }
    ],
  },
}
</script>

<style lang="scss" scoped>
/****************main S***************/
.main {
  box-sizing: border-box;
  margin: 25px auto 0 auto;
  padding: 50px 60px;
  max-width: 1200px;
  background: #fff;
  border-radius: 3px;
}
.main #main-body dt {
  margin-bottom: 45px;
  text-align: center;
}
.main #main-body dt img {
  width: 611px;
  height: 56px;
}
.main #main-body dd {
  margin-bottom: 20px;
  line-height: 30px;
  font-size: 16px;
  color: #363636;
}
.email{
  text-align: right;
}
/****************main E***************/
/****************@media 992-1200 S***************/
@media (max-width: 1200px) {
  html {
    font-size: 62px;
  }
  .main{
    width: 15rem;
  }
  .main {
    margin: 0.333333rem auto 0 auto;
    padding: 0.666667rem 0.8rem;
  }
  .main #main-body dt {
    margin-bottom: 0.6rem;
  }
  .main #main-body dd {
    margin-bottom: 0.266667rem;
    line-height: 0.4rem;
  }
}
/****************@media 992-1200 E***************/
/****************@media 768-992 S***************/
@media (max-width: 992px) {
  html {
    font-size: 48px;
  }
  .main #main-body dt img {
    width: 9.854839rem;
    height: 0.903226rem;
  }
  .main #main-body dd {
    font-size: 14px;
    line-height: 0.45rem;
  }
}
/****************@media 768-992 E***************/
/****************@media 0-768 S***************/
@media (max-width: 768px) {
  html {
    font-size: 30px;
  }
  .main #main-body dd {
    font-size: 0.291667rem;
    line-height: 0.6rem;
  }
}
/****************@media 0-768 E***************/
</style>