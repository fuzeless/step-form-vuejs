<template>
  <div class="select">
    <p class="select__title">
      {{ title }}
    </p>
    <div :class="['select__field', { error: isError }]">
      <span
        class="select__field__content"
        @click="handleSelectClick"
        @keypress="foo"
      >
        {{ selected ? selected : '-- Choose answer --' }}
      </span>
    </div>
    <div :class="['select__items', { expanded: expanded }]">
      <div
        class="select__items__item"
        v-for="option in options"
        :key="option"
        @click="handleOptionClick(option)"
        @keypress="foo"
      >
        {{ option }}
      </div>
    </div>
    <p class="error-message" v-if="isError">This field is required!</p>
  </div>
</template>

<script>
export default {
  name: 'FormSelect',
  data() {
    return {
      isError: false,
      expanded: false,
    };
  },
  computed: {
    selected() {
      return this.$store.state.inputs.referee;
    },
  },
  props: {
    title: String,
    id: String,
    options: Array,
  },
  methods: {
    handleSelectClick() {
      this.expanded = !this.expanded;
      this.handleValidation();
    },
    handleOptionClick(option) {
      this.$store.dispatch('setValidityState', {
        type: 'referee',
        validity: true,
      });
      this.$store.dispatch('setInputState', {
        type: 'referee',
        newValue: option,
      });
      this.expanded = false;
      this.handleValidation();
    },
    handleValidation() {
      this.isError = this.selected === null || this.selected === '';
    },
  },
};
</script>

<style lang="scss" scoped>
.select {
  width: 100%;
  position: relative;
  margin-bottom: 20px;

  &__title {
    font-size: 1rem;
    margin: 0;
    margin-bottom: 6px;
  }

  &__field {
    width: 100%;
    background-color: #ffffff;
    border: 1px solid #ccc;
    border-radius: 4px;
    /* Show transparent outline first, for smooth transition */
    outline: 3px solid transparent;
    transition: all 0.2s ease-in-out;

    &__content {
      width: 100%;
      height: 100%;
      display: block;
      padding: 8px 16px;
      font-size: 1rem;
      color: #586068;
      cursor: pointer;
    }

    &.error {
      outline: 3px solid #f4b6c1;
      border: 1px solid #aa4651;
    }
  }

  &__items {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    top: calc(100% + 1px);
    width: 100%;
    background-color: #ffffff;
    border-radius: 12px;
    padding: 12px 0;
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.2);
    transition: visibility 0.4s, opacity 0.4s linear;

    &.expanded {
      visibility: visible;
      opacity: 1;
    }

    &__item {
      padding: 10px 12px;
      transition: all 0.2s ease-in;

      &:hover {
        background-color: #ccc;
        cursor: pointer;
      }
    }
  }
}
</style>
