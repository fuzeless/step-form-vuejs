<template>
  <div class="step-count">
    <div
      v-for="(step, index) in steps"
      :key="index"
      :class="[
        'step-count__item',
        {
          active: index + 1 === activeStep,
          completed: index + 1 < activeStep,
        },
      ]"
    >
      <div class="count">
        {{ index + 1 }}
      </div>
      <div class="content">
        {{ step }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StepCount',
  data() {
    return {
      steps: ['About You', 'About your Company', 'Finishing Up'],
    };
  },
  computed: {
    activeStep() {
      return this.$store.state.activeStep;
    },
  },
};
</script>

<style lang="scss" scoped>
.step-count {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__item {
    display: flex;
    align-items: center;
    gap: 8px;
    border-radius: 12px;
    padding: 8px 20px;
    background-color: #f3f3f3;

    .count {
      border-radius: 50%;
      background-color: #969899;
      width: 24px;
      height: 24px;
      color: #ffffff;
      text-align: center;
    }

    .content {
      color: #8f9294;
      font-weight: 600;
      font-size: 14px;
    }
  }

  .active {
    border: 2px solid #9fbcd7;
  }
  .completed {
    border: 2px solid #32683c;
  }
}
</style>
