<template>
	<div class="playercard-container">
		<Playercard
			v-for="(player, index) in store.state.playersArray"
			:key="index"
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
	display: flex;
	gap: 1rem;
}
</style>
