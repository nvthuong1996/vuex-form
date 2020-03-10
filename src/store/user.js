import Vue from "vue";
import api from "./../api.js";

const state = { user_key: "", list: {} };

const getters = {
  activeUser(state) {
    return state.list[state.user_key];
  }
};

const actions = {
  async getUser({ commit }) {
    api.getUser().then(user => {
      const { key } = user;
      commit("updateUserList", { key, user });
      commit("setUserKey", key);
    });
  },
  async updateUser({ commit }, data) {
    api.updateUser(data).then(user => {
      const { key } = user;
      commit("updateUserList", { key, user });
    });
  }
};

const mutations = {
  setUserKey(state, key) {
    state.user_key = key;
  },
  updateUserList(state, { key, user }) {
    Vue.set(state.list, key, user);
  }
};

export default { state, getters, actions, mutations };
