<template>
  <div class="card" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
    <img :src="imageSrc" alt="Product Image" class="product-image" />
    <div class="product-details" :class="{ 'hovered': isHovered }">
      <div class="price">{{ price }}</div>
      <div class="description">{{ description }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
  imageSrc: String,
  price: String,
  description: String
});

const isHovered = ref(false);
</script>

<style scoped>
.card {
  position: relative;
  width: 200px;
  height: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.product-image {
  width: 100%;
  height: 70%;
  object-fit: cover;
}

.product-details {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.product-details.hovered {
  transform: translateY(0);
}

.price {
  font-weight: bold;
}

.description {
  margin-top: 5px;
}
</style>

  