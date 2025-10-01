<template>
  <div class="slot-container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="rodape"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: "TresSlotsComponent"
};
</script>

<style scoped>
.slot-container {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  background: #f9f9f9;
}
header {
  font-weight: bold;
  margin-bottom: 12px;
}
footer {
  margin-top: 12px;
  color: #666;
  font-size: 0.9em;
}
</style>
