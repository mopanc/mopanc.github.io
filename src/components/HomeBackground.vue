<template>
  <div class="home-bg" aria-hidden="true"></div>
</template>

<script>
export default {
  name: 'HomeBackground'
}
</script>

<style scoped>
.home-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  background: var(--color-bg-primary);
}
</style>
