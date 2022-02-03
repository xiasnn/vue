<template>
    <button @click="orderBy = 'price'" :class="{'active' : orderBy == 'price'}">价格</button>
    <button @click="orderBy = 'click'" :class="{'active' : orderBy == 'click'}">点击数</button>
     - 
    <button @click="orderType = 'asc'" :class="{'active' : orderType == 'asc'}">升序</button>
    <button @click="orderType = 'desc'" :class="{'active' : orderType == 'desc'}">降序</button>

    <template v-for="lesson in lessonList" :key="lesson.id">
        <div>课程名：{{lesson.title}} - 价格：{{lesson.price}} - 点击数：{{lesson.click}}</div>
    </template>
</template>

<script>
    import lessons from '../data/lessons'
    export default {
        data() {
            return {
                lessons,
                orderBy:'price',
                orderType:'desc'
            }
        },
        computed : {
            lessonList(){
                return this.lessons.sort((a,b) => {
                    return (this.orderType == 'asc') ? (a[this.orderBy] - b[this.orderBy]) : (b[this.orderBy] - a[this.orderBy]);
                })
            }
        }

    }
</script>

<style lang="scss" scoped>
    .active {
        background-color:red;
    }
</style>