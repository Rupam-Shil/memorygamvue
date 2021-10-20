<template>
	<button :style="{ backgroundColor: bgColor, color: color }" @click="clicked">
		<slot></slot>
	</button>
</template>

<script setup>
import { defineProps, toRefs, defineEmits } from 'vue';

const props = defineProps({
	bgColor: String,
	color: String,
});
const { bgColor, color } = toRefs(props);

const emit = defineEmits(['clicked']);

const clicked = () => {
	emit('clicked');
};
</script>

<style lang="scss" scoped>
button {
	flex: 1;
	width: 100%;
	outline: none;
	border: none;
	height: 3rem;
	border-radius: 100vmax;
	font-weight: 600;
	font-size: 1.1rem;
	cursor: pointer;
	text-transform: capitalize;
	transition: 0.3s ease-in-out;
	&:hover {
		letter-spacing: 1px;
		font-weight: 700;
	}
}
</style>
