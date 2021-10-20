<template>
	<div class="card" :style="{ backgroundColor: bgcolor }">
		<slot></slot>
	</div>
</template>

<script setup>
import { defineProps, toRefs } from 'vue';

const props = defineProps({
	bgcolor: String,
});

const { bgcolor } = toRefs(props);
</script>

<style lang="scss" scoped>
.card {
	width: 85vw;
	max-width: 30rem;
	min-height: 60vh;
	border-radius: 1rem;
	padding: 3rem 2rem;
	box-shadow: 0px 2.8px 2.2px rgba(0, 0, 0, 0.011),
		0px 6.7px 5.3px rgba(0, 0, 0, 0.016), 0px 12.5px 10px rgba(0, 0, 0, 0.02),
		0px 22.3px 17.9px rgba(0, 0, 0, 0.024),
		0px 41.8px 33.4px rgba(0, 0, 0, 0.029), 0px 100px 80px rgba(0, 0, 0, 0.04);
	@media only screen and (max-width: 762px) {
		padding: 3rem 1rem;
	}
}
</style>
