<template>
	<nav style="margin-bottom: 16px;">
		<router-link to="/">Slot Simples</router-link> |
		<router-link to="/slot-nomeado">Slot Nomeado</router-link>
	</nav>
	<router-view />
</template>

<script setup>
// Navegação por rotas
</script>

<style scoped>
nav a {
	margin: 0 8px;
	text-decoration: none;
	color: #1976d2;
}
nav a.router-link-exact-active {
	font-weight: bold;
	text-decoration: underline;
}
</style>