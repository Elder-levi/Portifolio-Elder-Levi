<template>
    <section class="Services">
    <h1>Serviços</h1>

    <div class="container">
      <div
        class="Box"
        v-for="servico in Servicos"
        :key="servico.name"
      >
        <h2>{{ servico.name }}</h2>
        <img src="" alt="">
        <p>{{ servico.description }}</p>
      </div>
    </div>
  </section>
</template>
 <script setup>
 const Servicos = [
  {
    name: "Landing Page",
    img: "",
    description: "Transforme visitantes em clientes com páginas de alta conversão, desenvolvidas para destacar sua marca e gerar mais oportunidades de negócio."
  },
  {
    name: "E-commerce",
    img: "",
    description: "Venda seus produtos online com uma loja virtual segura, rápida e preparada para escalar o crescimento do seu negócio."
  },
  {
    name: "Automação de Processos",
    img: "",
    description: "Reduza custos operacionais e elimine tarefas manuais através de automações inteligentes que aumentam a eficiência da sua empresa."
  },
  {
    name: "Robôs de Atendimento",
    img: "",
    description: "Atenda seus clientes 24 horas por dia com robôs inteligentes capazes de responder dúvidas, qualificar leads e agilizar processos."
  }
];
</script>

<style scoped>
.Services {
  padding: 4rem 2rem;
}

.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.Box {
  padding: 1.5rem;
  border: 1px solid #39ff14;
  border-radius: 8px;
  padding: 2rem;
  min-width: 200px;
  flex: 1;
  max-width: 280px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.Box:hover {
   box-shadow: 0 0 28px rgba(57, 255, 20, 0.45);
  transform: translateY(-4px);
}


h1 {
  text-align: center;
  margin-bottom: 3rem;
  color: #39ff14;
}

@media (max-width: 768px) {
  .Services {
    padding: 3rem 1.5rem;
  }

  .Box {
    max-width: 100%;
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .Services {
    padding: 2rem 1rem;
  }

  .Box {
    padding: 1rem;
  }
}

.Box h2 {
  margin-bottom: 1rem;
}
</style>
