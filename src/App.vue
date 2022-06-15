<template>
  <div class="app-container">
    <ProgressBar />
    <Backdrop>
      <StepCount />
    </Backdrop>
    <Backdrop>
      <Form />
    </Backdrop>
    <div class="buttons" v-if="$store.state.activeStep <= 2">
      <Button variant="previous" @handle-click="handleButtonClick('previous')">
        Previous
      </Button>
      <Button variant="next" @handle-click="handleButtonClick('next')">
        Next
      </Button>
    </div>
    <div class="buttons" v-if="$store.state.activeStep === 3">
      <Button variant="reset" @handle-click="handleButtonClick('reset')">
        Reset
      </Button>
      <Button variant="previous" @handle-click="handleButtonClick('send')">
        Send
      </Button>
    </div>
  </div>
</template>

<script>
import Backdrop from './components/Backdrop.vue';
import ProgressBar from './components/ProgressBar.vue';
import StepCount from './components/StepCount.vue';
import Form from './components/Form.vue';
import Button from './components/Button.vue';

export default {
  name: 'App',
  components: {
    Backdrop,
    ProgressBar,
    StepCount,
    Form,
    Button,
  },
  computed: {
    currentStepValid() {
      return this.$store.getters.getStepValidation(
        this.$store.state.activeStep
      );
    },
    allStepsValidated() {
      return this.$store.getters.getAllStepValidation;
    },
  },
  methods: {
    handleButtonClick(action) {
      if (action === 'reset') {
        this.$store.dispatch('resetForm');
        this.$store.dispatch('setActiveStep', 1);
        return;
      }
      if (action === 'send' && this.allStepsValidated) {
        this.$store.dispatch('sendForm');
        return;
      }
      if (this.currentStepValid) {
        switch (action) {
          case 'next':
            this.$store.dispatch(
              'setActiveStep',
              this.$store.state.activeStep + 1
            );
            break;
          case 'previous':
            this.$store.dispatch(
              'setActiveStep',
              this.$store.state.activeStep + -1
            );
            break;
          default:
            break;
        }
      } else if (action === 'previous') {
        this.$store.dispatch(
          'setActiveStep',
          this.$store.state.activeStep + -1
        );
      }
    },
  },
};
</script>

<style lang="scss">
* {
  font-family: 'Poppins', sans-serif;
}
body {
  background-color: #f5f7fb;
}
.app-container {
  width: 900px;
  margin: auto;
  margin-top: 60px;

  & > div {
    margin-bottom: 15px;
  }
}
.error-message {
  color: #aa4651;
  font-size: 0.8rem;
  margin-top: 4px;
}
</style>

<style lang="scss" scoped>
.buttons {
  text-align: center;
  margin-top: 50px;
  & > button {
    margin-right: 10px;
  }
}
</style>
