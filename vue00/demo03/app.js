new Vue({
	el:"#vue-app",
	data:{
		name:"",
		age:""
	},
	methods:{
		logName:function(){
			// console.log("您正在输入您的名字");
			this.name = this.$refs.name.value;
			console.log(this.name)
		},
		logAge:function(){
			// console.log("您正在输入年龄");
			this.age = this.$refs.age.value;
			console.log(this.age)
		}
	}
})