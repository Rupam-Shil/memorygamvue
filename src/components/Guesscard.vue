<template>
	<div class="game-container" :class="[startValue.size == 6 ? 'g-6' : 'g-4']">
		<Circleeach
			v-for="(val, index) in store.state.cardArray"
			:key="index"
			:val="val"
			:index="index"
		/>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import Circleeach from '../components/Circleeach.vue';
import { createCard } from '../composables/generateCard';

const store = useStore();

const startValue = computed(() => store.state.startValue);

const arr = ref(new Array(startValue.value.size * startValue.value.size));

//create card
createCard();
</script>

<style lang="scss" scoped>
.game-container {
	max-width: 700px;
	height: max-content;
	padding: 1rem;
	display: grid;
	justify-items: center;
	align-items: center;
	@media only screen and (max-width: 760px) {
		padding: 0;
	}
}
.g-4 {
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(4, 80px);
	gap: 1rem;
	& > * {
		@media only screen and (max-width: 760px) {
			width: 70px;
			height: 70px;
			gap: 0.5rem;
		}
	}
}
.g-6 {
	grid-template-columns: repeat(6, 1fr);
	grid-template-rows: repeat(6, 80px);
	gap: 0.5rem;
	& {
		@media only screen and (max-width: 760px) {
			grid-template-rows: repeat(6, 60px);
		}
	}
	& > * {
		@media only screen and (max-width: 760px) {
			width: 50px;
			height: 50px;
		}
	}
}
.green {
	width: 80px;
	height: 80px;
	border-radius: 50%;
	background: green;
}
</style>
