<script setup>
// import Exercicio1 from './components/Exercicios/Exercicio1.vue';
// import UserCard from './components/Exmeplos10props.vue';
// const user = {
//   nome: String,
//   idade: Number,
//   email: String,
//   telefone: String,
//   ativo: Boolean,}
// import UserCard from './components/Exercicios/exercicio11.vue';
import { ref } from 'vue';
import Exercicio12 from './components/Exercicios/exercicio12.vue';

const produtos = [
	{ name: 'Vinil Wholla Lotta Red', price: 50 },
	{ name: 'Vinil utopia', price: 60 },
	{ name: 'Vinil Die lit', price: 200 }
];
const mensagemCompra = ref('');
function handleBuy(nomeProduto) {
	const msg = `voce comprou o produto ${nomeProduto}`;
	mensagemCompra.value = msg;
	console.log(msg);
}
</script>

<template>
	<h2>Produtos</h2>
	<div v-for="(produto, idx) in produtos" :key="idx">
		<Exercicio12 :name="produto.name" :price="produto.price" @buy="handleBuy" />
	</div>
	<p v-if="mensagemCompra">{{ mensagemCompra }}</p>
</template>
<style scoped>


</style>