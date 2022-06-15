<template>
  <div class="form-input">
    <label :for="id">
      {{ title }}
      <input
        :type="type"
        :id="id"
        :class="{ error: isError }"
        v-model="inputValue"
        @input="handleInputChange"
        @focus="handleInputChange"
      />
      <p v-if="isError" class="error-message">
        {{ `This field must be ${type}!` }}
      </p>
    </label>
  </div>
</template>

<script>
export default {
  name: 'FormInput',
  data() {
    return {
      isError: false,
    };
  },
  computed: {
    inputValue: {
      get() {
        return this.$store.state.inputs[this.id];
      },
      set(newValue) {
        this.$store.dispatch('setInputState', {
          type: this.id,
          newValue,
        });
      },
    },
  },
  props: {
    title: String,
    type: String,
    id: String,
  },
  methods: {
    handleInputChange(event) {
      const { value } = event.target;
      let regex;
      switch (this.type) {
        case 'text':
          regex = /^(?!\s*$).+/;
          break;
        case 'email':
          regex = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
          break;
        case 'number':
          regex = /^[0-9]*$/;
          break;
        default:
          break;
      }
      const testResult = regex.test(value) && value.length > 0;
      this.isError = !testResult;
      this.$store.dispatch('setValidityState', {
        type: this.id,
        validity: testResult,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.form-input {
  /* width: inherit; */
  margin-bottom: 8px;
  label {
    display: block;
    margin-bottom: 6px;
    font-size: 1rem;
    width: 100%;

    input {
      box-sizing: border-box;
      width: 100%;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 8px 16px;
      font-size: 1rem;
      color: #586068;
      /* Show transparent outline first, for smooth transition */
      outline: 3px solid transparent;
      transition: all 0.2s ease-in-out;

      &:focus {
        outline: 3px solid #c2d9fb;
      }

      &.error {
        outline: 3px solid #f4b6c1;
        border: 1px solid #aa4651;
      }
    }
  }
}
</style>
