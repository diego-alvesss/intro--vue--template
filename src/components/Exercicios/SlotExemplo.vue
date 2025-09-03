<template>
  <div>
    <h3>Componente Filho com Slot e Slot Nomeado</h3>
    <div>
      <slot>Conteúdo padrão do slot!</slot>
    </div>
    <footer>
      <slot name="footer">Rodapé padrão do slot nomeado!</slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'SlotExemplo'
}
</script>
