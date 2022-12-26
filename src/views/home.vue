<!--首页-->
<template>
  <div class="home">
    <HelloWorld/>
    <div class="icon-test">
      这是一个图标调用演示
      <svg-icon icon-class="home" size="22px" color="#ff5656"/>
      <el-button>haha</el-button>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWord.vue';
import svgIcon from "@/components/SvgIcon/index.vue";
export default {
  name: 'home',
  components: {
    HelloWorld,
    svgIcon
  }
};
</script>

<style scoped lang="scss">
.home{
  padding: 10px;
}
</style>
