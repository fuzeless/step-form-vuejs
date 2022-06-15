<template>
  <div class="form-container">
    <div class="form-group">
      <div v-if="this.$store.state.activeStep === 1">
        <FormInput title="Full Name" id="name" type="text" />
        <FormInput title="Your Email" id="email" type="email" />
      </div>
      <div v-if="this.$store.state.activeStep === 2">
        <FormInput title="Your Company Name" id="company" type="text" />
        <FormInput title="Number of Employees" id="employees" type="number" />
      </div>
      <div v-if="this.$store.state.activeStep === 3">
        <FormSelect
          title="From Where did you hear about us"
          :options="options"
        />
        <FormCheck title="I accept terms & conditions" id="acceptTerms" />
      </div>
    </div>
  </div>
</template>

<script>
import FormInput from './FormInput.vue';
import FormSelect from './FormSelect.vue';
import FormCheck from './FormCheck.vue';

export default {
  name: 'Form',
  data() {
    return {
      options: ['Friend', 'Facebook', 'Website'],
    };
  },
  components: {
    FormInput,
    FormSelect,
    FormCheck,
  },
};
</script>
