<template>
    <!-- 数值 -->
    <div v-for="n in 8" :key="n">{{n}}</div>

    <!-- 对象 -->
    <div v-for="(value,key,index) in obj" :key="index">{{value}} - {{key}} - {{index}}</div>

    <!-- 数组，可以用in也可以用of -->
    <div v-for="lesson in lessons" :key="lesson.id">{{lesson.title}}</div>

    <!-- 不可以将v-if放到v-for上，因为v-if的优先级更高，会报错 -->
    <div v-for="lesson of lessons" :key="lesson.id">
        <template v-if="!lesson.isDelete">{{lesson.title}}</template>
    </div>

</template>

<script>
    import lessons from '../data/lessons'
    export default {
        data() {
            return {
                lessons,
                obj:{
                    name:'vue',
                    price:12
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>