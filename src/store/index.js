import { createStore } from 'vuex';

export default createStore({
	state: {
		startValue: {},
		selectedCard: [],
		cardArray: [],
	},
	mutations: {
		updateMutations(state, payload) {
			state.startValue = payload;
		},
		pushToSelectCard(state, payload) {
			state.selectedCard.push(payload);
		},
		changeCardArray(state, payload) {
			state.selectedCard = [];
			state.cardArray = [];
			for (let i of payload) {
				state.cardArray.push({
					value: i,
					isActive: false,
					isMatched: false,
				});
			}
		},
		clearSelectCard(state, payload) {
			state.selectedCard = [];
		},
		makeActive(state, payload) {
			const [value, index] = payload;
			state.cardArray[index].isActive = value;
		},
		makeMatched(state, payload) {
			const [value, index] = payload;
			state.cardArray[index].isMatched = value;
		},
		visibilityHidden(state, payload) {
			state.selectedCard = [];

			state.cardArray.forEach((card) => {
				card.isActive = false;
				card.isMatched = false;
			});
		},
	},
	actions: {
		checkMatched({ state, commit }) {
			if (
				state.cardArray[state.selectedCard[0]].value ===
				state.cardArray[state.selectedCard[1]].value
			) {
				for (const card of state.selectedCard) {
					setTimeout(() => {
						commit('makeMatched', [true, card]);
						commit('clearSelectCard');
					}, 500);
				}
			} else {
				setTimeout(() => {
					for (const card of state.selectedCard) {
						commit('makeActive', [false, card]);
						commit('clearSelectCard');
					}
				}, 500);
			}
		},
	},
	modules: {},
});
