<script setup>
    import { ref } from 'vue';
    
    const name = ref('');
    const email = ref('');
    const message = ref('');
    
    const submitForm = () => {
      // You can add your form submission logic here
      // For example, send a request to your backend server
    
      // After successful submission, you might want to clear the form fields
      name.value = '';
      email.value = '';
      message.value = '';
    };
</script>

<template>
    <div class="contact">
      <h1>Contact Us</h1>
      <p>Have questions or feedback? Reach out to us using the form below:</p>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="name" required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" v-model="message" rows="5" required></textarea>
        </div>
        <div class="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </template>
  
<style scoped>
    .contact {
        max-width: 600px;
        margin: auto;
        margin-top: 5%;
        padding: 20px;
    }

    h1 {
        text-align: center;
        margin-bottom: 20px;
    }

    p {
        text-align: center;
        margin-bottom: 20px;
    }

    .form-group {
        margin-bottom: 15px;
    }

    label {
        display: block;
        margin-bottom: 5px;
    }

    input,
    textarea {
        width: 100%;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-sizing: border-box;
    }

    button {
        padding: 10px 20px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    button:hover {
        background-color: #0056b3;
    }
</style>
