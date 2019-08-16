//实例化Vue对象
/*
data:数据
	el: element 代表需要获取的元素 一定是HTML中的根容器元素
	data: 用于数据的存储,data的数据只有在el的范围内才能展示
methods:
	用于存储各种方法。
	方法中调用数据: this.data中的数据的名称。
数据绑定:
	1.绑定属性值
		v-bind：对数据进行绑定
		<a v-bind:href="website">Vue官网</a>
		<input type="text" v-bind:value="name"> </input>
		
	2.绑定方法：
		v-html:
		<p v-html="websiteTag"></p>

*/
new Vue({
	el:'#vue-app',
	data:{
		name:'张清',
		job:"开发工程师",
		website:"https://cn.vuejs.org/",
		websiteTag:"<a href='https://cn.vuejs.org/v2/guide/installation.html#CDN'>Vue官网</a>"
	},
	methods:{
		greet:function(st){
			return "Hello World :" + st + " " + this.job;
		}
	}
});
