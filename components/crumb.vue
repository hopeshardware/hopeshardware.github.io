<template>
  <div>
    <!-- PATH S -->
      <div class="path">
        <div id="path-body">
          <template v-for="(link,name) in prePath">
            <a
              :key="`${name}-a`"
              class="blue"
              :href="link"
            >{{name}}</a>
            <span class="icon-arrow" :key="`${name}-span`"></span>
          </template>
          <span class="current">{{current}}</span>
        </div>
      </div>
      <!-- PATH E -->
  </div>
</template>

<script>
export default {
    props:{'prePath':Object,current:String}
};
</script>

<style scoped>
/****************PATH S***************/
.path {
  height: 40px;
  background: #fff;
}
#path-body {
  max-width: 1200px;
  margin: auto;
  font-size: 14px;
  line-height: 40px;
}
#path-body a {
  color: #363636;
  text-transform: uppercase;
}
#path-body a:hover {
  text-decoration: underline;
}
#path-body .icon-arrow {
  display: inline-block;
  margin: 0 17px;
  width: 12px;
  height: 12px;
  background: url(/img/arrow.png);
}
#path-body .blue {
  color: #1c6aa0;
  text-transform: uppercase;
}

.current{
  text-transform: uppercase;
}
/****************PATH E***************/
/****************@media 992-1200 S***************/
@media (max-width: 1200px) {
  #path-body {
    width: 15rem;
  }
}
/****************@media 992-1200 E***************/
/****************@media 0-768 S***************/
@media (max-width: 768px) {
  #path-body .icon-arrow{
    margin: 0 5px;
  }
}

</style>