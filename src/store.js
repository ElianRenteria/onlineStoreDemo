import { createStore } from 'vuex';

export default createStore({
  state: {
    cartItems: []
  },
  mutations: {
    addToCart(state, product) {
      state.cartItems.push(product);
    },
    removeFromCart(state, index) {
      state.cartItems.splice(index, 1);
    }
  },
  actions: {
    addToCart({ commit }, product) {
      commit('addToCart', product);
    },
    removeFromCart({ commit }, index) {
      commit('removeFromCart', index);
    }
  },
  getters: {
    cartItems: state => state.cartItems,
    cartTotal: state => state.cartItems.reduce((total, item) => total + item.price, 0)
  }
});
