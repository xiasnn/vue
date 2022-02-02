const app = Vue.createApp({
    data() {
        return {
            name:"后盾人",
            event:'click',
            num:1,
            error:''
        }
    },
    methods:{
        add(event){
            this.error ='';
            if(this.num < 10){
              this.num++;  
            }else{
                this.error = "数字不能超过10"
            }
            
        },
        reduce(event){
            this.error ='';
            if(this.num > 0){
                this.num--;
            }else{
                this.error = "数字不能小于0"
            }            
        },
        go(event){
            event.preventDefault();
        },
        skip(event){},
        show(event,n){
            alert(n);
        }
    }
});
const vm = app.mount('#app');