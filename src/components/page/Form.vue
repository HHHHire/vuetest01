<template>
	<el-form ref="form" :model="form" label-width="80px" @submit.prevent="onSubmit" style="margin:20px;width:60%;min-width:600px;">
		<el-form-item label="学校名称" >
			<el-input v-model="form.name"></el-input>
		</el-form-item>
		<el-form-item label="学院名称" class="form-text">
			<el-select v-model="form.region" placeholder="请选择院校">
				<el-option label="应科院" value="yingke"></el-option>
				<el-option label="校本部" value="benbu"></el-option>
			</el-select>
		</el-form-item>
		<el-form-item label="入学时间">
			<el-col :span="11">
				<el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
			</el-col>
			<el-col class="line" :span="2">-</el-col>
			<el-col :span="11">
				<el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
			</el-col>
		</el-form-item>
		<el-form-item label="是否在校" class="form-text">
			<el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
		</el-form-item>
		<el-form-item label="兴趣爱好" class="form-text">
			<el-checkbox-group v-model="form.type">
				<el-checkbox label="打篮球" name="type"></el-checkbox>
				<el-checkbox label="踢足球" name="type"></el-checkbox>
				<el-checkbox label="打羽毛球" name="type"></el-checkbox>
				<el-checkbox label="打游戏" name="type"></el-checkbox>
				<el-checkbox label="看动漫" name="type"></el-checkbox>
				<el-checkbox label="学习" name="type"></el-checkbox>
			</el-checkbox-group>
		</el-form-item>
		<el-form-item label="有无获奖" class="form-text">
			<el-radio-group v-model="form.resource">
				<el-radio label="有"></el-radio>
				<el-radio label="无"></el-radio>
			</el-radio-group>
		</el-form-item>
		<el-form-item label="自我介绍" class="form-text">
			<el-input type="textarea" v-model="form.desc"></el-input>
		</el-form-item>
		<el-form-item>
			<el-button type="primary">立即创建</el-button>
			<el-button @click.native.prevent>取消</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				}
			}
		},
		methods: {
			onSubmit() {
				console.log('submit!');
			}
		}
	}

</script>

<style scoped>
.form-text{
	text-align: left;
}

</style>