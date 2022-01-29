Vue.createApp({
    data(){
        return {
            title: '后盾人'
        }
    },
    // 如果有template，前面标签中的内容被忽略
    // template:`
    // <div>houdunren{{title}}</div>
    // `
}).mount('#app')