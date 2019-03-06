<template>
	<section>
		<!--列表-->
		<template>
			<el-table :data="users"  v-loading="false" style="width: 100%;">
				<el-table-column type="index" width="60">
				</el-table-column>
				<el-table-column prop="name" label="姓名" width="120" sortable>
				</el-table-column>
				<el-table-column prop="sex" label="性别" width="100" :formatter="formatSex" sortable>
				</el-table-column>
				<el-table-column prop="age" label="年龄" width="100" sortable>
				</el-table-column>
				<el-table-column prop="birth" label="生日" width="120" sortable>
				</el-table-column>
				<el-table-column prop="addr" label="地址" min-width="180" sortable>
				</el-table-column>
			</el-table>
		</template>

	</section>
</template>
<script>
	
	import axios from 'axios';

	export default {
		data() {
			return {
				filters: {
					name: ''
				},
			
				users: [
				]
			}
		},
		
		
		created(){
			axios.get('https://www.easy-mock.com/mock/5c6a7c715c189d024fa5eca9/example/a/u/user')
			.then(response=>{
				console.log(response); 
				this.users=response.data.data;
			})
		}
		
	};

</script>

<style scoped>

</style>