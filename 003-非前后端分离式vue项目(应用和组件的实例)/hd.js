// 容器，父组件
const app = Vue.createApp({
    data() {
        return {
            name:"根组件-父亲",
            
        }
    },
    template:`<div>{{name}}<xiasnn></xiasnn></div>`
});

app.component('xiasnn',{
    data() {
        return {
            name:"子组件"
        }
    },
    template:`<p style="color:white;background-color:red;">{{name}}</p>`
})

// 根组件的对象
const vm = app.mount('#app');   //挂载
