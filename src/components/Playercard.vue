<template>
	<div class="p-card" :class="[player.isCurrent ? 'active' : '']">
		<div class="name">Player {{ player.id + 1 }}</div>
		<div class="score">{{ player.score }}</div>
	</div>
</template>

<script setup>
import { defineProps, toRefs } from 'vue';

const props = defineProps({
	player: {},
});

const { player } = toRefs(props);
</script>

<style lang="scss" scoped>
.p-card {
	flex: 1;
	height: 3rem;
	background: var(--unchecked);
	color: var(--text-color);
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem;
	border-radius: 0.5rem;
	position: relative;
	&.active {
		background: var(--yellow);
		color: var(--white);

		&::before {
			content: '';
			position: absolute;
			width: 2rem;
			height: 1rem;
			top: 0;
			left: 50%;
			transform: translate(-50%, -100%);
			background: var(--yellow);
			clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
		}
	}
	.score {
		font-weight: 600;
	}
}
</style>
