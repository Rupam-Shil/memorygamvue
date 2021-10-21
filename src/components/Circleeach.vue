<template>
	<div
		class="circle"
		:class="[val.isActive ? 'active' : '', val.isMatched ? 'matched' : '']"
		@click="clicked"
		ref="circle"
	>
		<div class="circle-front">
			<span v-if="startValue.theme == 'number'">{{ val.value }}</span>
			<img :src="require(`@/assets/${val.value}.png`)" alt="" v-else />
		</div>
		<div class="circle-back"></div>
	</div>
</template>

<script setup>
import { ref, defineProps, computed } from 'vue';
import { useStore } from 'vuex';

const circle = ref('');
// const isActive = ref(false);
// const isMatched = ref(false);

const store = useStore();
const startValue = computed(() => store.state.startValue);
const selectedCard = computed(() => store.state.selectedCard);

const props = defineProps({
	val: {},
	index: Number,
});

const clicked = () => {
	if (props.val.isActive || props.val.isMatched) {
		return;
	}
	store.commit('makeActive', [true, props.index]);

	if (selectedCard.value.length <= 1) {
		store.commit('pushToSelectCard', props.index);
		if (selectedCard.value.length === 2) {
			store.dispatch('checkMatched');
		}
	}
};
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
		img {
			width: 60px;
			height: 60px;
			@media only screen and (max-width: 760px) {
				width: 40px;
				height: 40px;
			}
		}
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
