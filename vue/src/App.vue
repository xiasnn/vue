<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import ClassComponent from "./components/classComponent.vue"
import MoreStyles from "./components/moreStyles.vue"
export default{
    components:{ClassComponent,MoreStyles},
    data() {
        return {
            title: "后盾人"
        };
    },
}
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div class="hd xia">{{title}}</div>
  <ClassComponent />
  <MoreStyles />
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
