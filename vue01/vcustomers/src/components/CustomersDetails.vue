<template>
  <div class="detail container">
	<router-link to="/" class="btn btn-default">返回</router-link>
    <h1 class="page-header">
		{{customer.name}}
		<span class="pull-right">
			<router-link class="btn btn-primary" v-bind:to="'/edit/'+customer.id">编辑</router-link>
			<button class="btn btn-primary" v-on:click="deleteCustomer(customer.id)">   删除</button>		
		</span>
	</h1>
     <ul class="list-group">
     	<li class="list-group-item"><span class="glyphicon glyphicon-phone"> {{customer.phone}}</span></li>
     	<li class="list-group-item"><span class="glyphicon glyphicon-envelope"> {{customer.email}}</span></li>
     </ul>

     <ul class="list-group">
     	<li class="list-group-item"><span class="glyphicon glyphicon-home"> {{customer.education}}</span></li>
     	<li class="list-group-item"><span class="glyphicon glyphicon-home"> {{customer.graduationschool}}</span></li>     	
     	<li class="list-group-item"><span class="glyphicon glyphicon-home"> {{customer.profession}}</span></li>
     	<li class="list-group-item"><span class="glyphicon glyphicon-home"> {{customer.profile}}</span></li>
     </ul>
  </div>
</template>

<script>
export default {
  name: 'customersdetails',
  data () {
    return {
      customer:""
    }
  },
  methods:{
	  fetchCustomers(id){
	  	this.$http.get("http://localhost:3000/users/" + id)
	  	.then(function(response){
	  		console.log(response.body)
	  		this.customer = response.body;
	  	})
	  },
	  deleteCustomer(id){
		 this.$http.delete("http://localhost:3000/users/" + id)
		 .then(function(response){
		 	this.$router.push({path:"/"})
		 })
	  }
  },
  created(){
	  this.fetchCustomers(this.$route.params.id);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
