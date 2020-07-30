<!--  -->
<template>
  <div>
  <!-- 头部 -->
    <div class="haya-home-header">
      <span>头条</span>
    </div>
  
  <!-- 内容 -->
    <div class="haya-hemo-content">
      <div class="home-content-left">
        <HayaNav></HayaNav>
      </div>
      <div class="home-content-middle">
        中间
      </div>
      <div class="home-content-right">
        右边
      </div>
    </div>

  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import HayaNav from "../components/nav"
export default {
//import引入的组件需要注入到对象中才能使用
components: {
  HayaNav
},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less' scoped>
  .haya-home-header {
    height: 34px;
    line-height: 34px;
    background: #222;
    font-size: 14px;
    color: #fff;
    span {
      border-right: 1px solid #3a3a3a;
      color: #fff;
      padding: 0 10px;
    }
  }

  .haya-hemo-content {
    width: 1170px;
    // height: 1000px;
    margin: 15px 206.5px 0px;
    border: 1px solid pink;
  .home-content-left {
    width: 110px;
    height: 600px;
    margin-right: 30px;
    float: left;
  }

  .home-content-middle {
    width: 660px;
    height: 938px;
    float: left;
    background: orange;
  }

  .home-content-right {
    width: 340px;
    height: 938px;
    float: left;
    background: violet;
  }
}
</style>