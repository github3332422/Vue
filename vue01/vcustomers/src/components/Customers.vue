<template>
  <div class="customers container">
	<Alter v-if="alter" v-bind:message="alter"></Alter>
	<input type="text" class="form-control" placeholder="搜索" v-model="filterInput" />
	<br>
    <h1 class="page-header">用户管理系统</h1>
		<table class="table table-striped">
			<thead>
				<tr>
					<th>姓名</th>
					<th>电话</th>
					<th>邮箱</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="customer in filterBy(customers,filterInput)">
					<td>{{customer.name}}</td>
					<td>{{customer.phone}}</td>
					<td>{{customer.email}}</td>
					<td><router-link class="btn btn-default" v-bind:to="'/customer/' + customer.id">详情</router-link></td>
				</tr>
			</tbody>
		</table>
  </div>
</template>

<script>
import Alter from './Alter'
export default {
  name: 'customers',
  data () {
    return {
      customers:[],
	  alter:"",
	  filterInput:""
    }
  },
	methods:{
		fetchCustomers(){
			this.$http.get("http://localhost:3000/users")
			.then(function(response){
				//console.log(response)
				this.customers = response.body;
			})
		},
		filterBy(customers,value){
			return customers.filter(function(customer){
				return customer.name.match(value);
			})
		}
	},
	created() {
		if(this.$route.query.alter){
			this.alter = this.query.alter;
		}
		this.fetchCustomers();
	},
	update() {
		this.fetchCustomers();
	},
	components:{
		Alter
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
