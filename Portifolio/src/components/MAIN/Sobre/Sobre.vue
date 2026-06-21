<template>
  <section>

  <div class = "Sobre">
    <h1>Sobre Mim</h1>
    <p>
      Olá! Me chamo Elder Levi, tenho 21 anos e moro em Salvador/BA.
      Sou técnico em Desenvolvimento de Sistemas pelo SENAI e atualmente
      estou cursando o 2° semestre de Bacharelado em Sistemas de Informação..
    </p>
    <p>
      Minha paixão pela tecnologia começou na infância,
       quando eu desmontava eletrônicos por pura curiosidade. 
       Na adolescência, o interesse evoluiu para entender como os softwares daqueles aparelhos funcionavam, 
       o que me levou direto para o mundo da programação.
    </p>
  </div>
  <div class = "Objetivos"> 
   <h1>Objetivos</h1>
   <p>
    Busco a minha primeira oportunidade de estágio ou posição júnior como Desenvolvedor de Software ou em áreas voltadas para a Automação de Processos (RPA/DevOps). Meu objetivo é aplicar meu conhecimento prático, 
    aprender novas tecnologias e compreender a dinâmica do mercado de desenvolvimento em escala corporativa.
  </p>
   </div>
   <Contato></Contato>
  </section>
</template>

<script setup>
import Contato from './Contato.vue'
</script>
  
<style scoped>

section{
  padding: 2rem 0;
  margin: auto;
  width:  65rem;
  height: 100%;
  font-family: "Inter", jetbrains-mono, monospace;
  font-size: 1.25rem;
}


</style>
