<script setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
  name: String,
  price: Number
});
const emit = defineEmits(['buy']);
function comprar() {
  emit('buy', props.name);
}
</script>

<template>
  <div>
    <h3>{{ name }}</h3>
    <p>Preço: R$ {{ price }}</p>
    <button @click="comprar">Comprar</button>
  </div>
</template>
