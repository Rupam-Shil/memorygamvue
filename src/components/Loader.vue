<template>
	<div class="main">
		<div class="box-outer">
			<div class="box-inner">{{ timer }}</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const timer = ref(3);

onMounted(() => {
	let countDown = setInterval(() => {
		timer.value -= 1;
		if (timer.value == 0) {
			timer.value = 'GO';
			clearInterval(countDown);
		}
	}, 500);
});
</script>

<style lang="scss" scoped>
@mixin gcenter {
	display: grid;
	place-items: center;
}
.main {
	width: 100%;
	height: 100%;
	@include gcenter;
	.box-outer {
		width: 30rem;
		aspect-ratio: 1;
		border-radius: 50%;
		@include gcenter;

		box-shadow: inset 20px 20px 60px #d6d6d6, inset -20px -20px 60px #ffffff;
		@media only screen and (max-width: 760px) {
			height: 20rem;
			width: 20rem;
		}
		.box-inner {
			width: 20rem;
			aspect-ratio: 1;
			border-radius: 50%;
			@include gcenter;
			box-shadow: 20px 20px 60px #d6d6d6, -20px -20px 60px #d6d6d6;
			font-weight: 800;
			font-size: 10rem;
			color: var(--grey-text);
			@media only screen and (max-width: 760px) {
				height: 10rem;
				width: 10rem;
				font-size: 6rem;
			}
		}
	}
}
</style>
