// initial state
const state = {
  store: {
    message: 'Hey'
  }
}

// getters
const getters = {
    message: (state, getters, rootState) => {
      return state.store.message
  }
}

// actions
const actions = {
}

// mutations
const mutations = {
  setMessage (state, message) {
      state.store.message = message;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
