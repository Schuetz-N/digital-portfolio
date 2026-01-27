<script setup lang="ts">
</script>

<template>
  <div class="background-container" aria-hidden="true">
    <img src="/background/banner.png" alt="" class="background-image"/>
    <div class="overlay"></div>
  </div>
</template>

<style scoped>
.background-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;

  overflow: hidden;
  opacity: 0.4;
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}
</style>
