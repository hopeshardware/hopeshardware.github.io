<template>
  <div class="bg">
    <div class="main-content">
      <a href="/" class="logo">
          <img src="~/assets/images/logo@2x.png" alt />
      </a>
      <a href="/about-us" class="about-us">about us</a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style  lang="scss" scoped>
$main-color: #1c6aa0;
$secondary: #d6142b;
.bg{
  background: $main-color;
}
.main-content{
  padding: 1.5vw 2.4vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  margin: auto;
}
 .logo{
   display: block;
   height: 5.2vw;
   min-height: 36px;
    max-height: 52px;
    img{
      display: block;
      height: 100%;
    }
  }
  .about-us{
    text-transform: uppercase;
    text-decoration: none;
    font-weight: bold;
    font-size:20px;
    font-size:clamp(14px,2vw,20px);
    color:#fff;
  }
</style>