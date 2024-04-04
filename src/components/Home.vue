<script setup>
  import { ref, defineProps } from 'vue';

  const props = defineProps(['toast']);
  const text = ref();

  const greet = () => {
    props.toast.add({ serverity:'success', summary: 'Item added to cart', detail: text.value });
  }
</script>

<template>
  <div class="inputStuff">
    <span class="p-float-label">
      <InputText id="txt" v-model="text" />
      <label for="txt">Text</label>
    </span>
    <Button label="Greet" @click="greet" icon="pi pi-user"></Button>
  </div>
</template>

<style scoped>
</style>
