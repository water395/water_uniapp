<template>
	<view>
		<button @click="show()">开始</button>
	</view>
</template>

<script>
	export default {
		name:"card",
		data() {
			return {
				
			};
		},
		methods:{
			show(){
				uni.showToast({
					title:"加载中..",
					icon:"loading",
					duration:3000
				})
			}
		}
	}
</script>

<style>

</style>