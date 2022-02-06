<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import ClassComponent from "./components/classComponent.vue"
import MoreStyles from "./components/moreStyles.vue"
import ClassList from "./components/classList.vue"
import StyleComponent from "./components/styleComponent.vue"
import IfComment from "./components/ifComment.vue"
import VForComment from "./components/vForComment.vue"
import LessonFor from "./components/lessonFor.vue"
import ArrComponent from "./components/ArrComponent.vue"
import EventComponent from "./components/EventComponents.vue"
import EventFixComponent from "./components/EventFixComponent.vue"
import KeywordComponent from "./components/KeywordComponent.vue"
import FormComponent from "./components/FormComponent.vue"
export default{
    components:{ClassComponent,MoreStyles,ClassList,StyleComponent,IfComment,VForComment,LessonFor,ArrComponent,EventComponent,EventFixComponent,KeywordComponent,FormComponent},
    data() {
        return {
            title: "后盾人"
        };
    },
}
</script>

<template>
  <!-- <div class="hd xia">{{title}}</div> -->

  <!-- 组件样式隔离 -->
  <!-- <ClassComponent /> -->

  <!-- css样式的多种处理 -->
  <!-- <MoreStyles /> -->

  <!-- 控制列表的删除状态 -->
  <!-- <ClassList /> -->

  <!-- 组件样式与Style行级样式 -->
  <!-- <StyleComponent class="xiasnn" /> -->

  <!-- v-if与v-show的使用区别 -->
  <!-- <IfComment /> -->

  <!-- v-for使用细节 -->
  <!-- <VForComment /> -->

  <!-- 课程排序案例 -->
  <!-- <LessonFor /> -->

  <!-- vue.js对数组的方法变更 -->
  <!-- <ArrComponent /> -->

  <!-- event事件在vue.js中的使用 -->
  <!-- <EventComponent /> -->

  <!-- vue.js事件修饰符 -->
  <!-- <EventFixComponent /> -->

  <!-- vue.js中的键盘事件 -->
  <!-- <KeywordComponent /> -->

  <!-- vue.js表单的基本使用 -->
  <FormComponent />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.xia{
  font-size: 30px;
  font-weight: bold;
  color:white;
}
</style>
