<script setup>
  import Card from './card.vue'; // Adjust the path as per your project structure
  import { ref } from 'vue';
  const products = ref([
    { image: 'src/assets/test1.jpg', price: '$10', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { image: 'src/assets/test2.jpg', price: '$20', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { image: 'src/assets/test3.jpg', price: '$30', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    // Add more product data as needed
  ]);
</script>

<template>
    <div class="shop">
      <Card v-for="(product, index) in products" :key="index" :imageSrc="product.image" :price="product.price" :description="product.description" />
    </div>
</template>
  
<style scoped>
    .shop {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    }
</style>
