<template>
  <div id="app">
    <div class="container">
		<div class="flex justify-between header">
			<h1 class="title">Рейтинг пользователей:</h1>
			<img 
				:class="{ asc: !isSortDesc }"
				class="sort" 
				src="sort.svg" 
				@click="sort"
			>
		</div>

		<div v-for="(user, index) in sortedData" :key="index" class="user-card">
			<UserCard :user="user" @open-info="openInfo" />	
		</div>

		<AdditionalInfo v-if="selectedUser != null" :user="selectedUser" @close="closeInfo" />
	</div>
  </div>
</template>

<script>
	import { loadData } from './components/data.js'
	import UserCard from './components/UserCard.vue'
	import AdditionalInfo from './components/AdditionalInfo.vue'

export default {
		components: {
			UserCard,
			AdditionalInfo
		},
		data() {
			return {
				data: [],
				isSortDesc: true,
				selectedUser: null,
			}
		},
		async created() {
			this.data = await loadData();
		},
		methods: {
			sort() {
				this.isSortDesc = !this.isSortDesc;
			},
			openInfo(user) {
				this.selectedUser = user;
			},
			closeInfo() {
				this.selectedUser = null;
			}
		},
		computed: {
			sortedData() {
				let sortedData = [...this.data];
				sortedData.sort( (a, b) => a.rating > b.rating ? -1 : 1);

				for (let i = 0; i < sortedData.length; i++) {
					sortedData[i] = {
						...sortedData[i],
						position: i + 1,
					};
				}

				if (!this.isSortDesc) {
					sortedData.reverse();
				}

				return sortedData;
			},
		}
	}
</script>

<style>
	h1, div, span {
		font-family: Avenir, sans-serif;
		font-style: normal;
		font-weight: normal;
		color: #2C3E50;
		margin: 0px;
		cursor: default;
	}
	.mb-0 {
		margin-bottom: 0px;
	}
	.mb-1 {
		margin-bottom: 1px;
	}
	.mb-2 {
		margin-bottom: 2px;
	}
	.mb-4 {
		margin-bottom: 4px;
	}
	.mt-4 {
		margin-top: 4px;
	}
	.flex {
		display: flex;
		align-items: center;
	}
	.justify-start {
		justify-content: flex-start;
	}
	.justify-end {
		justify-content: flex-end;
	}
	.justify-between {
		justify-content: space-between;
	}
	.text {
		font-size: 18px;
		line-height: 18px;
	}
	.container {
		width: 600px;
		margin: 0 auto;
		padding: 15px 0;
	}
	.header {
		margin-bottom: 26px;
		padding: 0px;
		padding-bottom: 3px;
	}
	.title {
		font-size: 24px;
		line-height: 34px;
	}
	.sort {
		border: 1px solid rgba(44, 62, 80, 0.67);
		box-sizing: border-box;
		border-radius: 8px;
		padding: 11px 8px;
	}
	.sort:hover {
		background: rgba(0, 0, 0, 0.07);
		border-radius: 8px;
		cursor: pointer;
	}
	.asc {
		transform: rotateX(180deg);
	}
	.user-card {
		margin-bottom: 8px;
		padding: 14px;
	}
	.user-card:hover {
		background: rgba(0, 0, 0, 0.07);
		border-radius: 10px;
	}
</style>

