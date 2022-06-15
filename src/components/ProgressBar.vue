<template>
  <div class="progress-bar">
    <div class="progress-bar__progress" :style="{ width: progress + '%' }" />
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  computed: {
    progress() {
      return (this.$store.state.activeStep / 3) * 100;
    },
  },
};
</script>

<style lang="scss" scoped>
.progress-bar {
  position: relative;
  width: 100%;
  height: 18px;
  background-color: #ffffff;
  border-radius: 12px;

  &__progress {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: #437fe8;
    border-radius: 12px;
    transition: all 0.5s ease-in-out;
  }
}
</style>
