<template>
  <div class="hello">
    <div>{{ msgs }}</div>
      <van-button type="danger">危险按钮</van-button>
      <div>getAPI测试结果：{{isGet}}</div>
      <div>postAPI测试结果：{{isPost}}</div>
  </div>
</template>

<script>
import {mockGetApi,mockPostApi} from '../../request/api';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      msgs:'Hello，基于vue3.0：vant组件、rem适配、axios封装的模板',
      isGet:false,
      isPost:false
    }
  },
  methods:{
    testGetApi(){
      mockGetApi({}).then(res=>{
        if(res.success){
          this.isGet = true
        }else{
          this.isGet = false
        }
      })
    },
    testPostApi(){
      mockPostApi({}).then(res=>{
        if(res.data){
          this.isPost = true
        }else{
          this.isPost = false
        }
      })
    }
  },
  mounted(){
    this.testGetApi()
    this.testPostApi()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
