import { createStore } from 'vuex';

export default createStore({
	state: {
		startValue: {},
	},
	mutations: {
		updateMutations(state, payload) {
			state.startValue = payload;
		},
	},
	actions: {},
	modules: {},
});
