<script setup>
  import { useToast } from 'primevue/usetoast';
  const toast = useToast();
  import navBar from './components/navBar.vue';
</script>

<template>
  <Toast></Toast>
  <div class="container">
    <navBar :toast="toast"></navBar>
    <router-view :toast="toast"></router-view>
  </div>
</template>




<style scoped>
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    min-height: 100vh;
  }
  .inputStuff{
    margin-top: 20px;
    display: flex;
    flex-direction: row;
  }
</style>
