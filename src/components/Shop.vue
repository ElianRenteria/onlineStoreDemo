<template>
  <div class="shop">
    <Card v-for="(product, index) in products" :key="index" :image-src="product.imageSrc" :price="product.price" :description="product.description" />
  </div>
</template>

<script setup>
import Card from './card.vue'; // Adjust the path as per your project structure
import { ref } from 'vue';

const products = ref([
  { imageSrc: 'https://www.stockvault.net/data/2008/07/05/105800/thumb16.jpg', price: '$10', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { imageSrc: '../assets/test2.jpg', price: '$20', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { imageSrc: '../assets/test3.jpg', price: '$30', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { imageSrc: 'https://www.stockvault.net/data/2008/07/05/105800/thumb16.jpg', price: '$10', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { imageSrc: '../assets/test2.jpg', price: '$20', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { imageSrc: '../assets/test3.jpg', price: '$30', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { imageSrc: 'https://www.stockvault.net/data/2008/07/05/105800/thumb16.jpg', price: '$10', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { imageSrc: '../assets/test2.jpg', price: '$20', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { imageSrc: '../assets/test3.jpg', price: '$30', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { imageSrc: '../assets/test3.jpg', price: '$30', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
  // Add more product data as needed
]);
</script>

<style scoped>
  .shop {
    margin-top: 5%;
    display: grid;
    grid-template-columns: repeat(5, 3fr); /* Three columns */
    gap: 20px;
  }
</style>

