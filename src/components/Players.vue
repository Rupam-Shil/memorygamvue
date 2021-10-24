<template>
	<div class="playercard-container">
		<Playercard
			v-for="(player, index) in store.state.playersArray"
			:key="index"
			:player="player"
		/>
	</div>
</template>

<script setup>
import Playercard from '../components/Playercard.vue';
import { useStore } from 'vuex';

const store = useStore();

store.commit('createPlayerArr');
</script>

<style lang="scss" scoped>
.playercard-container {
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	column-gap: 1rem;
	row-gap: 2rem;
	justify-content: space-between;
	align-items: center;
}
</style>
