<template>
	<navbar />
	<router-view />
</template>


<script setup>
import navbar from './components/NAV/navbar.vue'
</script>

<style scoped>
:global(*) {
  box-sizing: border-box;
}

:global(html),
:global(body),
:global(#app) {
 
  background-color: #000;
  color: #fff;
  font-family: 'Inter', system-ui, sans-serif;
}

* {
  margin: 0;
  padding: 0;
}

</style>

