<template>
  <section class="stacks">
    <h2 class="titulo">Tecnologias</h2>

    <div class="categorias">

      <div class="card">
        <h3 class="card-titulo">Front-end</h3>
        <ul>
          <li v-for="stack in Staks_Front_End" :key="stack">
            <span class="dot"></span>
            {{ stack }}
          </li>
        </ul>
      </div>

      <div class="card">
        <h3 class="card-titulo">Back-end</h3>
        <ul>
          <li v-for="stack in Staks_Back_End" :key="stack">
            <span class="dot"></span>
            {{ stack }}
          </li>
        </ul>
      </div>

      <div class="card">
        <h3 class="card-titulo">Banco de Dados</h3>
        <ul>
          <li v-for="stack in Staks_SGBD" :key="stack">
            <span class="dot"></span>
            {{ stack }}
          </li>
        </ul>
      </div>

    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'

const Staks_Front_End = 
[
    "HTML",
    "CSS",
    "JavaScript",
    "Vue.js"
]

const Staks_Back_End = 
[
    "Python",
    "Node.js",
    "Java",
]

const Staks_SGBD = 
[
    "MYSQL",
    "MONGODB",
]




</script>

<style scoped>
.stacks {
  display: flex;
  flex-direction: column;
  padding: 4rem 7rem;
  color: white;
}

.titulo {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3rem;
  color: #39ff14;
  letter-spacing: 2px;
}

.categorias {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

.card {
  background-color: #0d0d0d;
  border: 1px solid #39ff14;
  border-radius: 12px;
  padding: 2rem;
  min-width: 200px;
  flex: 1;
  max-width: 280px;
  box-shadow: 0 0 16px rgba(57, 255, 20, 0.15);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.card:hover {
  box-shadow: 0 0 28px rgba(57, 255, 20, 0.45);
  transform: translateY(-4px);
}

@media (max-width: 768px) {
  .stacks {
    padding: 3rem 1.5rem;
  }

  .titulo {
    font-size: 1.75rem;
  }

  .categorias {
    gap: 1rem;
  }

  .card {
    padding: 1.5rem;
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .stacks {
    padding: 2rem 1rem;
  }

  .titulo {
    font-size: 1.5rem;
  }

  .card {
    padding: 1rem;
  }
}

.card-titulo {
  font-size: 1.1rem;
  color: #39ff14;
  margin-bottom: 1.2rem;
  letter-spacing: 1px;
  border-bottom: 1px solid rgba(57, 255, 20, 0.3);
  padding-bottom: 0.6rem;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

li {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.95rem;
  color: #d4d4d4;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #39ff14;
  box-shadow: 0 0 6px #39ff14;
  flex-shrink: 0;
}
</style>