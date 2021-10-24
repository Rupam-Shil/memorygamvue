import { createStore } from 'vuex';

export default createStore({
	state: {
		startValue: {},
		selectedCard: [],
		cardArray: [],
		playersArray: [],
		dummyPlayer: 0,
	},
	mutations: {
		updateMutations(state, payload) {
			state.startValue = payload;
		},
		pushToSelectCard(state, payload) {
			state.selectedCard.push(payload);
		},
		changeCardArray(state, payload) {
			state.dummyPlayer = 0;
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
			state.dummyPlayer = 0;

			state.cardArray.forEach((card) => {
				card.isActive = false;
				card.isMatched = false;
			});
		},
		createPlayerArr(state, payload) {
			state.playersArray = [];
			for (let i = 0; i < state.startValue.player; i++) {
				let isCurrent;
				if (i == 0) {
					isCurrent = true;
				} else {
					isCurrent = false;
				}
				state.playersArray.push({
					id: i,
					score: 0,
					isCurrent,
					winner: false,
				});
			}
		},
		makerPlayerActive(state, payload) {
			state.playersArray.forEach((player) => {
				player.isCurrent = false;
			});
			state.playersArray[payload].isCurrent = true;
		},
		calcId(state, payload) {
			const tempId = state.dummyPlayer + 1;
			const getId = tempId % state.startValue.player;
			state.dummyPlayer = getId;
		},
		increasePoint(state, payload) {
			state.playersArray[payload].score += 1;
		},
	},
	actions: {
		checkMatched({ state, commit }) {
			if (
				state.cardArray[state.selectedCard[0]].value ===
				state.cardArray[state.selectedCard[1]].value
			) {
				commit('increasePoint', state.dummyPlayer);
				commit('calcId');
				for (const card of state.selectedCard) {
					setTimeout(() => {
						commit('makeMatched', [true, card]);
						commit('clearSelectCard');
						commit('makerPlayerActive', state.dummyPlayer);
					}, 500);
				}
			} else {
				commit('calcId');
				setTimeout(() => {
					for (const card of state.selectedCard) {
						commit('makeActive', [false, card]);
						commit('clearSelectCard');
						commit('makerPlayerActive', state.dummyPlayer);
					}
				}, 500);
			}
		},
	},
	modules: {},
});
