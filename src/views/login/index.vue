<template>
  <div class="hello">
    <div>{{ msgs }}</div>
      <van-button type="danger">危险按钮</van-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      msgs:'Hello，基于vue3.0：vant组件、rem适配、axios封装的模板'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
