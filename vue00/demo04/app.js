new Vue({
	el:"#vue-app",
	data:{
		a:0,
		b:0,
		age:20
	},
	methods:{
		// addToA:function(){
		// 	console.log("Add to A");
		// 	return this.a + this.age;
		// },
		// addToB:function () {
		// 	console.log("Add to B");
		// 	return this.b + this.age;
		// }
	},
	computed:{
		addToA:function(){
			console.log("Add to A");
			return this.a + this.age;
		},
		addToB:function () {
			console.log("Add to B");
			return this.b + this.age;
		}
	}
})

