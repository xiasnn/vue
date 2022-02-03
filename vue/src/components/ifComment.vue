<template>
    <div v-for="(lesson,index) in lessons" :key="index">
        <div v-if="lesson.isDelete" :style="{color:'red'}">{{lesson.title}}</div>
        <div v-else-if="lesson.price > 200" :style="{color:'green'}">{{lesson.title}}</div>
        <!-- 带有v-if、v-else、v-else-if的div会在外层套一层div，所以可以将div换成template -->
        <template v-else>{{lesson.title}}</template>
    </div>

    <!-- v-if和v-show的区别：
        ①v-if不会将所有dom节点都渲染出来，而v-show会将所有dom节点都渲染出来，然后再根据display:none进行隐藏
        ②v-if可以在template标签中使用，而v-show不可以
     -->
    <div v-for="(lesson,index) in lessons" :key="index">
        <div v-show="lesson.isDelete">{{lesson.title}}</div>
    </div>
</template>

<script>
    import lessons from '../data/lessons'
    export default {
        data() {
            return {
                lessons
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>