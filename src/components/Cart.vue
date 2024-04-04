<template>
    <div class="cart">
      <h1>Cart & Payment</h1>
      <ul>
        <li v-for="(item, index) in cartItems" :key="index">
          {{ item.name }} - ${{ item.price }} <button @click="removeFromCart(index)">Remove</button>
        </li>
      </ul>
      <div>Total: ${{ cartTotal }}</div>
    </div>
  </template>
  
  <script setup>
  import { useStore } from 'vuex';
  
  const store = useStore();
  
  const cartItems = store.getters.cartItems;
  const cartTotal = store.getters.cartTotal;
  
  const removeFromCart = (index) => {
    store.dispatch('removeFromCart', index);
  };
  </script>
  
  <style scoped>
  /* Your cart component styles */
  </style>
  