<template>
	<section>
		<Maincard bgcolor="var(--white)">
			<div class="theme">
				<label>Select Theme</label>
				<div class="input">
					<input
						type="radio"
						id="num-input"
						checked
						value="number"
						v-model="themeInput"
					/>
					<input
						type="radio"
						id="icon-input"
						value="icon"
						v-model="themeInput"
					/>
				</div>
			</div>
			<div class="player">
				<label>Number of Players</label>
				<div class="input">
					<input
						type="radio"
						id="one-input"
						checked
						value="1"
						v-model="playerInput"
					/>
					<input type="radio" id="two-input" value="2" v-model="playerInput" />

					<input
						type="radio"
						id="three-input"
						value="3"
						v-model="playerInput"
					/>
					<input type="radio" id="four-input" value="4" v-model="playerInput" />
				</div>
			</div>
			<div class="size">
				<label>Size</label>
				<div class="input">
					<input
						type="radio"
						id="size-four-input"
						checked
						value="4"
						v-model="sizeInput"
					/>
					<input
						type="radio"
						id="size-six-input"
						value="6"
						v-model="sizeInput"
					/>
				</div>
				<Buttonone
					bgColor="var(--yellow)"
					color="var(--white)"
					@clicked="updateValue"
					>Start Game</Buttonone
				>
			</div>
		</Maincard>
	</section>
</template>

<script setup>
import Maincard from '../components/Maincard.vue';
import Buttonone from '../components/Buttonone.vue';
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
//input binging
const themeInput = ref('number');
const playerInput = ref('1');
const sizeInput = ref('4');
//store
const store = useStore();

const updateValue = () => {
	const data = {
		theme: themeInput.value,
		player: parseInt(playerInput.value),
		size: parseInt(sizeInput.value),
	};
	store.commit('updateMutations', data);
	pushToStart();
};
//Route
const router = useRouter();

const pushToStart = () => {
	router.push('/start');
};
</script>

<style lang="scss" scoped>
@mixin beforeValue($id, $value) {
	##{$id} {
		&::before {
			content: $value;
		}
	}
}

section {
	background: var(--dark-bg);
	width: 100vw;
	height: 100vh;
	display: grid;
	place-content: center;
	padding: 3rem;
	label {
		color: var(--text-color);
		font-weight: 500;
		text-transform: capitalize;
	}
	.input {
		display: flex;
		gap: 1rem;
		input {
			margin: 0.5rem 0 2rem 0;
			outline: none;
			border: none;
			display: block;
			flex: 1;
			width: 100%;
			position: relative;
			height: 2.5rem;
			cursor: pointer;
			&::before {
				content: '';
				position: absolute;
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				background: var(--unchecked);
				border-radius: 100vmax;
				color: var(--white);
				font-weight: 600;
				font-size: 1.1rem;
			}
			&:checked {
				&::before {
					background: var(--dark-bg);
				}
			}
			//value
		}
		// #num-input {
		// 	&::before {
		// 		content: 'Numbers';
		// 	}
		// }
		@include beforeValue('num-input', 'Numbers');
		@include beforeValue('icon-input', 'Icons');
		@include beforeValue('one-input', '1');
		@include beforeValue('two-input', '2');
		@include beforeValue('three-input', '3');
		@include beforeValue('four-input', '4');
		@include beforeValue('size-four-input', '4 × 4');
		@include beforeValue('size-six-input', '6 × 6');
	}
}
</style>
