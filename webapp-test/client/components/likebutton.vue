<template>
    <button @click="likeMurmur">Like</button>
  </template>
  
  <script>
  export default {
    methods: {
      likeMurmur() {
        this.$emit('likeMurmur'); 
      },
    },
  };
  </script>
  
  <style scoped>

  </style>