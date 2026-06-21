<template>
  <nav aria-label="Main navigation">
    <div class="brand"><router-link to="/">Levi</router-link></div>
    <ul>
      <li><router-link to="/" class="meu-link" >Home</router-link></li>
      <li><router-link to="/projetos" class="meu-link">Projetos</router-link></li>
      <li><router-link to="/servicos" class="meu-link">Serviços</router-link></li>
      <li><router-link to="/about" class="meu-link">About</router-link></li>
    </ul>
  </nav>


</template>


<script setup>


</script>


<style scoped>
nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 4%;
  margin-right: 8%;
  margin-left: 8%;
  color: white;
}

/* Brand */
.brand a {
  font-size: 1.8rem;
  font-weight: 700;
  color: #2CFF05;
  text-decoration: none;
  transition: 0.3s ease;
}

.brand a:hover {
  color: #2CFF05;
}

/* Lista */
ul {
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin: 0;
  padding: 0;
}

/* Links da nav */
ul :deep(a) {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding-bottom: 4px;
  border-bottom: 3px solid transparent;
  transition: 0.3s ease;
}

/* Hover */
ul :deep(a:hover) {
  color:#2CFF05;
  border-bottom: 3px solid #2CFF05;
}

/* Link da rota ativa — gerado automaticamente pelo Vue Router */
ul :deep(.router-link-exact-active) {
  color: #2CFF05;
  border-bottom: 3px solid #2CFF05;
}

@media (max-width: 768px) {
  nav {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0;
    margin: 2rem 1.5rem;
  }

  ul {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  ul :deep(a) {
    font-size: 0.95rem;
  }
}










</style>


