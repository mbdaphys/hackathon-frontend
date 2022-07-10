export const state = () => ({
  isAuth: false,
  name: "",
  phone: "+7 999 814 11 11",
  points: 1000,
  cardsArray: [],
  inputHistory: [],
});

export const mutations = {
  set_input_history: (st, pl) => {
    st.inputHistory.push(pl);
  },
};

export const actions = {
  set_input_history: ({ commit }, pl) => {
    commit('set_input_history', pl);
  },
};

export const getters = {
  inputHistory: (st) => {
    return st.inputHistory;
  },
};
