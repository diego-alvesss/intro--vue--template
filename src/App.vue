<script setup>
// import Exercicio1 from './components/Exercicios/Exercicio1.vue';
// import UserCard from './components/Exmeplos10props.vue';
// const user = {
//   nome: String,
//   idade: Number,
//   email: String,
//   telefone: String,
//   ativo: Boolean,}
import UserCard from './components/Exercicios/exercicio11.vue';
</script>

<template>
<!-- <UserCard nome="Diego" email="Diegoalvesspfc2@gmail.com" idade="18" telefone="11991496037" ativo="true"></UserCard> -->
<!-- <UserCard :nome="user.nome" :email="user.email" :idade="user.idade" :telefone="user.telefone" :ativo="user.ativo"></UserCard> -->
<UserCard titulo="Hardystone Psycho T-shirt" :preco="350" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSujpKRVC1SFE6oo_-DfIiF9RWXmsX-FD40yRoOV8tbugibd6l92GbdYTiRISNtbB7PPS4&usqp=CAU" :estoque="true"></UserCard>
</template>

<style scoped>


</style>