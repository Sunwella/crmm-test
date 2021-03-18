<template>
	<div class="modal-mask">
		<div class="modal-wrapper">
			<div class="modal-container">
				<div class="close" @click="close">
					<img src="close.svg">
				</div>
				<div class="modal-content">
					<div class="flex justify-between">
						<h1 class="info-title">Профиль пользователя:</h1>
					</div>
					<div class="flex">
						<img 
							:src="user.avatar" 
							:class="{
								first: user.position === 1,
								second: user.position === 2,
								third: user.position === 3,
							}"
							class="user-avatar"
						>
						<div class="info">
							<div class="mb-1 text">Имя:</div>
							<div class="mb-0 small-text">{{ user.name }}</div>
							<div class="mb-1 text">Баллы:</div>
							<div class="mb-0 small-text">{{ user.rating }}</div>
							<div class="mb-1 text">Позиция в рейтинге:</div>
							<div class="mb-0 small-text">{{ user.position }}</div>
						</div>
					</div>
				</div>
				<div>
					<div class="mb-4 text">О себе:</div>
					<div class="small-text">{{ user.description }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props:['user'],
		methods: {
			close() {
				this.$emit('close');
			}
		}
	}
</script>

<style>
	.info-title {
		font-size: 24px;
		line-height: 18px;
	}
	.close {
		position: absolute;
		top: 16px;
		right: 16px;
		padding: 8px;
		line-height: 1;

		width: 15px;
		height: 15px;
	}
	.close:hover {
		background: rgba(0, 0, 0, 0.07);
		border-radius: 16px;
		cursor: pointer;
	}
	.close img {
		width: 100%;
	}
	.user-avatar {
		width: 129px;
		border-radius: 100%;
		margin: 29px 37px 17px 0px;
	}
	.user-avatar.first {
		border: 4px solid #FDD835;
	}
	.user-avatar.second {
		border: 4px solid #90A4AE;
	}
	.user-avatar.third {
		border: 4px solid #795548;
	}
	.small-text {
		font-size: 16px;
		line-height: 18px;
	}
	.modal-mask {
		position: fixed;
		z-index: 9998;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.2);
		display: table;
	}
	.modal-wrapper {
		display: table-cell;
		vertical-align: middle;
	}
	.modal-container {
		position: relative;
		width: 30%;
		margin: 0px auto;
		padding: 27px 24px 21px 29px;
		background-color: #fff;
		box-shadow: rgba(0, 0, 0, 0.2);
	}
</style>