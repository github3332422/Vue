new Vue({
	el:"#vue-app",
	data:{
		age:30,
		x:0,
		y:0
	},
	methods:{
		add:function(){
			this.age ++;
		},
		sub:function(){
			this.age --;
		},
		updateXY:function(event){
			// console.log(event);
			this.x = event.offsetX;
			this.y = event.offsetY;
		},
		stopMoving:function(){
			event.stopPropagation();
		},
		alter:function(){
			alter("Hello World")
		}
	}
})