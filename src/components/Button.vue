<template>
  <button :class="['button', `button__${variant}`]" @click="$emit('handle-click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    variant: {
      type: String,
      default: 'reset',
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  border-radius: 12px;
  border: none;
  padding: 8px 24px;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.1rem;
  box-shadow: 1px 1px 10px rgb(0 0 0 / 40%);
  transition: box-shadow 0.35s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 1px 1px 10px rgb(0 0 0 / 40%), 6px 6px 12px rgb(0 0 0 / 20%);
  }

  &__next {
    background-color: #1e68cf;
  }

  &__previous {
    background-color: #72e6b1;
  }

  &__reset {
    background-color: #1d719a;
  }
}
</style>
