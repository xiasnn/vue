<template>
    <!-- 捕获行为 -->
    <!-- <div @click.capture="b1" :style="{backgroundColor:'red'}"> -->

    <!-- 只捕获自己 -->
    <!-- <div @click.self="b1" :style="{backgroundColor:'red'}"> -->
    
    <div @click.self="b1" :style="{backgroundColor:'red'}">
        <!-- 阻止冒泡行为 -->
        <!-- <div @click.stop="b2" :style="{backgroundColor:'green',width:'200px'}">b2</div> -->

        <!-- 捕获行为 -->
        <!-- <div @click.capture="b2" :style="{backgroundColor:'green',width:'200px'}">b2</div> -->

        <!-- 只执行一次 -->
        <div @click.once="b2" :style="{backgroundColor:'green',width:'200px'}">b2</div>
    </div>


    <!-- 阻止默认行为 -->
    <a href="https://www.baidu.com" @click.prevent="link">百度</a><br/>

    <!-- passive:告诉系统忽略阻止默认行为，让系统不要检测有没有阻止默认行为 -->
    <a href="https://www.houdunren.com" @click.passive="skip">后盾人</a>


    <div @scroll.passive="scro" :style="{border:'10px solid gray',width:'500px',height:'500px',overflow:'scroll'}">
        <div :style="{backgroundColor:'green',height:'2500px'}"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return
        },
        methods:{
            b1(){
                console.log('b1');
            },
            b2(){
                console.log('b2');
            },
            link(){
                console.log('link...');
            },
            skip(event){
                event.preventDefault();
                console.log('skip...');
            },
            scro(){
                console.log('滚动中。。。')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>