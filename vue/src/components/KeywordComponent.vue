<template>
    <!-- 键盘点击 -->
    <!-- <input type="text" @keyup="key"> -->

    <!-- 先按住某一个键，再点键盘[系统定义的热键不能再使用]  ctrl alt shift meta(windows中指的是window键) -->
    <!-- <input type="text" @keyup.alt="key"> -->
    <!-- <input type="text" @keyup.alt.k="key"> -->
    <!-- <input type="text" @keyup.ctrl.alt.enter="key"> -->

    <!-- 按键的别名 enter esc tab space delete up down left right -->
    <!-- <input type="text" @keyup.up="key"> -->

    <!-- 鼠标点击事件 left middle right -->
    <!-- <div :style="{width:'300px',height:'300px',backgroundColor:'green'}" @click.middle="hd"></div> -->

    <!-- 键盘加上鼠标点击事件 -->
    <!-- 按住ctrl和其它任何按键都可以 -->
    <!-- <div :style="{width:'300px',height:'300px',backgroundColor:'green'}" @click.ctrl="hd"></div> -->
    <!-- 只按住ctrl，不能按住其它任何按键 -->
    <div :style="{width:'300px',height:'300px',backgroundColor:'green'}" @click.ctrl.exact="hd"></div>
</template>

<script>
    export default {
        data(){
            return {}
        },
        methods:{
            key(event){
                console.log(event.key);
            },
            hd(event){
                console.log(event);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>