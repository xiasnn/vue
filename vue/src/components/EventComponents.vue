<template>
    <div @click="num++">自增：{{num}}</div>
    <div @click="sum(23,34,45)">求和：{{num}}</div>

    <!-- 无参 -->
    <div @click="ev()">事件对象(无参)</div>
    <!-- 有参 -->
    <div @click="eve(1,2,3,$event)">事件对象(有参)</div>


    <!-- 事件执行多个函数 -->
    <div @click="ev(),sum(44,55)">事件执行多个函数</div>
</template>

<script>
    export default {
        data() {
            return{
                num:1
            }
        },
        methods:{
            sum(...args){
                console.log('sum函数');
                this.num = args.reduce((s,n) => s + n,this.num)
            },
            ev(event){
                console.log('ev函数');
                console.log(event);
            },
            eve(...args){
                const event = args.pop();
                console.log(event);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>