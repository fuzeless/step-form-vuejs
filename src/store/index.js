import { createStore } from 'vuex';

const DEFAULT_STATE = {
  name: null,
  email: null,
  company: null,
  employees: null,
  referee: null,
  acceptTerms: false,
};

const defaultValidity = (state) => {
  const obj = {};
  Object.keys(state).forEach((key) => {
    obj[key] = false;
  });
  return obj;
};

export default createStore({
  state: {
    inputs: { ...DEFAULT_STATE },
    validity: defaultValidity(DEFAULT_STATE),
    activeStep: 1,
  },
  mutations: {
    setInputState(state, { type, newValue }) {
      state.inputs[type] = newValue;
    },
    setValidityState(state, { type, validity }) {
      state.validity[type] = validity;
    },
    setActiveStep(state, step) {
      state.activeStep = step;
    },
  },
  actions: {
    setInputState({ commit }, { type, newValue }) {
      commit('setInputState', { type, newValue });
    },
    setValidityState({ commit }, { type, validity }) {
      commit('setValidityState', { type, validity });
    },
    setActiveStep({ commit }, step) {
      if (step <= 3 && step >= 1) commit('setActiveStep', step);
    },
    resetForm({ commit }) {
      Object.entries(DEFAULT_STATE).forEach(([key, val]) => {
        commit('setInputState', { type: key, newValue: val });
        commit('setValidityState', { type: key, validity: false });
      });
    },
    sendForm({ state }) {
      console.log({ ...state.inputs });
    },
  },
  getters: {
    getStepValidation: (state) => (step) => {
      switch (step) {
        case 1:
          return state.validity.name && state.validity.email;
        case 2:
          return state.validity.company && state.validity.employees;
        case 3:
          return state.validity.referee && state.validity.acceptTerms;
        default:
          break;
      }
      return false;
    },
    getAllStepValidation: (state) => state.validity.name
      && state.validity.email
      && state.validity.company
      && state.validity.employees
      && state.validity.referee
      && state.validity.acceptTerms,
  },
  modules: {
  },
});
