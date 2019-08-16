<template>
  <div class="add container">
		<Alter v-if="alter" v-bind:message="alter"></Alter>     
    <h1 class="page-header">添加用户</h1>
		<form v-on:submit="addCustomer">
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
	  addCustomer(e){
		  //console.log(123);
		  if(!this.customer.name || !this.customer.phone || !this.customer.email){
			  console.log("填写的内容不能为空")
				this.alter = "请填写对应的信息！"
		  }else{
			  let newCustomer = {
				  name:this.customer.name,
				  phone:this.customer.phone,
				  email:this.customer.email,
				  education:this.customer.education,
				  graduationschool:this.customer.graduationschool,
				  profession:this.customer.profession,
				  profile:this.customer.profile
			  }
			  this.$http.post("http://localhost:3000/users",newCustomer)
				.then(function(response){
					//console.log(response)
					this.$router.push({path:"/",querry:{alter:"用户信息添加成功"}})
				})
		  }
		  e.preventDefault();
	  }
  },
	components:{
		Alter
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
