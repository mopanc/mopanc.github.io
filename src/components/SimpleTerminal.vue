<template>
  <div class="simple-terminal">
    <!-- Botão sempre visível -->
    <button
      @click="toggleTerminal"
      class="terminal-btn"
      style="position: fixed; bottom: 20px; right: 20px; z-index: 9999; padding: 10px; background: #000; color: #0f0; border: 1px solid #0f0;"
    >
      {{ isOpen ? 'Fechar' : 'Authenticate' }}
    </button>

    <!-- Terminal simples -->
    <div
      v-if="isOpen"
      class="terminal-window"
      style="position: fixed; bottom: 80px; right: 20px; width: 400px; height: 300px; background: #000; color: #0f0; border: 1px solid #0f0; z-index: 9999; padding: 10px;"
    >
      <div>Terminal funcionando!</div>
      <div>Clique em "Fechar" para sair</div>
      <input
        v-model="testInput"
        @keyup.enter="handleTest"
        placeholder="Digite algo..."
        style="background: #000; color: #0f0; border: 1px solid #0f0; margin-top: 10px; padding: 5px;"
      />
      <div v-if="message">Você digitou: {{ message }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SimpleTerminal',
  data() {
    return {
      isOpen: false,
      testInput: '',
      message: ''
    }
  },
  methods: {
    toggleTerminal() {
      console.log('Toggle terminal clicked!', this.isOpen)
      this.isOpen = !this.isOpen
    },
    handleTest() {
      this.message = this.testInput
      this.testInput = ''
    }
  }
}
</script>

<style scoped>
.simple-terminal {
  /* Estilos simples */
}
</style>