<template>
  <h1 class="custom-title">
    <slot></slot>
  </h1>
  <h2 class="custom-subtitle">
    <slot name="subtitle"></slot>
  </h2>
</template>

<script>
export default {
  name: 'SlotNomeado',
};
</script>

<style scoped>
.custom-title {
  font-size: 2rem;
  color: #42b983;
}
</style>
