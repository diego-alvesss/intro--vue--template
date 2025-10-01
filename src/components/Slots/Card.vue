<template>
  <div class="card">
    <header class="card-header">
      <slot name="header">
        <h2>{{ titulo }}</h2>
      </slot>
    </header>
    <main class="card-main">
      <slot name="main">
        <p>{{ descricao }}</p>
      </slot>
    </main>
    <footer class="card-footer">
      <slot name="footer">
        <p>{{ footerText }}</p>
      </slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    titulo: {
      type: String,
      required: true
    },
    descricao: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  padding: 16px;
  background: #fff;
  max-width: 400px;
}
.card-header {
  font-weight: bold;
  margin-bottom: 8px;
}
.card-main {
  margin-bottom: 8px;
}
.card-footer {
  text-align: right;
  color: #888;
}
</style>
