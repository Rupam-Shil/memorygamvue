<template>
	<section id="loading" v-if="isLoading">
		<Loader />
	</section>
	<section v-else>
		<header>
			<h3 class="logo">memory</h3>
			<div class="controler">
				<div class="desktop">
					<Buttonone
						bgColor="var(--yellow)"
						color="var(--white)"
						class="mobile-hide"
						@clicked="reloadGame"
						>Restart</Buttonone
					>
					<Buttonone
						bgColor="var(--unchecked)"
						color="var(--text-color)"
						class="mobile-hide"
						@clicked="pushToMainMenu"
						>New Game</Buttonone
					>
					<Buttonone
						bgColor="var(--yellow)"
						color="var(--white)"
						class="desktop-hide"
						@clicked="pushToMainMenu"
						>Menu</Buttonone
					>
				</div>
			</div>
		</header>
		<Guesscard />
		<Players />
	</section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Loader from '../components/Loader';
import Buttonone from '../components/Buttonone.vue';
import Guesscard from '../components/Guesscard';
import Players from '../components/Players.vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { createCard } from '../composables/generateCard';

const isLoading = ref(true);
const router = useRouter();
const store = useStore();

onMounted(() => {
	setTimeout(() => {
		isLoading.value = false;
	}, 2000);
});
const pushToMainMenu = () => {
	router.push('/');
};

const reloadGame = () => {
	store.dispatch('restartGame');
};
</script>

<style lang="scss" scoped>
section {
	width: 100vw;
	max-width: 1200px;
	margin: 0 auto;
	height: 100vh;
	background: var(--light-bg);
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	header {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.logo {
			font-size: 2rem;
			font-weight: 800;
		}
		.desktop {
			display: flex;
			gap: 1rem;
			width: 20rem;
			.desktop-hide {
				display: none;
			}
			@media only screen and (max-width: 760px) {
				width: 10rem;
				.mobile-hide {
					display: none;
				}
				.desktop-hide {
					display: block;
				}
			}
		}
	}
}
</style>
