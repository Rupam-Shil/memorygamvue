<template>
	<div class="circle" @click="clicked" ref="circle">
		<div class="circle-front"></div>
		<div class="circle-back"></div>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const circle = ref('');

const clicked = () => {
	circle.value.classList.add('active');
};

onMounted(() => {});
</script>

<style lang="scss" scoped>
.circle {
	width: 80px;
	height: 80px;
	border-radius: 50%;
	cursor: pointer;
	position: relative;
	perspective: 100px;
	transition: transform 0.8s;
	transform-style: preserve-3d;
	&-front,
	&-back {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		backface-visibility: hidden;
		position: absolute;
	}
	&-front {
		background: var(--unchecked);
		transform: rotateY(180deg);
		display: grid;
		place-items: center;
		color: var(--white);
		font-size: 2rem;
		font-weight: 600;
	}
	&-back {
		background: var(--dark-bg);
	}
	&.active {
		.circle-front {
			transform: rotateY(180deg);
		}
		transform: rotateY(180deg);
		&.matched {
			.circle-front {
				background: var(--yellow);
			}
		}
	}
}
</style>
