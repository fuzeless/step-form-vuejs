<template>
  <div class="form-check">
    <label for="check">
      <input
        type="checkbox"
        :id="id"
        v-model="checked"
        @input="handleInputValidation"
      />
      {{ title }}
    </label>
    <p class="error-message" v-if="isError">This field is required!</p>
  </div>
</template>

<script>
export default {
  name: 'FormCheck',
  data() {
    return {
      isError: Boolean,
    };
  },
  props: {
    id: String,
    title: String,
  },
  computed: {
    checked: {
      get() {
        return this.$store.state.inputs[this.id];
      },
      set() {
        this.$store.dispatch('setInputState', {
          type: this.id,
          newValue: !this.checked,
        });
      },
    },
  },
  methods: {
    handleInputValidation() {
      this.isError = this.checked;
      this.$store.dispatch('setValidityState', {
        type: this.id,
        validity: !this.isError,
      });
    },
  },
};
</script>
