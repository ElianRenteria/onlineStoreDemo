<script setup>
  import { ref } from 'vue';
  import { useToast } from 'primevue/usetoast';

  const text = ref();
  const toast = useToast();
  const greet = () => {
    toast.add({serverity:'success', summary: 'Item added to cart', detail: text.value});
  }

  import navBar from './components/navBar.vue';
</script>

<template>
  <Toast></Toast>
  <div class="container">
    <navBar></navBar>
    <div class = "inputStuff">
      <span class="p-float-label">
        <InputText id="txt" v-model="text" />
        <label for="txt">Text</label>
      </span>
      <Button label="Greet" @click="greet" icon="pi pi-user"></Button>
    </div>
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
