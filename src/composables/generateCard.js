import { useStore } from 'vuex';
import { computed } from 'vue';

export const createCard = () => {
	const store = useStore();
	const startValue = computed(() => store.state.startValue);
	const set = new Set();
	const setSize = Math.pow(startValue.value.size, 2) / 2;
	while (set.size < setSize) {
		const randomSeed = Math.floor(Math.random() * 18);
		set.add(randomSeed);
	}
	const arr = [...set, ...set];
	const randArr = arr.sort(() => Math.random() - 0.5);
	store.commit('changeCardArray', randArr);
};
