<template>
    <div>
        <!-- 单行文本框 -->
        <input type="text" v-model="form.title">
        <hr>

        <!-- 多行文本域 -->
        <textarea v-model="form.content"></textarea>
        <hr>

        <!-- 一个复选框  默认值为true或者false-->
        <input type="checkbox" v-model="form.ischecked">发布
        <hr>
        <!-- 一个复选框  默认值改为yes或者no-->
        <input type="checkbox" v-model="form.checked" true-value="yes" false-value="no">发布
        <hr>

        <!-- 多个复选框,不用循环，一定要添value -->
        <input type="checkbox" v-model="form.lessonList" value="php">php
        <input type="checkbox" v-model="form.lessonList" value="sql">sql
        <input type="checkbox" v-model="form.lessonList" value="vue">vue
        <hr>
        <!-- 多个复选框，循环 -->
        <label v-for="lesson of lessons" :key="lesson.value">
            <input type="checkbox" v-model="form.lessonList" :value="lesson.value">{{lesson.title}}
        </label>
        <hr>

        <!-- 单选按钮  值为字符串 -->
        <input type="radio" v-model="form.sex" value="boy">男
        <input type="radio" v-model="form.sex" value="girl">女
        <hr>
        <!-- 单选按钮  值为数值 -->
        <input type="radio" v-model="form.num" :value="1">one
        <input type="radio" v-model="form.num" :value="2">two
        <hr>

        <!-- 下拉选择  单选,值为字符串 -->
        <select v-model="form.province">
            <option value="">==请选择省份==</option>
            <option value="jiangsu">江苏</option>
            <option value="beijing">北京</option>
            <option value="chongqing">重庆</option>
        </select>
        <hr>
        <!-- 下拉选择  多选，值为表达式 -->
        <select v-model="form.cities" multiple>
            <option value="">==请选择城市==</option>
            <option :value="{name:'nantong'}">南通</option>
            <option :value="{name:'nanjing'}">南京</option>
            <option :value="{name:'suzhou'}">苏州</option>
        </select>
        <hr>
        {{form}}


        <hr>
        <!-- 表单修饰符  lazy,光标从输入框中离开时发送请求 -->
        <input type="text" v-model.lazy="hd">
        <hr>
        <!-- 表单修饰符  number，输入框的数字会进行数值计算 -->
        <input type="text" v-model.number="numb">{{numb+100}}
        <hr>
        <!-- 表单修饰符  trim，输入框中去除输入的空格 -->
        <input type="text" v-model.trim="title">
    </div>
    
</template>

<script>
    const lessons = [{title:'php',value:'php'},{title:'sql',value:'sql'},{title:'vue',value:'vue'}];
    const form = {title: "后盾人",content: "houdunren.com",ischecked: true,checked:"yes",lessonList:[],sex:"boy",num:1,province:""};
    export default {
        data() {
            return {
                form,
                lessons,
                hd:"houdunren",
                numb:1,
                title:"后盾人"
            }
        },
        watch:{
            hd(newVal,oldVal){
                console.log("网络请求");
            },
            title(newVal,oldVal){
                console.log(newVal);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>