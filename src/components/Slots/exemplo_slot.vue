<template>
  <div>
    <h2>Componente Pai</h2>
    <FilhoSlot>
      <p>Conteúdo passado do Pai para o Filho via slot!</p>
    </FilhoSlot>
  </div>
</template>

<script>
export default {
  name: 'PaiComFilhoSlot',
  components: {
    FilhoSlot: {
      template: `
        <div class="slot-container">
          <h3>Componente Filho</h3>
          <slot></slot>
        </div>
      `
    }
  }
}
</script>

<style scoped>
.slot-container {
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  background: #f9f9f9;
  margin-top: 16px;
}
</style>