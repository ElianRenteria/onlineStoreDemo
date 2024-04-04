<template>
  <div class="shop">
    <Card v-for="(product, index) in products" :key="index" :image-src="product.imageSrc" :price="product.price" :description="product.description" />
  </div>
</template>

<script setup>
  import Card from './card.vue'; // Adjust the path as per your project structure
  import { ref } from 'vue';

  import { useStore } from 'vuex';

  const store = useStore();

  const addToCart = (product) => {
    store.dispatch('addToCart', product);
  };

  const products = ref([
    { imageSrc: 'https://www.stockvault.net/data/2008/07/05/105800/thumb16.jpg', price: '$10', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrOloUNbN9d3c0yO1epHQGQNPiFidJoxO20YOD5DYhww&s', price: '$20', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxuRoU2ku7W9SGlpsOqQzfqoHfAncPTJfS-bnoFS1YGylp9jLoBFBd05M_2CtexkMWe7U&usqp=CAU', price: '$30', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { imageSrc: 'https://www.stockvault.net/data/2008/07/05/105800/thumb16.jpg', price: '$10', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ2Qo4Wzow76RRgS6nNF7lqcFLbXiNrHh8MW8wZt5wN81oGtxzmCm7H4DWGHKFEcr1MbE&usqp=CAU', price: '$20', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQo8KqhmlKcpxYSiIVJgwc9j3VnRSMxZmSJPufLoPL-g&s', price: '$30', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { imageSrc: 'https://www.stockvault.net/data/2008/07/05/105800/thumb16.jpg', price: '$10', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5P4mc72FzEwd3tnT9FsGdVwj1tVjPz-afrXoBXPZcFA&s', price: '$20', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjdo8dXAKYvFhxcTi9Pe8qWq3_mCPe49vZFywN_Amaow&s', price: '$30', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrOloUNbN9d3c0yO1epHQGQNPiFidJoxO20YOD5DYhww&s', price: '$30', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
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

