<template>
  <h1>Projetos</h1>
  <div class="projects-grid">
    
    <div
      v-for="(projeto, index) in projetos"
      :key="projeto.id"
      class="project-card"
    >
      <!-- Número decorativo -->
      <span class="project-number">
        {{ String(index + 1).padStart(2, "0") }}
      </span>

      <div class="card-content">
        <!-- Badge de tipo -->
        <span class="type-badge">{{ projeto.type }}</span>

        <!-- Título e descrição -->
        <div class="card-body">
          <h3 class="project-title">{{ projeto.title }}</h3>
          <p class="project-desc">
            {{ projeto.description }}
          </p>
        </div>

        <!-- Tags -->
        <div class="tags">
          <span
            v-for="tag in projeto.tags"
            :key="tag"
            class="tag"
          >
            {{ tag }}
          </span>
        </div>

        <!-- Link -->
        <a
          :href="projeto.link"
          class="project-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver Projeto →
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const projetos = [
  {
    id: 1,
    title: "Rosa Piscologa",
    description: "Página para Piscologa com o objetivo de apresentar seus serviços e contatos.",
    type: "Landing Page",
    tags: ["Vue.js", "CSS3", "HTML5"],
    link: "#"
  },
  {
    id: 2,
    title: "E-commerce de Personalizados",
    description: "Loja virtual cria para venda de produtos personalizados, com catálogo, carrinho e checkout integrado.",
    type: "E-commerce",
    tags: ["Vue.js" , "Node.js",  "Java" , "SpringBoot", "MySQL"],
    link: "#"
  },
  {
    id: 3,
    title: "Chatbot para Suporte (EM DESENVOLVIMENTO)",
    description: "Robô de atendimento para site de e-commerce, capaz de responder dúvidas frequentes e qualificar leads.",
    type: "Robô de Atendimento",
    tags: ["Python"],
    link: "#"
  }
  /*{
    id: 4,
    title: "Automação de Marketing",
    description: "Sistema para automação de campanhas de email marketing, segmentação de leads e análise de resultados.",
    type: "Automação",
    tags: ["Vue.js", "Python", "MySQL"],
    link: "#"
  },
*/

];
</script>

<style scoped>
 .project-card {
  position: relative;
  background: #0D1A0D;
  border: 1px solid #1A2E1A;
  border-top: 3px solid #00FF41;
  border-radius: 8px;
  padding: 32px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.project-card:hover {
  border-color: #00FF41;
  box-shadow: 0 0 20px rgba(0, 255, 65, 0.1);
}

/* Número decorativo */
.project-number {
  position: absolute;
  top: 24px;
  right: 32px;
  font-family: 'Courier New', monospace;
  font-size: 64px;
  font-weight: bold;
  color: #1A2E1A;
  user-select: none;
  pointer-events: none;
}

/* Badge de tipo */
.type-badge {
  display: inline-block;
  background: #1A2E1A;
  color: white;
  font-family: 'Courier New', monospace;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 4px 12px;
  border-radius: 4px;
  border: 1px solid rgba(0, 255, 65, 0.2);
}

/* Título */
.project-title {
  font-family: 'Courier New', monospace;
  font-size: 22px;
  font-weight: bold;
  color: white;
  margin: 16px 0 8px;
}

/* Descrição */
.project-desc {
  font-size: 15px;
  color: #CCFFCC;
  line-height: 24px;
  margin: 0;
}

/* Tags */
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
}

.tag {
  background: rgba(0, 0, 0, 0.4);
   color: white;
  font-family: 'Courier New', monospace;
  font-size: 10px;
  padding: 2px 8px;
  border: 1px solid #1A2E1A;
  border-radius: 4px;
}

/* Link */
.project-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #00FF41;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  margin-top: 24px;
  transition: gap 0.2s;
}

.project-link:hover {
  gap: 12px;
}

/* Grid de 2 colunas */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
}

h1{
  text-align: center;
  margin-bottom: 3rem;
  color: #39ff14;
}

@media (max-width: 768px) {
  .project-card {
    padding: 24px;
  }

  .project-number {
    font-size: 48px;
    top: 16px;
    right: 16px;
  }
}

@media (max-width: 480px) {
  .project-card {
    padding: 20px;
  }

  .project-number {
    font-size: 36px;
    top: 14px;
    right: 14px;
  }

  .project-title {
    font-size: 1.5rem;
  }

  .project-desc {
    font-size: 14px;
  }
}

</style>