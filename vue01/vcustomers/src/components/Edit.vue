<template>
  <div class="edit container">
		<Alter v-if="alter" v-bind:message="alter"></Alter>   
    <h1 class="page-header">编辑用户</h1>
		<form v-on:submit="updataCustomer">
      <div class="well">
        <h4>用户信息</h4>
        <div class="form-group">
          <label>姓名</label>
          <input type="text" class="form-control" placeholder="name" v-model="customer.name">
        </div>
        <div class="form-group">
          <label>电话</label>
          <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
        </div>
        <div class="form-group">
          <label>邮箱</label>
          <input type="text" class="form-control" placeholder="email" v-model="customer.email">
        </div>
        <div class="form-group">
          <label>学历</label>
          <input type="text" class="form-control" placeholder="education" v-model="customer.education">
        </div>
        <div class="form-group">
          <label>毕业学校</label>
          <input type="text" class="form-control" placeholder="graduationschool" v-model="customer.graduationschool">
        </div>
        <div class="form-group">
          <label>职业</label>
          <input type="text" class="form-control" placeholder="profession" v-model="customer.profession">
        </div>
        <div class="form-group">
          <label>个人简介</label>
          <textarea   rows="10" class="form-control" v-model="customer.profile"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">添加</button>
      </div>
     </form>
  </div>
</template>

<script>
import Alter from './Alter'
export default {
  name: 'add',
  data () {
    return {
      customer:{},
			alter:""
    }
  },
  methods:{
	  fetchCustomer(id){
		  this.$http.get("http://localhost:3000/users/"+id)
			.then(function(response){
				console.log(response);
				this.customer = response.body;
			})
		  
	  },
	  updataCustomer(e){
		  //console.log(123);
		  if(!this.customer.name || !this.customer.phone || !this.customer.email){
			  console.log("填写的内容不能为空")
				this.alter = "请填写对应的信息！"
		  }else{
			  let updataCustomer = {
				  name:this.customer.name,
				  phone:this.customer.phone,
				  email:this.customer.email,
				  education:this.customer.education,
				  graduationschool:this.customer.graduationschool,
				  profession:this.customer.profession,
				  profile:this.customer.profile
			  }
			  this.$http.put("http://localhost:3000/users/"+this.$route.params.id,updataCustomer)
				.then(function(response){
					//console.log(response)
					this.$router.push({path:"/",querry:{alter:"用户信息更新成功"}})
				})
		  }
		  e.preventDefault();
	  }
  },
  created() {
  	this.fetchCustomer(this.$route.params.id)
  },
	components:{
		Alter
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
