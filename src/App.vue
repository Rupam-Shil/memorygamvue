<template>
	<router-view />
</template>

<script setup>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { computed } from 'vue';
import _ from 'lodash';

const store = useStore();
const router = useRouter();

const startValue = computed(() => store.state.startValue);

if (_.isEmpty(startValue.value)) {
	router.push('/');
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=swap');
*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	font-family: 'Poppins', sans-serif;
	width: 100vw;
	height: 100vh;
	background: var(--light-bg);
}
:root {
	--dark-bg: #162938;
	--light-bg: #fcfcfc;
	--white: #fff;
	--text-color: #054474;
	--unchecked: #bacdda;
	--yellow: #fca215;
	--grey-text: #8c939c;
}
</style>
