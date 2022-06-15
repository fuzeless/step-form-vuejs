<template>
  <div class="backdrop-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Backdrop',
};
</script>

<style scoped>
.backdrop-container {
  max-width: 100%;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgb(0 0 0 / 20%), 6px 12px 20px rgb(0 0 0 / 10%);
  padding: 20px;
}
</style>
