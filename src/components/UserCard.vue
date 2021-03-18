<template>
	<div class="flex justify-start" @click="openInfo(user)">
		<img 
			class="user-avatar-mini" 
			:src="user.avatar"
			:class="{
				first: user.position === 1,
				second: user.position === 2,
				third: user.position === 3,
			}"
		>
		<div class="grow">
			<div class="mb-2 text">Пользователь:</div>
			<div class="text">{{ user.name }}</div>
		</div>
		<div class="flex">
			<img class="star" src="star.svg">
			<span class="text mt-4">{{ user.rating }}</span>
		</div>
	</div>
</template>

<script>
	export default{
		props: ['user'],
		methods: {
			openInfo(user){
				this.$emit('open-info', user);
			}
		}
	}
</script>

<style>
	.user-avatar-mini {
		border-radius: 100%;
		width: 60px;
		margin-right: 24px;
		border: 4px solid transparent;
	}
	.user-avatar-mini.first {
		border: 4px solid #FDD835;
	}
	.user-avatar-mini.second {
		border: 4px solid #90A4AE;
	}
	.user-avatar-mini.third {
		border: 4px solid #795548;
	}
	.grow {
		flex-grow: 1;
	}
	.star {
		margin-right: 7px;
	}
</style>